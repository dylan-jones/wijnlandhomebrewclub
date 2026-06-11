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
  const location = String(payload?.loc ?? payload?.location ?? "").trim();
  const phone = String(payload?.tel ?? payload?.phone ?? "").trim();
  const message = String(payload?.msg ?? payload?.message ?? "").trim();

  if (!firstName || !lastName || !message) {
    return json(
      { ok: false, error: "First name, last name, and message are required." },
      { status: 422 }
    );
  }

  const resendKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_TO_EMAIL;
  const fromEmail = env.CONTACT_FROM_EMAIL;

  if (!resendKey || !toEmail || !fromEmail) {
    return json(
      {
        ok: false,
        error:
          "Contact form is not configured yet. Add RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL in Cloudflare.",
      },
      { status: 500 }
    );
  }

  if (!isEmail(toEmail) || !isEmail(fromEmail)) {
    return json({ ok: false, error: "Configured contact emails are invalid." }, { status: 500 });
  }

  const text = [
    "New website contact message",
    "",
    `Name: ${firstName} ${lastName}`,
    `Location: ${location || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `Contact message from ${firstName} ${lastName}`,
      text,
    }),
  });

  if (!resendResponse.ok) {
    const details = await resendResponse.text().catch(() => "");
    return json(
      {
        ok: false,
        error: "Email provider rejected the request.",
        details,
      },
      { status: 502 }
    );
  }

  return json({ ok: true });
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
