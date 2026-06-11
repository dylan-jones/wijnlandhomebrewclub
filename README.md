# wijnlandhomebrewclub

## Contact form setup

The contact form now submits to `/api/contact`, handled by the Cloudflare Worker in `worker/index.js`.

It sends email using Resend. Configure these secrets before running `wrangler dev` or deploying:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (where messages should arrive)
- `CONTACT_FROM_EMAIL` (a verified sender in Resend)

Set them with Wrangler:

```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put CONTACT_TO_EMAIL
npx wrangler secret put CONTACT_FROM_EMAIL
```

Local note:

- `npm run dev` runs the Vite-only dev server and will not include worker routes.
- Use `npm run preview` to test the contact API locally through Wrangler.