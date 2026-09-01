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
**Day 1, night 2 complete (2026-09-01 IST).** Product code built (not yet publicly deployed —
blocked on owner Vercel linking, see below). 30 businesses now contacted across two research
passes (15 night 1 + 15 night 2, both nights hit the 15/night cap). Zero real replies yet (too
soon to expect any — night 1's batch is ~13h old, night 2's is fresh). Two delivery bounces
found and logged (see below).

## What exists right now
- `product/` — static Hinglish landing page (`index.html`) explaining the offer. CTAs are
  `mailto:rohitgande0705@gmail.com`. `vercel.json` + `README.md` with deploy steps included.
  **Not yet deployed** — no live URL exists yet. Confirmed again tonight: no Vercel MCP tool
  exists in this environment and `WebFetch` to `*.vercel.app` is blocked by the sandbox egress
  proxy, so deployment status can't even be checked from here, only linked by the owner.
- `tools/lead-capture/` — the reusable per-client deliverable: a Vercel Function (`api/lead.js`)
  that appends a lead to a Google Sheet and sends an instant ack email, plus a sample embeddable
  form (`public/form.html`) and full setup `README.md`. Generic/reusable — copy per client.
  **Not deployed anywhere yet** — no real client, and needs a Google service account + Gmail App
  Password to actually run (see Needs owner decision).
- `research/targets.md` — research pass 1: 29 candidates (7 categories, 15 tier-2/tier-3
  cities), 25 with verified public emails, 4 phone/form-only. **Fully exhausted** — all 25
  emailed across night 1 (15) and night 2 (10). Two bounces noted inline: Neo Physio (hard
  bounce, dead address) and The Reallsters (soft bounce, inbox full — may work later).
- `research/targets-pass2.md` — research pass 2 (2026-09-01 night 2): 20 new candidates across
  14 fresh tier-2/tier-3 cities not used in pass 1, 18 verified emails + 2 phone/form-only. 5 of
  the 18 emailed tonight; **13 verified-email candidates remain unused** for the next batch.
- `outreach/sent-log.md` — full log of all 30 emails sent so far (15 night 1 + 15 night 2, both
  nights capped), with Gmail message IDs and bounce notes. None of these 30 are eligible for
  re-contact before **2026-09-15** (14-day rule) unless they reply first.
- `logs/2026-08-31-setup.md`, `logs/2026-09-01.md`, `logs/2026-09-01-night2.md` — full session
  history.

## Next session should do, in order
1. Read this file + `POLICY.md` + the latest file in `logs/`.
2. Check for replies across **all 30 contacted businesses** via Gmail MCP search
   (`subject:"Chhoti si baat"`, check every thread beyond the original send). Action any reply
   immediately (STOP → never contact again; interest → start manual onboarding conversation).
3. Check whether the owner has linked a Vercel account (see Needs owner decision #1). If yes,
   deploy `product/` now, put the live URL here and in outreach templates going forward. If not,
   don't re-attempt — nothing to do here without owner action, move on.
4. If no replies and no Vercel yet: send the next outreach batch from the 13 remaining
   verified-email candidates in `research/targets-pass2.md` (up to 15/night cap — 13 available,
   so send all 13 as a short batch, or run a quick top-up research pass for 2 more if there's
   budget to spare and you want to hit the full 15). Do NOT re-contact any of the 30 already
   emailed before 2026-09-15.
5. Once `research/targets-pass2.md`'s list is exhausted too, run research pass 3 — same
   compliance rules (verified public emails only, no guessing), fresh cities not used in pass 1
   or pass 2 (both files list which cities are already covered).
6. Consider designing a phone/WhatsApp outreach approach for the 6 phone/form-only businesses
   found so far (4 in pass 1, 2 in pass 2) — email tooling doesn't reach these; this hasn't been
   started yet and needs its own approach (no phone/SMS tool available in this environment as of
   now — check if one exists before assuming it's blocked).
7. Write tonight's `logs/YYYY-MM-DD.md` and update this file before finishing.

## Needs owner decision
1. **Link a Vercel account to github.com/rg-incognito/leadsetu** (free, ~5 min, needs the owner's
   own login — this cloud environment has no Vercel credentials/token/connector). Import
   `product/` (root dir `product/`) as a project first; import a copy of `tools/lead-capture/` per
   real client later. Blocks: any public-facing URL existing at all.
2. **Google Cloud service account for Sheets API** — free tier, but needs the owner to create a
   GCP project + service account (or grant a future session the access to do it). Exact steps are
   in `tools/lead-capture/README.md`. Blocks: `tools/lead-capture/` actually saving a lead anywhere.
3. **Gmail App Password decision** — for the address that sends *client* acknowledgement emails
   (separate from the Gmail MCP connector used for cold outreach, which is the owner's personal
   inbox). Decide: reuse the owner's personal Gmail for this too, or set up a dedicated free Gmail
   address before the first real client goes live. No cost either way, just needs a call + the
   resulting App Password as a Vercel env var.

## Open questions / things to revisit once we have data
- Is "lead capture + follow-up" actually the pain point, or should the offer pivot after the
  first few outreach replies (or silence) tell us something? Still no data — 15 emails sent
  2026-09-01, too early for replies.
- Pricing isn't set yet — v1 is being offered as a free pilot to get the first 2-3 real clients
  and testimonials before charging properly.
- Which category responds best? Tonight's batch deliberately spread across all 7 categories
  (clinics, salons/spas, coaching, retail, gyms, real estate, wedding planners) specifically to
  start collecting this signal — check reply patterns in a few days.
