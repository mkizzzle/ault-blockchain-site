import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StatusBar } from "@/components/site/StatusBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Is a Licensed Mining Node License an investment?",
    a: "No. A Node License is a software product sold by Ault Capital Group, not an investment. Rewards are denominated in AULT tokens, variable, and not guaranteed. Review the Terms & Conditions, Risk Disclosures, and Constitution before purchasing.",
  },
  {
    q: "Do Licensed Mining Nodes participate in consensus?",
    a: "No. Validators are responsible for consensus and block production. Licensed Mining Nodes perform protocol-defined off-chain verifiable work that is distinct from consensus.",
  },
  {
    q: "What is Micro-PoW?",
    a: "A lightweight anti-spam check that gates VRF submissions during a Node's epoch selection. Intentionally hardware-power-neutral — it does not reward higher computing power.",
  },
  {
    q: "How are AULT emissions distributed?",
    a: "Pro-rata by verifiable work credits across nodes selected in each ~1-minute epoch. A Node Holder must submit valid work during their selection window to earn credits.",
  },
  {
    q: "Where do I see my mined AULT?",
    a: "Inside OnlyBulls, the AULT wallet for the Ault Blockchain ecosystem. Available as a web app and on iOS + Android.",
  },
  {
    q: "What happens after the 2-year non-transferability period?",
    a: "Licenses become transferable per the Constitution. Until then, a license is tied to its original purchaser.",
  },
  {
    q: "Is Ault Blockchain audited?",
    a: "Yes. Smart-contract audit complete (audit report not yet public).",
  },
];

const SHOP_URL = "/license";

export const Route = createFileRoute("/nodes")({
  component: NodesPage,
  head: () => ({
    meta: [
      { title: "Licensed Mining Nodes — Ault Blockchain" },
      {
        name: "description",
        content:
          "Operate verifiable off-chain work for the Ault Blockchain. A perpetual, non-exclusive software license. $1,500 USD. Mainnet live since March 3, 2026. Built by Ault Capital Group, a subsidiary of Hyperscale Data, Inc. (NYSE: GPUS).",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://aultblockchain.com/nodes" },
      { property: "og:title", content: "Licensed Mining Nodes — Ault Blockchain" },
      {
        property: "og:description",
        content:
          "Operate verifiable off-chain work for the Ault Blockchain. Of 1,000,000 total Node Licenses, more than 186,000 are reserved. $1,500 USD per license.",
      },
      { property: "og:image", content: "/og-image-nodes.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@aultblockchain" },
      { name: "twitter:image", content: "/og-image-nodes.png" },
    ],
    links: [{ rel: "canonical", href: "/nodes" }],
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
            url: SHOP_URL,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
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

function PrimaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={SHOP_URL}
      target="_self"
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
    >
      {children} <ArrowRight className="h-4 w-4" />
    </a>
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
    d: "Distributed pro-rata by verifiable work credits. Variable, not guaranteed. Visible in your OnlyBulls wallet.",
  },
  {
    t: "Join DAO governance",
    d: "One license, one vote, after KYC and Constitution acceptance.",
  },
];

const SUPPLY = [
  { n: "1,000,000", l: "PROTOCOL MAX" },
  { n: "977,652", l: "LICENSES ACTIVE TODAY" },
  { n: "22,348", l: "REMAINING" },
];

function NodesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StatusBar />
      <Nav />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <Eyebrow>Licensed Mining Nodes</Eyebrow>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05]">
              Operate verifiable off-chain work for the Ault Blockchain.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
              Ault Blockchain mainnet has been live since March 3, 2026,
              running on CometBFT Proof-of-Stake consensus. A Licensed Mining
              Node License is a perpetual, non-exclusive software license to
              run a Node that performs off-chain verifiable work — at genesis,
              VRF-based randomness generation gated by a lightweight Micro-PoW
              anti-spam check. Licensed Mining Nodes are not validators and do
              not participate in consensus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA>Get your Node License</PrimaryCTA>
              <a
                href="/whitepaper"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-tint px-5 py-3 text-sm hover:bg-surface-3 transition-colors"
              >
                Read the whitepaper
              </a>
            </div>
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

      {/* Supply */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-4xl">
            <Eyebrow>Supply</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-balance">
              Of 1,000,000 protocol-max Node Licenses, 977,652 are active today.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:gap-6 grid-cols-1 md:grid-cols-3">
            {SUPPLY.map((s) => (
              <div key={s.l} className="border-l border-border pl-5">
                <div className="text-3xl md:text-5xl font-semibold tracking-tight">
                  {s.n}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-text-tertiary">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-text-tertiary max-w-2xl">
            Live count from the Xangle Mining Dashboard.{" "}
            <a
              href="https://ault.explorer.xangle.io/mining"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Verify on the explorer →
            </a>
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl mb-12">
            <Eyebrow>Pricing</Eyebrow>
          </div>
          <div className="mx-auto max-w-[720px]">
            <div className="rounded-2xl border border-border bg-surface-2 p-12 text-center">
              <div className="text-5xl md:text-6xl font-semibold tracking-tight">
                $1,500 USD
              </div>
              <p className="mt-4 text-text-secondary">
                Fixed list price at issuance. Non-transferable for 2 years.
              </p>
              <div className="mt-8 flex justify-center">
                <PrimaryCTA>Get your Node License</PrimaryCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-balance">
              Common questions.
            </h2>
          </div>
          <div className="mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((it, i) => (
                <AccordionItem
                  key={it.q}
                  value={`item-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">
                    {it.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary leading-relaxed">
                    {it.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            and may incur operating costs. Review the Terms & Conditions, Risk
            Disclosures, and Constitution before purchasing.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-[720px] text-center">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
              Ready to operate a Node?
            </h3>
            <div className="mt-8 flex justify-center">
              <PrimaryCTA>Get your Node License</PrimaryCTA>
            </div>
            <p className="mt-6 text-sm text-text-tertiary">
              Available now. $1,500 USD per license. Non-transferable for 2
              years.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
