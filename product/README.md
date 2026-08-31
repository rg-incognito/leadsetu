# LeadSetu marketing site

Static landing page (`index.html`) explaining the offer. No build step, no
framework — plain HTML/CSS. CTAs are `mailto:` links for now (no lead-capture
form on this page yet; that's a deliberate v1 simplification — we're
collecting interest via email/WhatsApp reply while there are zero live
clients to build a self-serve signup flow for).

## Deploy (one-time, owner action — needs a Vercel account)

1. https://vercel.com → New Project → Import this GitHub repo.
2. Set **Root Directory** to `product/`.
3. Framework preset: "Other" (no build command needed, it's static).
4. Deploy. Every push to `master` under `product/` will auto-redeploy after this.

This step needs the owner's Vercel login — the agent has no Vercel
credentials in this environment. See `STATE.md` → "Needs owner decision".
