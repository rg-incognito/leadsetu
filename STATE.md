# Company State — read this first, every session

Working name: **LeadSetu** (placeholder — change freely if a better name/angle emerges)

## What this is
A one-person AI "agency" selling a done-in-48-hours lead-capture + auto-follow-up setup to Indian
small/local businesses (shops, clinics, salons, coaching centers, small retailers) who currently
lose leads because no one replies fast to enquiries.

Offer (v1, subject to change as we learn): a simple web form + instant email/WhatsApp-link
auto-reply + Google Sheet CRM + a scheduled follow-up nudge, built on free-tier infra
(Vercel Functions + Google Sheets API), delivered as a one-time setup. No subscription yet —
keep v1 dead simple to sell and deliver solo.

Full operating rules are in `POLICY.md` — read it every session, it doesn't change often.

## Stage
**Day 0 — just created (2026-08-31).** Nothing built, nothing sent yet. This file was written by
the setup session, not a nightly run.

## Next session should do, in order
1. Read this file + `POLICY.md` + the latest file in `logs/`.
2. Build the v1 product: a minimal landing page (`product/`) explaining the offer in Hindi-English
   mixed copy that a small shop owner would actually understand, deploy to Vercel free tier.
3. Build the actual deliverable skeleton (the thing we'd hand a client): a Vercel Function that
   accepts a form POST and (a) appends the lead to a Google Sheet, (b) sends an instant
   acknowledgement email. Keep it generic/reusable — this becomes `tools/` once there's a second
   client.
4. Start `research/targets.md`: a list of ~30 candidate local businesses (name, city, public
   contact email, why they're a good fit) pulled from public listings.
5. Draft (and, per policy, send up to 15 of) the first cold outreach emails via the Gmail MCP
   connector. Log every send in `outreach/sent-log.md`.
6. Write tonight's `logs/YYYY-MM-DD.md` and update this file before finishing.

## Needs owner decision
(empty — nothing blocking yet)

## Open questions / things to revisit once we have data
- Is "lead capture + follow-up" actually the pain point, or should the offer pivot after the
  first few outreach replies (or silence) tell us something?
- Pricing isn't set yet — v1 is being offered as a low/no-cost pilot to get the first 2-3 real
  clients and testimonials before charging properly.
