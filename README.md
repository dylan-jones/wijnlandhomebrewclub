# wijnlandhomebrewclub

## Contact form setup

The contact form now submits to `/api/contact`, handled by the Cloudflare Worker in `worker/index.js`.

It sends email using MailerSend. Configure these secrets before running `wrangler dev` or deploying:

- `MAILERSEND_API_TOKEN`
- `CONTACT_TO_EMAIL` (where messages should arrive, for example `wijnlandcommittee@gmail.com`)
- `CONTACT_FROM_EMAIL` (optional verified sender in MailerSend; if omitted, `CONTACT_TO_EMAIL` is used)

Both the Contact Us form and the Join form send to `CONTACT_TO_EMAIL`. The visitor's first name, last name, email, location, phone number, and message are included in the email body, and the visitor's email is attached as `reply_to` so the committee can reply directly.

MailerSend still requires the `from.email` address to be verified. If you omit `CONTACT_FROM_EMAIL`, the worker uses the committee inbox address as the sender, which must also be verified in MailerSend.

Set them with Wrangler:

```bash
npx wrangler secret put MAILERSEND_API_TOKEN
npx wrangler secret put CONTACT_TO_EMAIL
npx wrangler secret put CONTACT_FROM_EMAIL
npx wrangler secret put CONTACT_FROM_NAME
```

Local note:

- `npm run dev` runs the Vite-only dev server and will not include worker routes.
- Use `npm run preview` to test the contact API locally through Wrangler.