// Phase 2.1: design only (no payment processing wired)
// Phase 2.2: Stripe Checkout integration (pending CFM approval + env vars)
// Phase 2.3: KYC integration via Sumsub or Persona (separate prompt)
// Phase 2.4: volume pricing for 10+ licenses (pending CFM clearance of bonus structure)

// STRIPE INTEGRATION: PENDING
// After CFM approves this design, wire the "Proceed to checkout" button to Stripe Checkout.
// Required env vars (not yet set):
//   - STRIPE_SECRET_KEY
//   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
//   - STRIPE_PRICE_ID_NODE_LICENSE
// Implementation: see Phase 2.1 Stripe follow-up prompt

import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StatusBar } from "@/components/site/StatusBar";

const LICENSE_URL = "https://aultblockchain.com/license";

export const Route = createFileRoute("/license")({
  component: LicensePage,
  head: () => ({
    meta: [
      { title: "Buy a Licensed Mining Node License — Ault Blockchain" },
      {
        name: "description",
        content:
          "$1,500 USD. Perpetual, non-exclusive software license to run a Licensed Mining Node on the Ault Blockchain. 977,652 of 1,000,000 active today.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: LICENSE_URL },
      {
        property: "og:title",
        content: "Buy a Licensed Mining Node License — Ault Blockchain",
      },
      {
        property: "og:description",
        content:
          "$1,500 USD. Perpetual software license. Off-chain verifiable work for the Ault Blockchain. Mainnet live since March 3, 2026.",
      },
      { property: "og:image", content: "/og-image-license.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image-license.png" },
    ],
    links: [{ rel: "canonical", href: LICENSE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Ault Licensed Mining Node License",
          description:
            "Perpetual, non-exclusive software license to run a Licensed Mining Node on the Ault Blockchain.",
          brand: { "@type": "Brand", name: "Ault Blockchain" },
          offers: {
            "@type": "Offer",
            price: "1500",
            priceCurrency: "USD",
            availability: "https://schema.org/PreOrder",
            url: LICENSE_URL,
            seller: { "@type": "Organization", name: "Ault Capital Group" },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://aultblockchain.com" },
            { "@type": "ListItem", position: 2, name: "Licensed Mining Nodes", item: "https://aultblockchain.com/nodes" },
            { "@type": "ListItem", position: 3, name: "Buy License", item: LICENSE_URL },
          ],
        }),
      },
    ],
  }),
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary font-medium">
      <span className="h-px w-6 bg-primary/60" />
      {children}
    </div>
  );
}

const WHAT_YOU_GET = [
  {
    t: "Run Your Node",
    d: "Perpetual right to operate Licensed Mining Node software. Non-transferable for 2 years.",
  },
  {
    t: "Off-chain verifiable work",
    d: "At genesis: VRF-based randomness generation, gated by a lightweight Micro-PoW anti-spam check. Hardware-power-neutral.",
  },
  {
    t: "Earn AULT emissions",
    d: "Distributed pro-rata by verifiable work credits. Variable, not guaranteed. Visible in your OnlyBulls AULT wallet.",
  },
  {
    t: "Join DAO governance",
    d: "One license, one vote, after KYC and Constitution acceptance.",
  },
];

const INCLUDED = [
  "Perpetual software license",
  "Off-chain verifiable work participation",
  "AULT emissions eligibility (pro-rata by work credits)",
  "DAO governance vote (after KYC + Constitution acceptance)",
];

const NEXT_STEPS = [
  "Order confirmation email with receipt and license details",
  "KYC identity verification (link in the confirmation email)",
  "License key + setup instructions delivered after KYC approval",
  "Operator guide at docs.aultblockchain.com",
];

