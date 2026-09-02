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
**Day 2, night 3 complete (2026-09-02 IST).** Product code built (not yet publicly deployed —
blocked on owner Vercel linking, unchanged). 45 businesses now contacted across three nights
(15 + 15 + 15, all three nights hit the 15/night cap). Zero real replies yet (still plausible —
oldest batch is ~2 days old). 3 hard bounces + 1 soft bounce found and logged so far (~7% hard
bounce rate out of 45 sends — not alarming yet, worth watching).

## What exists right now
- `product/` — static Hinglish landing page (`index.html`) explaining the offer. CTAs are
  `mailto:rohitgande0705@gmail.com`. `vercel.json` + `README.md` with deploy steps included.
  **Not yet deployed** — no live URL exists yet. Confirmed again tonight (night 3): no Vercel
  MCP tool exists in this environment, so deployment status can't be checked or completed from
  here, only by the owner linking his own account.
- `tools/lead-capture/` — the reusable per-client deliverable: a Vercel Function (`api/lead.js`)
  that appends a lead to a Google Sheet and sends an instant ack email, plus a sample embeddable
  form (`public/form.html`) and full setup `README.md`. Generic/reusable — copy per client.
  **Not deployed anywhere yet** — no real client, and needs a Google service account + Gmail App
  Password to actually run (see Needs owner decision).
- `research/targets.md` — research pass 1: 29 candidates (7 categories, 15 tier-2/tier-3
  cities), 25 with verified public emails, 4 phone/form-only. **Fully exhausted for email** —
  all 25 emailed across nights 1-2. 2 of those 25 have since hard-bounced (Neo Physio, Spa Care
  & Wellness — both marked dead inline); 1 soft-bounced (The Reallsters — may still work).
- `research/targets-pass2.md` — research pass 2: 20 candidates across 14 fresh cities, 18
  verified emails, 2 phone/form-only. **Fully exhausted for email** — all 18 emailed across
  nights 2-3. 1 of those 18 has since hard-bounced (Physiotherapy Vijayawada — marked dead
  inline).
- `research/targets-pass3.md` — research pass 3 (2026-09-02 night 3): 18 candidates across 14
  fresh tier-2/tier-3 cities (Agra, Ludhiana, Jalandhar, Aurangabad, Bareilly, Siliguri,
  Gwalior, Amravati, Warangal, Salem, Madurai, Hisar, Meerut, Rohtak), 14 verified emails, 4
  phone/form-only. 2 of the 14 emailed tonight (32 Gems Dental Clinic, Mohan's Catering
  Services); **12 verified-email candidates remain unused** for the next batch. Notably, the
  research agent correctly excluded a cluster of Kota "spa" listings that read as an
  adult-services operation rather than a legitimate wellness business — worth keeping that
  same brand-safety judgment in future passes.
- `outreach/sent-log.md` — full log of all 45 emails sent so far across 3 nights, with Gmail
  message IDs and bounce notes. 14-day no-repeat windows: night 1's 15 clear 2026-09-14,
  night 2's 15 clear 2026-09-15, night 3's 15 clear 2026-09-16 (unless they reply first).
- `logs/2026-08-31-setup.md`, `logs/2026-09-01.md`, `logs/2026-09-01-night2.md`,
  `logs/2026-09-02.md` — full session history.

## Next session should do, in order
1. Read this file + `POLICY.md` + the latest file in `logs/`.
2. Check for replies across **all 45 contacted businesses** via Gmail MCP search
   (`subject:"Chhoti si baat"`), checking every thread beyond the original send for anything
   that isn't a `mailer-daemon` bounce. Action any reply immediately (STOP → never contact
   again; interest → start manual onboarding conversation). Log any new bounces found.
3. Check whether the owner has linked a Vercel account (see Needs owner decision #1). If yes,
   deploy `product/` now, put the live URL here and in outreach templates going forward. If not,
   don't re-attempt — nothing to do here without owner action, move on.
4. If no replies and no Vercel yet: send the next outreach batch from the 12 remaining
   verified-email candidates in `research/targets-pass3.md` (well under the 15/night cap — send
   all 12, then optionally run a quick top-up research pass for 3 more, same pattern as nights
   2 and 3). Do NOT re-contact any of the 45 already emailed before their 14-day windows above.
5. Once `research/targets-pass3.md`'s list is exhausted too, run research pass 4 — same
   compliance rules (verified public emails only, double-check before accepting, no guessing),
   fresh cities not used in passes 1-3 (all three files list which cities are already covered;
   pass 3's footer lists specific untried candidates worth another look with different search
   angles: Jamshedpur, Kota (minus the excluded spa cluster), Rourkela, Cuttack, Vellore,
   Panipat, Shimla, Nellore).
6. Check whether the owner has responded to "Needs owner decision" #4 below (phone/WhatsApp
   outreach go/no-go). If yes and it's a go, draft ready-to-send WhatsApp/call scripts for the
   phone-only businesses already identified (numbers captured for 6 of them — see
   `logs/2026-09-02.md`). If no answer yet, leave it flagged, don't chase further.
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
4. **Phone/WhatsApp cold outreach — go/no-go call needed (new tonight).** We now have several
   phone-only businesses across all 3 research passes with public phone numbers but no verifiable
   email: Radhika Motor Driving School (Jodhpur), Furrballs Pet Grooming (Chandigarh), Royal
   Reflections Unisex Salon (Meerut), Bridal Beauty Parlour (Meerut), BBN Unisex Salon (Ludhiana),
   Dream Interiors (Rohtak) — plus 4 more from pass 1 with no number captured yet. No
   telephony/WhatsApp tool exists in this environment, so nothing can be automated either way —
   the decision is whether the owner wants to (a) personally call/WhatsApp a few himself using the
   captured numbers, (b) have a future session draft ready-to-send WhatsApp text for him to
   copy-paste and send from his own number, or (c) skip this channel entirely. Reasoning this
   wasn't just decided solo: cold WhatsApp/phone outreach is a different compliance surface than
   email (WhatsApp bans numbers on spam reports more aggressively; India's TRAI rules on
   unsolicited commercial calls/messages are murky for a solo operator), POLICY.md's outreach
   rules only cover email, and this risks the owner's personal phone/WhatsApp reputation — exactly
   the kind of call POLICY.md says to escalate. No cost either way.

## Open questions / things to revisit once we have data
- Still zero real replies after 45 businesses contacted and up to ~2 days wait on the earliest
  batch. Not concerning yet given the channel (cold Hinglish B2B email to small local business
  owners who may not check that inbox often) — worth reassessing the whole approach (subject
  line, channel, targeting) if there are still zero replies once the batch crosses ~5-7 days old,
  not before.
- Bounce rate so far: 3 hard bounces + 1 soft bounce out of 45 sends (~7%). Not alarming alone,
  but a climbing rate could start hurting Gmail sender reputation over time even under the
  15/night cap — worth an extra reconfirmation step before *sending* (not just before logging) in
  future research passes if it gets worse.
- Pricing isn't set yet — v1 is being offered as a free pilot to get the first 2-3 real clients
  and testimonials before charging properly.
- Which category responds best? Outreach has deliberately spread across all 7+ categories
  (clinics, salons/spas, coaching, retail, gyms, real estate/interior, wedding/events/catering,
  photography, yoga, driving schools, pet grooming) specifically to start collecting this signal
  — still too early, check again once real replies start coming in.
