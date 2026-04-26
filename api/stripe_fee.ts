import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

/**
 * ClassAction AI: Micro-Transaction Billing
 * 
 * Pain Point: We need high volume conversion. 
 * Solution: A highly frictionless $15 flat fee. If we submit 10,000 claims a month, 
 * that's $150k MRR with near-zero marginal cost.
 */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const CLASSACTION_FEE_CENTS = 1500; // $15.00

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const { userEmail, settlementAmount } = req.body;

    console.log(`[ClassAction-Billing] 💳 Initiating $15 Submission Fee for ${userEmail}`);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'apple_pay', 'google_pay'], // Frictionless payments
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Autonomous Claim Filing`,
              description: `Automated legal submission for $${settlementAmount} in projected settlement funds.`,
            },
            unit_amount: CLASSACTION_FEE_CENTS,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/scanner?canceled=true`,
      customer_email: userEmail,
      metadata: {
        service: 'CLASSACTION_SUBMISSION',
        projectedPayout: settlementAmount
      }
    });

    console.log(`[ClassAction-Billing] ✅ Stripe Session Created: ${session.id}`);

    return res.status(200).json({ url: session.url });

  } catch (error) {
    console.error("[ClassAction-Billing] Stripe Checkout Failure:", error);
    return res.status(500).json({ error: 'Failed to initialize micro-transaction.' });
  }
}
