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
**Day 3, night 4 complete (2026-09-03 IST).** Product code built (not yet publicly deployed —
blocked on owner Vercel linking, unchanged). 60 businesses now contacted across four nights
(15 + 15 + 15 + 15, all four nights hit the 15/night cap). Zero real replies yet — oldest batch
is now ~3 days old, approaching the ~5-7 day threshold at which the next session should actively
reassess the outreach approach rather than just note it again. 3 hard bounces + 1 soft bounce
found so far (~6.7% out of 60 sends — stable, not climbing).

**Note on a git scare tonight (resolved, no data lost):** the usual "fix detached HEAD" step at
session start reset local `master` against a *stale* local `origin/master` tracking ref (this
fresh container's cached ref was behind the real remote), which briefly looked like it discarded
9 commits of prior work. Recovered immediately via the recovery hash git provided, and a
`git fetch origin master` confirmed the real remote already had everything — nothing was
actually lost. **Future sessions:** run `git fetch origin master` before trusting the local
`origin/master` ref for any reset/checkout at session start. Full writeup in
`logs/2026-09-03.md`.

## What exists right now
- `product/` — static Hinglish landing page (`index.html`) explaining the offer. CTAs are
  `mailto:rohitgande0705@gmail.com`. `vercel.json` + `README.md` with deploy steps included.
  **Not yet deployed** — no live URL exists yet. Confirmed again tonight (night 4) via
  `ListConnectors` and `ToolSearch`: no Vercel connector/MCP tool exists in this environment,
  so deployment status can't be checked or completed from here, only by the owner linking his
  own account.
- `tools/lead-capture/` — the reusable per-client deliverable: a Vercel Function (`api/lead.js`)
  that appends a lead to a Google Sheet and sends an instant ack email, plus a sample embeddable
  form (`public/form.html`) and full setup `README.md`. Generic/reusable — copy per client.
  **Not deployed anywhere yet** — no real client, and needs a Google service account + Gmail App
  Password to actually run (see Needs owner decision).
- `research/targets.md` — research pass 1: 29 candidates, 25 verified emails. **Fully exhausted**
  — all 25 emailed across nights 1-2. 2 have since hard-bounced (Neo Physio, Spa Care &
  Wellness); 1 soft-bounced (The Reallsters — may still work).
- `research/targets-pass2.md` — research pass 2: 20 candidates, 18 verified emails. **Fully
  exhausted** — all 18 emailed across nights 2-3. 1 has since hard-bounced (Physiotherapy
  Vijayawada).
- `research/targets-pass3.md` — research pass 3: 18 candidates, 14 verified emails, 4
  phone/form-only. **Fully exhausted** — all 14 verified-email candidates emailed across nights
  3-4 (2 night 3, 12 night 4).
- `research/targets-pass4.md` — research pass 4 (2026-09-03 night 4): 9 candidates across 8
  fresh tier-2/tier-3 cities (Belagavi, Ajmer, Durgapur, Moradabad, Tirupur, Panipat, Bathinda,
  Karimnagar), 7 verified emails, 2 phone/form-only. 3 of the 7 emailed tonight (Tulsi Dental
  Clinic — Ajmer, Mission Fitness Multi Gym — Durgapur, Mittal Sarees — Panipat); **4
  verified-email candidates remain unused** for the next batch (Dr. Netra's Laser Skin Clinic —
  Belagavi, Ayana Wellness Spa & Salon — Tirupur, Fitness Unplugged — Durgapur, Creative
  Designer and Interior — Moradabad).
- `outreach/sent-log.md` — full log of all 60 emails sent so far across 4 nights, with Gmail
  message IDs and bounce notes. 14-day no-repeat windows: night 1's 15 clear 2026-09-14,
  night 2's 15 clear 2026-09-15, night 3's 15 clear 2026-09-16, night 4's 15 clear 2026-09-17
  (unless they reply first).
- `logs/2026-08-31-setup.md`, `logs/2026-09-01.md`, `logs/2026-09-01-night2.md`,
  `logs/2026-09-02.md`, `logs/2026-09-03.md` — full session history.

## Next session should do, in order
1. Read this file + `POLICY.md` + the latest file in `logs/`.
2. **Before any git fix**: run `git fetch origin master` first, don't trust a possibly-stale
   local tracking ref (see the git scare note above and `logs/2026-09-03.md` for detail).
3. Check for replies across **all 60 contacted businesses** via Gmail MCP search
   (`subject:"Chhoti si baat"`), checking every thread beyond the original send for anything
   that isn't a `mailer-daemon` bounce. Action any reply immediately (STOP → never contact
   again; interest → start manual onboarding conversation). Log any new bounces found.
   **If the oldest batch (night 1, 2026-08-31) is now past ~5-7 days old and there are still
   zero real replies, actively reassess the outreach approach (subject line, channel,
   targeting) — this is likely the session where that becomes due, don't just re-note it.**
