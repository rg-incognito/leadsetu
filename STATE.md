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
**Day 5, night 6 complete (2026-09-05 IST).** Product code built (not yet publicly deployed —
blocked on owner Vercel linking, unchanged). 89 businesses now contacted across six nights
(15 + 15 + 15 + 15 + 15 + 14). Zero real replies yet across all 89 threads checked. Night 1
(2026-08-31) is now 5 days old, crossing the "still early" threshold flagged by night 5 —
**reassessed tonight** (see decision below) rather than just re-noting it. 6 hard bounces +
1 soft bounce found so far (~9.3% of 75 checked pre-tonight — stable-ish, not alarming), plus
2 of those 6 hard bounces were caught late tonight after being missed by earlier sessions'
checks (see git note below — this is the second such miss, a process gap worth fixing for
good).

**Reassessment decision (night 6):** 0/75 replies in 5 days isn't strong evidence the approach
has failed — ~9.3% of sends are confirmed-invalid addresses, and small-business Google-Maps-
listing inboxes are often checked irregularly (sometimes weekly), so 5 days is still an early
sample for Indian SMB cold email. Rather than a full pivot, made one concrete change: **started
rotating 2 subject-line variants** tonight instead of reusing the identical "Chhoti si baat —
..." subject on every send (see `outreach/sent-log.md` night 6 section for exact wording and
reasoning). Email body content, compliance structure, and targeting approach are unchanged.
**Checkpoint set for next sessions:** if still zero replies by night ~10-12 (roughly
2026-09-10 to 2026-09-12), that becomes a real signal, not just an early sample — escalate to
"Needs owner decision" below with a recommendation (try phone/WhatsApp channel, or rework the
offer/targeting) rather than continuing to grind out more research passes unchanged.

**Git note (from night 4, still good practice):** always run `git fetch origin master` before
trusting a local `origin/master` tracking ref for any reset/checkout — a stale cached ref in a
fresh container once (harmlessly) looked like 9 commits were about to be discarded. Followed
this again tonight (night 6): fetched first, confirmed HEAD already matched origin/master
exactly, so the detached-HEAD fix (`git checkout -B master origin/master`) was safe. Full
original writeup in `logs/2026-09-03.md`.

**Bounce-check process note (night 6):** this is the *second* time a bounce was caught late
by a subsequent session rather than the night it happened (Tulsi Dental missed by night 4,
caught night 5; Abhilasha Classes missed by BOTH night 4 and night 5, caught only night 6).
The reply/bounce check needs to read every thread's full content methodically, not skim for
the word "bounce." Tonight's check was done as a full audit (read every non-SENT message
across all 75 prior threads, cross-referenced against sent-log.md's existing notes) rather
than a diff against memory — future sessions should do the same.

## What exists right now
- `product/` — static Hinglish landing page (`index.html`) explaining the offer. CTAs are
  `mailto:rohitgande0705@gmail.com`. `vercel.json` + `README.md` with deploy steps included.
  **Not yet deployed** — no live URL exists yet. Confirmed again tonight (night 6) via
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
  3-4 (2 night 3, 12 night 4). 1 has since hard-bounced (Abhilasha Classes — bounce was missed
  by nights 4 and 5, caught night 6).
- `research/targets-pass4.md` — research pass 4: 9 candidates across 8 tier-2/tier-3 cities
  (Belagavi, Ajmer, Durgapur, Moradabad, Tirupur, Panipat, Bathinda, Karimnagar), 7 verified
  emails, 2 phone/form-only. **Fully exhausted** — all 7 verified-email candidates emailed
  across nights 4-5 (3 night 4, 4 night 5). 1 has since hard-bounced (Tulsi Dental Clinic).
