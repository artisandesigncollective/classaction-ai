# ClassAction AI — Standard Operating Procedures (SOP)

## SOP-1: Local Development Setup
1. Clone the repository: `git clone https://github.com/artisandesigncollective/classaction-ai.git`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in API keys
4. Start dev server: `npm run dev`
5. Access at `http://localhost:3000`

## SOP-2: Stripe Configuration
1. Create a Stripe account at https://dashboard.stripe.com
2. Get the Secret Key from Dashboard → Developers → API Keys
3. Set `STRIPE_SECRET_KEY` in `.env.local`
4. Set `NEXT_PUBLIC_BASE_URL` to your deployment URL
5. Configure webhook endpoint at `/api/webhooks/stripe` (Phase 2)
6. Test with Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

## SOP-3: Deployment to Vercel
1. Connect GitHub repo to Vercel
2. Set all environment variables in Vercel dashboard
3. Deploy: `vercel --prod`
4. Verify Stripe success/cancel URLs point to production domain
5. Test a real $15 payment in live mode

## SOP-4: Adding a New Settlement to the Database
1. Research the settlement on TopClassActions.com or ClassAction.org
2. Extract: Company name, product affected, settlement amount, deadline, claim form URL
3. Add entry to the settlements table in PostgreSQL
4. Vectorize the claim form for the RAG engine
5. Test matching against sample receipts

## SOP-5: Handling a Failed Claim Submission
1. Check server logs for the `claimReferenceId`
2. Verify Stripe payment was captured (not just authorized)
3. Check if the Settlement Administrator's form endpoint is still active
4. If deadline has passed, issue a refund via Stripe dashboard
5. Email user with status update

## SOP-6: Code Change Protocol
1. Make code changes
2. Update `vault/06-IMPLEMENTATION-LOG.md` with what changed
3. Update `vault/10-CHANGELOG.md` with timestamp
4. If feature was added/removed, update `vault/03-PRD.md` feature matrix
5. Commit with descriptive message: `feat: [description]` or `fix: [description]`
6. Push to GitHub
