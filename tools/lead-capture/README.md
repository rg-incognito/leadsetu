# LeadSetu lead-capture (generic, per-client deploy)

What this is: the actual thing we hand a client. A one-page form (`public/form.html`)
that posts to a Vercel Function (`api/lead.js`), which appends the lead to a Google
Sheet and emails the submitter an instant acknowledgement.

Zero client-specific code — copy this folder into its own Vercel project per
client and configure only via environment variables.

## One-time setup per client (~15 min, all free tier)

1. **Google Sheet**: create a new Sheet, add header row `Timestamp | Name | Contact | Message | Source | Status`
   to a tab (default name `Leads`). Copy the Sheet ID from the URL.
2. **Google service account** (for the Sheets API):
   - GCP Console → new project (or reuse one) → enable "Google Sheets API".
   - Create a service account → create a JSON key.
   - Share the Sheet with the service account's `...@...iam.gserviceaccount.com` email, Editor access.
   - From the JSON key, take `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`, and `private_key` → `GOOGLE_PRIVATE_KEY`.
3. **Gmail App Password** (for sending the ack email — use a real Gmail account, ideally
   a dedicated one per business, not the owner's personal address for client sends):
   - Google Account → Security → 2-Step Verification → App Passwords → generate one for "Mail".
4. **Vercel project**:
   - `vercel` (or import the folder via the Vercel dashboard/GitHub).
   - Set env vars: `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`,
     `SHEET_TAB_NAME` (optional), `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `BUSINESS_NAME`, `ACK_REPLY_TO` (optional).
   - Deploy. Test by opening `/form.html` and submitting.

## Notes
- `api/lead.js` never fails the request just because the ack email failed — the lead is
  saved to the Sheet first, email is best-effort second.
- `contact` can be a phone number; in that case the Sheet still gets the row but no ack
  email is sent (no address to send to). Good enough for v1 — WhatsApp-based ack is a
  possible v2 if a client specifically wants it.
- Keep this folder generic. Client-specific copy/branding lives in that client's own
  `public/form.html` fork, not here.
