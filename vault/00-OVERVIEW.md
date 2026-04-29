# ClassAction AI — Project Overview

> **One-Line Pitch:** AI that hunts for money owed to users from corporate class action settlements and auto-files the claims.

## Quick Reference
| Field | Value |
|-------|-------|
| **Status** | ✅ MVP Built (Frontend + Stripe + RAG Engine) |
| **Repo** | `e:\hermes\github_fleet\classaction-ai` |
| **GitHub** | `artisandesigncollective/classaction-ai` |
| **Price** | $15 flat fee per claim submission |
| **Target MRR** | $30,000 (2,000 users/mo) |
| **Last Updated** | 2026-04-26 |
| **Phase** | Phase 5 — "Found Money" Arsenal |

## What This Project Does
ClassAction AI scans a user's email receipts and purchase history against a national database of active class action lawsuits. When it finds a match (e.g., the user bought an iPhone with a defective battery that's part of a $500M Apple settlement), it auto-fills the complex claim form and submits it on the user's behalf.

## Why It Exists
Billions of dollars in corporate settlements go unclaimed every year because:
1. People don't know the lawsuits exist
2. Claim forms are intentionally confusing
3. Deadlines pass without notification
4. Settlement administrators have no incentive to make claiming easy

## Key Files
- `frontend/LandingPage.tsx` — High-conversion "Found Money" landing page
- `frontend/ClaimScanner.tsx` — Receipt scanning UI with live settlement matching
- `api/stripe_fee.ts` — $15 Stripe Checkout with Apple/Google Pay
- `api/submit_claim.ts` — RAG engine that extracts SKUs and auto-files claims
- `.sovereign_memory.md` — Architectural log

---
?? **Sovereign Empire Hub:** [Master Index](file:///e:/hermes/github_fleet/EMPIRE_VAULT_INDEX.md) | [Command Center](file:///e:/hermes/github_fleet/paperclip-website/frontend/SovereignDashboard.tsx)

### Phase 9: Sovereign Organism (Active)
- **Sovereign Voice**: AI-to-Human phone negotiation active.
- **Settlement Marketplace**: Instant cash buyout infrastructure live.
- **Premium Design System**: Glassmorphic UI polish applied.
- **CEO Audit Loop**: Hourly forensic polling active.

### Phase 10: Sovereign Shield & Canon (Active)
- **PII Scrubber**: Zero-knowledge data privacy active.
- **Discovery Canon**: GEO/SEO/AGO optimization active.
- **Sovereign Proxy**: Virtual phone/address shielding.
- **Attorney Seal**: Human legal verification API.
