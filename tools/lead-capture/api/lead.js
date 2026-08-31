// LeadSetu — generic lead-capture endpoint.
// POST { name, contact, message, source? } as JSON or form-urlencoded.
// 1) Appends the lead as a row to a Google Sheet (service-account auth).
// 2) Sends the submitter an instant acknowledgement email (Gmail SMTP + app password).
//
// Required env vars (set per-client in the Vercel project settings):
//   GOOGLE_SERVICE_ACCOUNT_EMAIL   - from the GCP service account JSON
//   GOOGLE_PRIVATE_KEY             - from the GCP service account JSON (keep \n escaped)
//   GOOGLE_SHEET_ID                - the target Sheet's ID (share the Sheet with the service account email, Editor access)
//   SHEET_TAB_NAME                 - defaults to "Leads"
//   GMAIL_USER                     - the Gmail address sending acknowledgements
//   GMAIL_APP_PASSWORD             - Gmail App Password (not the account password) for GMAIL_USER
//   BUSINESS_NAME                  - shown in the ack email, e.g. "Sharma Skin Clinic"
//   ACK_REPLY_TO                   - optional, defaults to GMAIL_USER
//
// This function intentionally has zero client-specific logic. Copy this whole
// tools/lead-capture/ folder into its own Vercel project per client and set
// the env vars above — nothing else should need to change.

const { google } = require('googleapis');
const nodemailer = require('nodemailer');

function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  try {
    return JSON.parse(req.body || '{}');
  } catch {
    return {};
  }
}

async function appendToSheet({ name, contact, message, source }) {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    null,
    (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  );
  const sheets = google.sheets({ version: 'v4', auth });
  const tab = process.env.SHEET_TAB_NAME || 'Leads';
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${tab}!A:F`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        new Date().toISOString(),
        name || '',
        contact || '',
        message || '',
        source || 'web',
        'new',
      ]],
    },
  });
}

async function sendAck({ name, contact }) {
  const isEmail = /.+@.+\..+/.test(contact || '');
  if (!isEmail) return; // only the Sheet gets the lead; ack email needs an email contact

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const business = process.env.BUSINESS_NAME || 'us';
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: contact,
    replyTo: process.env.ACK_REPLY_TO || process.env.GMAIL_USER,
    subject: `We got your enquiry — ${business}`,
    text: `Hi ${name || 'there'},\n\nThanks for reaching out to ${business}. We've received your message and someone will get back to you shortly.\n\n- ${business}`,
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Use POST' });
    return;
  }

  const body = readBody(req);
  const name = String(body.name || '').slice(0, 200);
  const contact = String(body.contact || body.email || body.phone || '').slice(0, 200);
  const message = String(body.message || '').slice(0, 2000);
  const source = String(body.source || '').slice(0, 100);

  if (!name || !contact) {
    res.status(400).json({ ok: false, error: 'name and contact are required' });
    return;
  }

  try {
    await appendToSheet({ name, contact, message, source });
  } catch (err) {
    console.error('appendToSheet failed', err);
    res.status(500).json({ ok: false, error: 'Could not save lead' });
    return;
  }

  try {
    await sendAck({ name, contact });
  } catch (err) {
    // Lead is already saved; don't fail the request just because the ack email failed.
    console.error('sendAck failed', err);
  }

  res.status(200).json({ ok: true });
};