4. Check whether the owner has linked a Vercel account (`ListConnectors` + `ToolSearch` for
   "vercel" — see Needs owner decision #1). If yes, deploy `product/` now, put the live URL
   here and in outreach templates going forward. If not, don't re-attempt — move on.
5. If no replies and no Vercel yet: send the next batch from the **4 remaining verified-email
   candidates in `research/targets-pass4.md`**, then run a research pass 5 top-up for the
   remaining ~11 slots (well under the 15/night cap otherwise) — fresh cities not used in
   passes 1-4 (pass 4's footer lists specific untried candidates: Nizamabad, Cuttack, Solapur,
   Hubli/Hubballi, Kolhapur — skip the Pranic Healing franchise found there specifically,
   Muzaffarpur, Gaya, Bikaner, Anantapur, Kadapa, Bilaspur (CG), Korba, Ichalkaranji, Latur).
   Do NOT re-contact any of the 60 already emailed before their 14-day windows above.
6. Check whether the owner has responded to any "Needs owner decision" item below (especially
   #4, phone/WhatsApp outreach go/no-go). If yes and it's a go, draft ready-to-send
   WhatsApp/call scripts for the phone-only businesses already identified across passes 1-4.
   If no answer yet, leave it flagged, don't chase further.
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
4. **Phone/WhatsApp cold outreach — go/no-go call needed (still open, list keeps growing).** We
   now have phone-only businesses across all 4 research passes with public phone numbers but no
   verifiable email: Radhika Motor Driving School (Jodhpur), Furrballs Pet Grooming (Chandigarh),
   Royal Reflections Unisex Salon (Meerut), Bridal Beauty Parlour (Meerut), BBN Unisex Salon
   (Ludhiana), Dream Interiors (Rohtak), Amrit Photography (Bathinda), Maalaxmi Driving School
   (Karimnagar) — plus 4 more from pass 1 with no number captured yet. No telephony/WhatsApp tool
   exists in this environment, so nothing can be automated either way — the decision is whether
   the owner wants to (a) personally call/WhatsApp a few himself using the captured numbers,
   (b) have a future session draft ready-to-send WhatsApp text for him to copy-paste and send from
   his own number, or (c) skip this channel entirely. Reasoning this wasn't just decided solo:
   cold WhatsApp/phone outreach is a different compliance surface than email (WhatsApp bans
   numbers on spam reports more aggressively; India's TRAI rules on unsolicited commercial
   calls/messages are murky for a solo operator), POLICY.md's outreach rules only cover email, and
   this risks the owner's personal phone/WhatsApp reputation — exactly the kind of call POLICY.md
   says to escalate. No cost either way.

## Open questions / things to revisit once we have data
- **Zero real replies after 60 businesses contacted, oldest batch ~3 days old.** Getting close to
  the ~5-7 day threshold where this stops being "still early" and becomes worth actively
  reassessing (subject line, channel, targeting) — next session should check this explicitly,
  not just re-note it (see "Next session should do" #3 above).
- Bounce rate: 3 hard + 1 soft out of 60 sends (~6.7%) — stable across the last 15 sends (zero
  new bounces night 4), not climbing. Not concerning currently.
- Pricing isn't set yet — v1 is being offered as a free pilot to get the first 2-3 real clients
  and testimonials before charging properly.
- Which category responds best? Still too early — zero replies overall so far. Outreach has
  deliberately spread across many categories (clinics, salons/spas, coaching, retail, gyms, real
  estate/interior, wedding/events/catering, photography, yoga, driving schools, pet grooming)
  specifically to start collecting this signal once replies start coming in.