- `research/targets-pass5.md` — research pass 5 (2026-09-04 night 5, delegated to a subagent):
  11 candidates across 6 fresh cities (Muzaffarpur, Bikaner, Anantapur, Gorakhpur, Nellore,
  Solapur), all 11 verified emails, plus 6 phone/form-only leads. **Fully exhausted** — all 11
  emailed night 5. 1 has since hard-bounced (Dr. Netra's Laser Skin Clinic — caught night 6).
- `research/targets-pass6.md` — research pass 6 (2026-09-05 night 6, delegated to a subagent):
  14 candidates across 12 fresh cities (Kadapa, Bhavnagar, Kollam, Bilaspur CG, Erode,
  Rajahmundry, Sikar, Kurnool, Latur, Kolhapur, Gaya, Muzaffarnagar), all 14 verified emails,
  plus 13 phone/form-only leads. **Fully exhausted** — all 14 emailed tonight.
- `outreach/sent-log.md` — full log of all 89 emails sent so far across 6 nights, with Gmail
  message IDs and bounce notes. 14-day no-repeat windows: night 1's 15 clear 2026-09-14,
  night 2's 15 clear 2026-09-15, night 3's 15 clear 2026-09-16, night 4's 15 clear 2026-09-17,
  night 5's 15 clear 2026-09-18, night 6's 14 clear 2026-09-19 (unless they reply first).
- `logs/2026-08-31-setup.md`, `logs/2026-09-01.md`, `logs/2026-09-01-night2.md`,
  `logs/2026-09-02.md`, `logs/2026-09-03.md`, `logs/2026-09-04.md`, `logs/2026-09-05.md` — full
  session history.

## Next session should do, in order
1. Read this file + `POLICY.md` + the latest file in `logs/`.
2. **Before any git fix**: run `git fetch origin master` first, don't trust a possibly-stale
   local tracking ref (see the git note above and `logs/2026-09-03.md` for detail).
3. Check for replies across **all 89 contacted businesses** via Gmail MCP search
   (`subject:"Chhoti si baat" OR subject:"kitni" OR subject:"48-ghante free pilot" in:anywhere`
   — night 6 introduced 2 new subject templates, so the old exact-phrase search alone will miss
   them; search broadly and cross-check against `outreach/sent-log.md`'s full business list).
   Read every thread's full content methodically (not skimmed) — this is the second time a
   bounce was caught late, don't make it a third. Action any reply immediately (STOP → never
   contact again; interest → start manual onboarding conversation). Log any new bounces found.
   Also check whether the Mittal Sarees delivery-delay notice (flagged night 6) has resolved
   or hard-bounced since.
4. **Reassessment checkpoint**: this is night 6, roughly 1 day after night 1 crossed 5 days
   old. Not yet at the ~10-12 night checkpoint set tonight, but if replies are still at zero by
   night ~10-12 (around 2026-09-10 to 2026-09-12), escalate to "Needs owner decision" below with
   a recommendation rather than continuing unchanged (see reassessment decision above for full
   reasoning).
5. Check whether the owner has linked a Vercel account (`ListConnectors` + `ToolSearch` for
   "vercel" — see Needs owner decision #1). If yes, deploy `product/` now, put the live URL
   here and in outreach templates going forward. If not, don't re-attempt — move on.
6. If no replies and no Vercel yet: run a **research pass 7** for tonight's up-to-15 new
   candidates — pass 6 is now fully exhausted. Fresh cities not yet tried (see pass 6's footer
   for full detail): Bijapur/Vijayapura, Nanded, Akola, Bellary/Ballari, Tirunelveli,
   Firozabad, Saharanpur, Faizabad/Ayodhya, Bhilai (check for overlap with Durg, used pass 5),
   Junagadh. Also worth one more targeted attempt at dental/skin clinics and pet
   grooming/stores (weak categories across passes 5-6) using individual doctor/owner names
   instead of clinic-brand names, and one more attempt at Hubli/Hubballi using boutique/retail
   or wedding-planner searches (pass 6 tried gym/driving-school/pet/interior/photography/dental
   there without success). Do NOT re-contact any of the 89 already emailed before their 14-day
   windows (see `outreach/sent-log.md`).
7. Check whether the owner has responded to any "Needs owner decision" item below (especially
   #4, phone/WhatsApp outreach go/no-go — now has 14 phone-only candidates from passes 1-5 plus
   13 more from pass 6, 27 total). If yes and it's a go, draft ready-to-send WhatsApp/call
   scripts. If no answer yet, leave it flagged, don't chase further.
8. Write tonight's `logs/YYYY-MM-DD.md` and update this file before finishing.

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
   now have phone-only businesses across all 6 research passes with public phone numbers but no
   verifiable email: Radhika Motor Driving School (Jodhpur), Furrballs Pet Grooming (Chandigarh),
   Royal Reflections Unisex Salon (Meerut), Bridal Beauty Parlour (Meerut), BBN Unisex Salon
   (Ludhiana), Dream Interiors (Rohtak), Amrit Photography (Bathinda), Maalaxmi Driving School
   (Karimnagar), RK Studio (Bilaspur CG), Elegant Designs (Korba), Gaya Driving School (Gaya),
   Dr. Gaur's Pet Planet (Bikaner), Ameyaa Studio (Gorakhpur), Medhini's Boutique (Nellore),
   plus 13 more from pass 6 (Miles of Smiles Dental — Ichalkaranji, Rudransh Buildcon — Cuttack,
   DevAtithi Boutique — Sikar, Vinayak Multi Store — Sikar, Nature's Beauty Parlour — Korba,
   Thakkar Dental Clinic — Bhavnagar, Muzaffarnagar's Property Bye & Sell, Laxmi Photo Studio —
   Sikar, Benchmark Classes — Cuttack, Galaxy Gym — Korba, Kamlesh Fitness Club — Korba, Sri
   Skin & Hair Clinic — Nizamabad, Sai Smile Dental Care — Cuttack) — 27 total now, plus 4 more
   from pass 1 with no number captured. No telephony/WhatsApp tool exists in this environment,
   so nothing can be automated either way — the decision is whether the owner wants to
   (a) personally call/WhatsApp a few himself using the captured numbers, (b) have a future
   session draft ready-to-send WhatsApp text for him to copy-paste and send from his own number,
   or (c) skip this channel entirely. Reasoning this wasn't just decided solo: cold WhatsApp/
   phone outreach is a different compliance surface than email (WhatsApp bans numbers on spam
   reports more aggressively; India's TRAI rules on unsolicited commercial calls/messages are
   murky for a solo operator), POLICY.md's outreach rules only cover email, and this risks the
   owner's personal phone/WhatsApp reputation — exactly the kind of call POLICY.md says to
   escalate. No cost either way.

## Open questions / things to revisit once we have data
- **Zero real replies after 89 businesses contacted, oldest batch 5 days old.** Reassessed
  night 6 (see decision above) — judged still too early to be a real failure signal given the
  ~9.3% bounce rate and irregular-inbox-checking pattern typical of Google-Maps-listing
  addresses, but started varying subject lines as a low-risk experiment. **Checkpoint: if
  still zero by night ~10-12 (2026-09-10 to 2026-09-12), escalate to Needs owner decision
  rather than continuing unchanged.**
- Bounce rate: 6 hard + 1 soft out of 75 checked so far (~9.3%, corrected count including 2
  bounces missed by earlier sessions) — a bit higher than earlier nights' 6.7% estimate but
  still not alarming for cold email to public listing addresses. Watch whether it keeps
  climbing as more of the 89 get checked next session.
- Pricing isn't set yet — v1 is being offered as a free pilot to get the first 2-3 real clients
  and testimonials before charging properly.
- Which category responds best? Still too early — zero replies overall so far. Outreach has
  deliberately spread across many categories (clinics, salons/spas, coaching, retail, gyms, real
  estate/interior, wedding/events/catering, photography, yoga, driving schools, pet grooming)
  specifically to start collecting this signal once replies start coming in.
- Subject-line experiment (started night 6): once replies start arriving, worth checking
  whether either of the 2 new variants ("kitni ... enquiries chhoot rahi hain?" vs "48-ghante
  free pilot ... follow-up automate") outperforms the other, or the original "Chhoti si baat"
  phrasing used in nights 1-5.