function LicensePage() {
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const [showPendingModal, setShowPendingModal] = useState(false);
  const allChecked = c1 && c2 && c3;

  async function onCheckout() {
    // STRIPE: pending — replace with /api/checkout/create-session call
    setShowPendingModal(true);
  }

  useEffect(() => {
    if (!showPendingModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPendingModal(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [showPendingModal]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StatusBar />
      <Nav />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <Eyebrow>Buy a Licensed Mining Node License</Eyebrow>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05]">
              $1,500. Perpetual software license.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
              A perpetual, non-exclusive software license to run a Licensed
              Mining Node on the Ault Blockchain. Performs off-chain verifiable
              work — VRF-based randomness generation, gated by a lightweight
              Micro-PoW anti-spam check. Licensed Mining Nodes are not
              validators and do not participate in consensus.
            </p>
            <p className="mt-6 text-sm text-text-tertiary">
              977,652 of 1,000,000 licenses active today.{" "}
              <a
                href="https://ault.explorer.xangle.io/mining"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Verify on the Mining Dashboard →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <Eyebrow>What you get</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-balance">
              A perpetual software license. Real work. Real emissions.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 grid-cols-1 min-[481px]:grid-cols-2 min-[901px]:grid-cols-4">
            {WHAT_YOU_GET.map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-border bg-surface-2 p-6 md:p-7"
              >
                <h3 className="text-lg font-semibold tracking-tight">{c.t}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + checkout */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-[720px]">
            <div className="rounded-2xl border border-border bg-surface-2 p-8 md:p-12">
              <h2 className="text-xl font-semibold tracking-tight">
                Licensed Mining Node License
              </h2>
              <div className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight">
                $1,500 USD
              </div>
              <p className="mt-3 text-sm text-text-tertiary">
                Fixed list price at issuance. Non-transferable for 2 years.
              </p>

              <div className="my-8 h-px bg-border" />

              <ul className="space-y-3">
                {INCLUDED.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-text-secondary">{it}</span>
                  </li>
                ))}
              </ul>

              <div className="my-8 h-px bg-border" />

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={c1}
                    onChange={(e) => setC1(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                  />
                  <span className="text-sm text-text-secondary leading-relaxed">
                    I confirm I am 18+ and legally eligible to purchase
                    software products in my jurisdiction.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={c2}
                    onChange={(e) => setC2(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                  />
                  <span className="text-sm text-text-secondary leading-relaxed">
                    I have read and accept the{" "}
                    <a href="/legal/terms" className="underline hover:text-foreground">Terms &amp; Conditions</a>,{" "}
                    <a href="/legal/risk-disclosures" className="underline hover:text-foreground">Risk Disclosures</a>, and{" "}
                    <a href="/legal/constitution" className="underline hover:text-foreground">Constitution</a>.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={c3}
                    onChange={(e) => setC3(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                  />
                  <span className="text-sm text-text-secondary leading-relaxed">
                    I acknowledge that a Node License is a software product,
                    not an investment; rewards are variable and not
                    guaranteed; and I will complete KYC after purchase before
                    claiming any Node operations or DAO governance access.
                  </span>
                </label>
              </div>

              <button
                type="button"
                onClick={onCheckout}
                disabled={!allChecked}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-primary"
              >
                Proceed to checkout <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* What happens after purchase */}
            <div className="mt-8 rounded-2xl border border-border bg-surface-tint p-6 md:p-8">
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                What happens after purchase
              </h3>
              <ol className="mt-4 space-y-2 text-sm text-text-tertiary list-decimal list-inside">
                {NEXT_STEPS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Risk disclosures */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mx-auto max-w-[880px] italic text-sm text-text-tertiary leading-relaxed">
            Node License is a software product sold by Ault Capital Group, not
            an investment. Licensed Mining Nodes are distinct from validators
            and do not participate in consensus or block production. Rewards
            are variable, denominated in AULT tokens, and not guaranteed. Node
            operation requires continuous uptime, self-hosted infrastructure,
            and may incur operating costs. Identity verification (KYC) is
            required after purchase before a Node License can be activated or
            used for DAO governance. Review the Terms &amp; Conditions, Risk
            Disclosures, and Constitution before purchasing.
          </p>
        </div>
      </section>

      {/* Help / contact */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-surface-2 p-7">
              <h3 className="text-lg font-semibold tracking-tight">
                Questions before buying?
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                RWA issuance, DEX integration, custody pathways, or general
                Node program questions.
              </p>
              <a
                href="mailto:sales@aultblockchain.com"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                Email sales →
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-surface-2 p-7">
              <h3 className="text-lg font-semibold tracking-tight">
                Need help with an existing license?
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Configuration, uptime, operational support.
              </p>
              <a
                href="mailto:support@aultblockchain.com"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                Email support →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Pending Stripe Modal */}
      {showPendingModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onClick={() => setShowPendingModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="pending-title"
        >
          <div
            className="relative w-full max-w-[480px] rounded-lg border border-border bg-surface-2 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPendingModal(false)}
              className="absolute right-4 top-4 text-text-tertiary hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <h3
              id="pending-title"
              className="text-xl font-semibold tracking-tight"
            >
              Checkout integration pending
            </h3>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              This purchase flow is currently in CFM design review. Once
              approved, the secure Stripe checkout will be wired here.
              Estimated availability: pending CFM sign-off.
            </p>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              For institutional purchase inquiries (10+ licenses) or to be
              notified when checkout is live:
            </p>
            <a
              href="mailto:sales@aultblockchain.com"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              Email sales →
            </a>
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setShowPendingModal(false)}
                className="inline-flex items-center justify-center rounded-lg border border-border bg-surface-3 px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-tint transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
