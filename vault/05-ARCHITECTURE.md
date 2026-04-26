# ClassAction AI — Technical Architecture

## Tech Stack
| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React + TypeScript | Landing page & Scanner UI |
| Styling | Tailwind CSS (utility classes in components) | Responsive design |
| API | Next.js API Routes | Serverless backend |
| Payments | Stripe Checkout | $15 flat fee collection |
| LLM | Claude 3.5 / GPT-4o | Receipt OCR + claim form filling |
| Database | PostgreSQL (planned) | Settlement DB + user claims |
| Email | Gmail OAuth API (planned) | Receipt scanning |
| PDF | pdf-lib (planned) | Court form auto-fill |
| Hosting | Vercel (planned) | Serverless deployment |

## File Structure
```
classaction-ai/
├── frontend/
│   ├── LandingPage.tsx      # SEO/GEO optimized landing (React)
│   └── ClaimScanner.tsx     # Receipt scan UI with match animation
├── api/
│   ├── stripe_fee.ts        # Stripe Checkout ($15, Apple/Google Pay)
│   └── submit_claim.ts      # RAG engine — payment-gated claim filing
├── vault/                   # This Obsidian vault
├── .sovereign_memory.md     # Quick architectural log
└── .git/                    # Version control
```

## Data Flow
```
User lands on page
    ↓
Clicks "Scan for Money"
    ↓
[ClaimScanner.tsx] Simulates receipt scanning (Phase 1)
[Phase 2: Gmail OAuth → real receipt extraction]
    ↓
Displays "Found: $450 from 2 settlements"
    ↓
User clicks "Auto-File Claims ($15)"
    ↓
[stripe_fee.ts] Creates Stripe Checkout session
    ↓
Stripe confirms payment → returns session_id
    ↓
[submit_claim.ts] Validates stripeSessionId
    ↓
LLM extracts SKUs/dates from receipts
    ↓
Maps to settlement database → fills claim forms
    ↓
Submits to Settlement Administrator
    ↓
Returns claimReferenceId to user
```

## Stripe Integration Details
- **Product:** One-time $15 payment
- **Payment methods:** `card`, `apple_pay`, `google_pay`
- **Success URL:** `/success?session_id={CHECKOUT_SESSION_ID}`
- **Metadata:** `service: CLASSACTION_SUBMISSION`, `projectedPayout: [amount]`
- **Security:** Backend validates `stripeSessionId` before ANY LLM invocation

## Environment Variables Required
```env
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_BASE_URL=https://classaction-ai.com
OPENAI_API_KEY=sk-...          # For receipt OCR
ANTHROPIC_API_KEY=sk-ant-...   # For claim form generation
DATABASE_URL=postgresql://...   # Settlement database (Phase 2)
GMAIL_CLIENT_ID=...            # Gmail OAuth (Phase 2)
GMAIL_CLIENT_SECRET=...        # Gmail OAuth (Phase 2)
```

## Third-Party Dependencies
| Service | Purpose | Status |
|---------|---------|--------|
| Stripe | Payment processing | ✅ Integrated |
| Gmail API | Receipt scanning | ⬜ Phase 2 |
| TopClassActions API | Settlement data | ⬜ Phase 2 |
| Lob API | Physical mail for claim forms | ⬜ Phase 3 |
| DocuSign API | E-signature for claim forms | ⬜ Phase 3 |
