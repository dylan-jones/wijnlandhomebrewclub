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

async function handleContact(request, env) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const firstName = String(payload?.fn || "").trim();
  const lastName = String(payload?.ln || "").trim();
  const location = String(payload?.loc || "").trim();
  const phone = String(payload?.tel || "").trim();
  const message = String(payload?.msg || "").trim();

  if (!firstName || !lastName || !message) {
    return json(
      { ok: false, error: "First name, last name, and message are required." },
      { status: 400 }
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
      reply_to: [],
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

    if (request.method === "POST" && url.pathname === "/api/contact") {
      return handleContact(request, env);
    }

    if (env?.ASSETS && typeof env.ASSETS.fetch === "function") {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  },
};
