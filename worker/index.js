const json = (body, init = {}) => {
  const headers = new Headers(init.headers);
  headers.set("content-type", "application/json; charset=utf-8");
  headers.set("cache-control", "no-store");

  return new Response(JSON.stringify(body), {
    ...init,
    headers,
  });
};

function isEmail(value) {
  return typeof value === "string" && /.+@.+\..+/.test(value);
}

async function parsePayload(request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    return Object.fromEntries(formData.entries());
  }

  const textBody = await request.text();
  if (!textBody) {
    return {};
  }

  try {
    return JSON.parse(textBody);
  } catch {
    return {};
  }
}

async function handleContact(request, env) {
  let payload;

  try {
    payload = await parsePayload(request);
  } catch {
    return json({ ok: false, error: "Could not parse request body." }, { status: 400 });
  }

  const firstName = String(payload?.fn ?? payload?.firstName ?? "").trim();
  const lastName = String(payload?.ln ?? payload?.lastName ?? "").trim();
  const userEmail = String(payload?.email ?? payload?.userEmail ?? "").trim();
  const location = String(payload?.loc ?? payload?.location ?? "").trim();
  const phone = String(payload?.tel ?? payload?.phone ?? "").trim();
  const message = String(payload?.msg ?? payload?.message ?? "").trim();
  const formType = String(payload?.formType ?? "contact").trim().toLowerCase();

  if (!firstName || !lastName || !userEmail || !message) {
    return json(
      { ok: false, error: "First name, last name, email, and message are required." },
      { status: 422 }
    );
  }

  const mailerSendKey = env.MAILERSEND_API_TOKEN;
  const toEmail = env.CONTACT_TO_EMAIL;
  const fromEmail = env.CONTACT_FROM_EMAIL || toEmail;
  const senderName = "Wijnland Homebrew Club";

  if (!mailerSendKey || !toEmail || !fromEmail) {
    return json(
      {
        ok: false,
        error:
          "Contact form is not configured yet. Add MAILERSEND_API_TOKEN and CONTACT_TO_EMAIL in Cloudflare.",
      },
      { status: 500 }
    );
  }

  if (!isEmail(toEmail) || !isEmail(fromEmail) || !isEmail(userEmail)) {
    return json(
      {
        ok: false,
        error:
          "Configured contact emails are invalid. MailerSend requires from.email to be a verified sender; the user's email is used as reply_to.",
      },
      { status: 500 }
    );
  }

  const normalizedFormType = formType === "join" ? "join" : "contact";
  const subjectPrefix = normalizedFormType === "join" ? "New join form submission" : "New contact message";

  const text = [
    normalizedFormType === "join" ? "New website join request" : "New website contact message",
    "",
    `Name: ${firstName} ${lastName}`,
    `Email: ${userEmail}`,
    `Location: ${location || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const mailerSendResponse = await fetch("https://api.mailersend.com/v1/email", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${mailerSendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: {
        email: fromEmail,
        name: senderName || fromEmail,
      },
      to: [
        {
          email: toEmail,
          name: "Wijnland Committee",
        },
      ],
      reply_to: {
        email: userEmail,
        name: `${firstName} ${lastName}`.trim(),
      },
      subject: `${subjectPrefix}: ${firstName} ${lastName}`,
      text,
    }),
  });

  if (!mailerSendResponse.ok) {
    const details = await mailerSendResponse.text().catch(() => "");
    return json(
      {
        ok: false,
        error: "Email provider rejected the request.",
        details,
      },
      { status: 502 }
    );
  }

  return json(
    {
      ok: true,
      messageId: mailerSendResponse.headers.get("x-message-id") || null,
    },
    { status: 202 }
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method === "POST") {
        return handleContact(request, env);
      }

      return json({ ok: false, error: "Method Not Allowed" }, { status: 405 });
    }

    if (env?.ASSETS && typeof env.ASSETS.fetch === "function") {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  },
};
