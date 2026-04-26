# ClassAction AI — Product Requirements Document (PRD)

## User Personas
See [[01-PAIN-POINTS]] for detailed persona profiles.

## Feature Matrix

### ✅ Built (Phase 1 — MVP)
| Feature | File | Description |
|---------|------|-------------|
| Landing Page | `frontend/LandingPage.tsx` | High-conversion "Found Money" page with SEO/GEO schema |
| Claim Scanner UI | `frontend/ClaimScanner.tsx` | Simulated receipt scanning with live match animation |
| Stripe Checkout | `api/stripe_fee.ts` | $15 flat fee with Apple Pay / Google Pay |
| Claim Submitter | `api/submit_claim.ts` | RAG engine that extracts SKUs and auto-files claims |

### 🔄 In Progress (Phase 2)
| Feature | Priority | Description |
|---------|----------|-------------|
| Gmail OAuth Integration | P0 | Connect Gmail to automatically scan order confirmations |
| Settlement Database | P0 | Vectorized DB of all active US class action settlements |
| Real claim form filling | P1 | PDF form filling with pdf-lib for actual court submissions |

### ⬜ Planned (Phase 3)
| Feature | Priority | Description |
|---------|----------|-------------|
| Continuous Monitoring | P1 | Background scanner that alerts users to new settlements |
| Multi-claim batch filing | P2 | File all eligible claims in one click |
| Premium subscription tier | P2 | $49/year for automatic monitoring + priority filing |
| Browser extension | P3 | Chrome extension that flags settlements while shopping |

## User Stories

### MVP Stories (Phase 1)
- **As a consumer**, I want to see if I'm owed money from any lawsuits, so that I can recover funds I didn't know about.
- **As a consumer**, I want to pay a small flat fee to have my claims filed automatically, so I don't have to navigate complex forms.

### Phase 2 Stories
- **As a Gmail user**, I want to connect my inbox so the AI can scan my purchase history automatically.
- **As a consumer**, I want to see the exact lawsuit name, settlement amount, and deadline before I pay.

### Phase 3 Stories
- **As a subscriber**, I want to be notified when new settlements match my purchase history.
- **As a power user**, I want to file claims for my entire family from one dashboard.

## Acceptance Criteria
1. Scanner must display "Found Money" amount BEFORE the Stripe paywall
2. Stripe payment MUST succeed before any claim submission begins
3. All claim submissions must include a reference ID for tracking
4. No PII is stored in client-side state — all sensitive data server-side only
