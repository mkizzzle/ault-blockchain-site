import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { LiveStats } from "@/components/site/LiveStats";
import { CredibilityStrip } from "@/components/site/CredibilityStrip";
import { StatusBar } from "@/components/site/StatusBar";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionLabel } from "@/components/site/SectionLabel";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { NewsSection } from "@/components/site/NewsSection";
import { SubscribeCTA } from "@/components/site/SubscribeCTA";
import { ThreeCardGrid } from "@/components/site/ThreeCardGrid";
import { TransparencySection } from "@/components/site/TransparencySection";
import {
  ShieldCheckIcon,
  LightningIcon,
  WalletIcon,
  BlockIcon,
  GlobeIcon,
  LockIcon,
} from "@/components/site/icons";
import { AultMarkets } from "@/components/site/AultMarkets";
import { useChainStats } from "@/hooks/useChainStats";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is Ault Blockchain?",
    a: "Ault Blockchain is a sovereign Layer 1 built for institutional-grade real-world asset settlements, DeFi, and AI workloads on-chain. Near-instant finality. Mainnet live since 3 March 2026.",
  },
  {
    q: "Who is behind Ault Blockchain?",
    a: "Ault Capital Group, a wholly-owned subsidiary of Hyperscale Data, Inc. (NYSE: GPUS). Public-company governance, U.S. parent.",
  },
  {
    q: "Is a Licensed Mining Node License an investment?",
    a: "No. A Node License is a software product, not an investment. Rewards are denominated in AULT tokens, variable, and not guaranteed. Review the Terms & Conditions, Risk Disclosures, and Constitution before purchasing.",
  },
  {
    q: "Do Licensed Mining Nodes participate in consensus?",
a: "No. Trusted block producers (validators) handle transaction ordering and block creation. Licensed Mining Nodes perform protocol-defined off-chain verifiable work. starting with cryptographically verified randomness, protected by a lightweight anti-spam check.",  },
  {
    q: "Is Ault Blockchain audited?",
    a: "Yes. The smart contracts have been audited. The audit report is not yet public.",
  },
  {
    q: "Where can I verify on-chain activity?",
    a: "The public block explorers run on Xangle: ault.explorer.xangle.io (Core) and ault-evm.explorer.xangle.io (EVM). Staking and validator delegation: ault.hub.xangle.io.",
  },
  {
    q: "Where can I find technical documentation?",
a: "The full public technical documentation lives at docs.aultblockchain.com. architecture, the Licensed Mining System, tokenomics, governance, the API reference, developer SDK, and node operations.",  },
  {
    q: "What is the AULT token supply?",
    a: "100,000,000,000 (100B) AULT total, fixed at genesis. 95% of emissions go to Node License holder rewards; 5% to staking rewards.",
  },
  {
    q: "What is the gas fee distribution?",
    a: "A modifiable base-fee system. 90% to block producers and their supporters, 10% to the DAO Community Pool.",
  },
];


export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Ault Blockchain — Hybrid PoW/PoS Sovereign Chain with Licensed Mining Node Layer" },
      {
        name: "description",
        content:
          "Hybrid PoW/PoS sovereign chain. Sub-second transaction finality. Institutions tokenize real-world assets, run DeFi, and power AI workloads on-chain. Mainnet live 3 March 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://aultblockchain.com/" },
      { property: "og:title", content: "Ault Blockchain — Hybrid PoW/PoS Sovereign Chain for Real-World Assets and DeFi" },
      {
        property: "og:description",
        content:
          "Mainnet live since March 3, 2026. Hybrid PoW/PoS sovereign chain. Sub-second finality. Licensed Mining Node layer runs verifiable off-chain work. Built by Ault Capital Group, an NYSE-listed subsidiary of Hyperscale Data, Inc.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@aultblockchain" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ault Blockchain",
          url: "https://aultblockchain.com",
          logo: "https://framerusercontent.com/images/urFmPvvAKkpVpjuL7AooFl6ZRT4.svg",
          parentOrganization: {
            "@type": "Corporation",
            name: "Hyperscale Data, Inc.",
            tickerSymbol: "GPUS",
            url: "https://hyperscaledata.com",
          },
          sameAs: [
            "https://x.com/aultblockchain",
            "https://t.me/officialaultblockchain",
            "https://discord.gg/Kwae6KsV8J",
            "https://www.instagram.com/aultblockchain/",
            "https://docs.aultblockchain.com",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Ault Blockchain",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web, EVM-compatible",
          description:
            "Ault Blockchain is a sovereign Layer 1 built for institutional-grade real-world asset settlements, DeFi, and AI workloads on-chain. Near-instant finality. Mainnet live 3 March 2026.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Ault Blockchain",
          url: "https://aultblockchain.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://docs.aultblockchain.com/?q={search_term_string}",
            "query-input": "required name=search_term_string",
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-border pl-4 md:pl-6">
      <div className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">{value}</div>
      <div className="text-xs uppercase tracking-wider text-text-tertiary mt-1">{label}</div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary font-medium">
      <span className="h-px w-6 bg-primary/60" />
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-balance">{title}</h2>
      {lead && <p className="mt-5 text-lg text-text-secondary leading-relaxed">{lead}</p>}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-surface-2 p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-3 py-1.5 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="text-text-secondary">Mainnet live · March 3, 2026</span>
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight text-balance">Ault Blockchain</h1>

        <p className="mt-6 max-w-3xl text-xl md:text-2xl text-text-secondary leading-relaxed text-balance">
          A <span className="text-foreground font-medium">Hybrid PoW/PoS sovereign chain built for real-world asset settlements, DeFi, and AI</span> with a Licensed Mining Node layer for off-chain verifiable work.
        </p>

        <p className="mt-5 font-mono text-[15px] text-text-tertiary leading-relaxed max-w-3xl">
          ~0.9-second transaction confirmation · Fully EVM-compatible · Licensed Mining Node layer live for off-chain verifiable work
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://ault.explorer.xangle.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Explore the chain <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/whitepaper"
            target="_self"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/60 px-5 py-3 text-sm font-medium text-foreground hover:bg-surface-3 transition-colors"
          >
            Read the whitepaper
          </a>
        </div>

        <div className="mt-16">
          <LiveStats />
        </div>
      </div>
    </section>
  );
}

function OnlyBulls() {
  return (
    <section className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div
          className="rounded-2xl border border-border p-8 md:p-12 grid gap-12 lg:grid-cols-2 items-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--surface-2), var(--surface-tint))",
          }}
        >
          {/* Left column */}
          <div>
            <Eyebrow>The consumer entry point</Eyebrow>
            <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-balance">
              OnlyBulls. Your AI market agent.
            </h3>
            <p className="mt-5 text-text-secondary leading-relaxed">
              The AULT wallet for the Ault Blockchain ecosystem. See your AULT
              balance, mined-AULT for Node Holders, and 24/7 AI market
              intelligence: alerts, morning briefs, watchlists, and OnlyBulls
              Agent Intelligence. Built by askROI, a wholly-owned subsidiary of
              Hyperscale Data, Inc. (NYSE: GPUS).
            </p>
            <p className="mt-4 text-sm text-text-tertiary leading-relaxed">
              Available as a web app and on iOS + Android. Ault Markets account
              connection in upcoming releases.
            </p>
            <p className="mt-6 text-sm text-text-tertiary">
              50,000+ downloads · 4.5 stars · Last update May 11, 2026
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://onlybulls.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open OnlyBulls Web <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://apps.apple.com/us/app/onlybulls/id6746166943"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-tint px-4 py-2.5 text-sm hover:bg-surface-3 transition-colors"
              >
                <span className="text-text-tertiary text-xs">Download on the</span>
                <span className="font-semibold">App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.askroi.onlybulls"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-tint px-4 py-2.5 text-sm hover:bg-surface-3 transition-colors"
              >
                <span className="text-text-tertiary text-xs">Get it on</span>
                <span className="font-semibold">Google Play</span>
              </a>
            </div>
          </div>

          {/* Right column — real screenshot in minimal device frame */}
          <div className="flex flex-col items-center">
            <div
              className="p-2 max-w-md w-full"
              style={{
                background: "var(--surface-2)",
                borderRadius: "36px",
                boxShadow: "0 24px 60px -20px rgba(0,0,0,0.6)",
              }}
            >
              <img
                src="https://play-lh.googleusercontent.com/YZKIvGyjAw81u7IwtG0f20JjFgHPfxFs762Noj8O7LC72xH8wLepE7TVLIq51vp4noV_bEIHY6zfMhC6gdBL4g=w1440"
alt="OnlyBulls live app. market screen"                className="w-full h-auto block"
                style={{ borderRadius: "28px" }}
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-xs italic text-text-tertiary text-center">
              OnlyBulls — live in the App Store and Google Play. Web app at
              onlybulls.com.
            </p>
          </div>
        </div>

        {/* Funnel diagram */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-4 items-stretch">
            {[
              {
                t: "OnlyBulls",
                k: "Consumer entry",
                d: "AULT wallet + AI market agent. See your mined-AULT balance and market intelligence in one app.",
              },
              {
                t: "Ault Markets",
                k: "Institutional product surface",
                d: "Tokenized equities, crypto pairs, compliant RWAs. Ault DEX is the on-chain trading entity inside Ault Markets.",
              },
              {
                t: "Ault Blockchain",
                k: "Settlement layer",
                d: "Hybrid PoW/PoS sovereign chain. Sub-second transaction finality. Built for real-world asset settlements, DeFi, and AI workloads on-chain.",
              },
            ].map((s, i) => (
              <div key={s.t} className="relative">
                <div className="rounded-2xl border border-border hover:border-border-strong transition-colors duration-150 bg-surface-2 p-6 h-full">
                  <div className="text-xs uppercase tracking-wider text-primary">{s.k}</div>
                  <div className="mt-2 text-xl font-semibold">{s.t}</div>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">{s.d}</p>
                </div>
                {i < 2 && (
                  <>
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 h-6 w-6 text-primary z-10 bg-background rounded-full" />
                    <ArrowDown className="md:hidden mx-auto my-2 h-5 w-5 text-primary" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExecutiveQuote() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[880px] px-6 py-24 md:py-32">
        <div className="relative">
          <span
            aria-hidden
            className="absolute font-serif text-primary leading-none select-none -ml-12 md:-ml-16 -mt-6"
            style={{ fontSize: "72px" }}
          >
            &ldquo;
          </span>
          <blockquote className="text-lg md:text-xl text-text-secondary leading-relaxed text-balance">
            We believe blockchain infrastructure and tokenization have the
            potential to reshape aspects of financial markets and broaden access
            to real-world assets over the coming decade. The Ault Blockchain
            ecosystem is being developed to support tokenized commodities,
            digital assets and financial infrastructure.
          </blockquote>
          <div className="mt-8 flex flex-col items-start gap-1">
            <div className="text-base font-semibold text-foreground">
              Milton &ldquo;Todd&rdquo; Ault III
            </div>
            <div className="text-sm font-normal text-text-secondary">
              Founder, Ault Blockchain
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="border-t border-border bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionLabel n="01" label="Architecture" />
        <SectionHeading
          eyebrow="Two-layer architecture"
          title="Transaction ordering and off-chain work. separate by design."
          lead="A clean separation between block production and off-chain verifiable work means the network scales participation without consensus bottlenecks."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card>
            <SectionLabel n="L1" label="Consensus Layer" />
            <h3 className="mt-3 text-2xl font-semibold">Hybrid PoW/PoS Sovereign Chain</h3>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Block producers (validators) stake AULT, produce blocks, and finalize transactions with approximately 0.9-second confirmation times. Active validator set: 10 today (whitepaper-targeted cap: 100). Minimum self-bond 10,000 AULT.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-text-secondary">
              {[
                "EVM-compatible execution environment",
                "Modifiable per-transaction base fee",
                "Fast finality (~1–2 seconds)",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <SectionLabel n="L2" label="Off-chain Node Work" />
            <h3 className="mt-3 text-2xl font-semibold">Licensed Mining Nodes</h3>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Licensed Mining Nodes perform protocol-defined off-chain verifiable work. At genesis: Cryptographically-verified randomness generation, gated by a lightweight anti-spam check. Does not reward higher computing power.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-text-secondary">
              {[
                "1-minute selection windows; randomly selected nodes submit cryptographic commitments",
                "Emissions distributed pro-rata by verifiable work credits",
                "Not consensus. Not validators. Distinct role per the whitepaper.",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Cadence() {
  const live = [
    "Mainnet · Hybrid PoW/PoS sovereign chain · ~0.9s blocks",
    "Licensed Mining Node layer · Cryptographically-verified randomness",
    "Block explorers · Core + EVM (Xangle)",
    "Hub · community-pool delegation + rewards",
    "OnlyBulls · iOS + Android · 50,000+ downloads · 4.5 stars",
    "Public docs · docs.aultblockchain.com",
    "Smart-contract audit complete (audit report not yet public)",
    "OnlyBulls Node Holder dashboard (mined-AULT balance, work credits)",
  ];
  const building = [
    "Ault Markets · institutional product surface",
    "Ault DEX · on-chain trading entity inside Ault Markets",
    "Ault Markets Lending Protocol",
    "Ault Markets Vaults",
    "OnlyBulls DeFi wallet",
    "OnlyBulls → Ault Markets account connection",
"Argentum (Ag) listing. ~10,000 oz acquired by issuer, 100,000 oz target",  ];

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading eyebrow="Cadence" title="What's live. What's building." />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-success" />
              Live
            </div>
            <ul className="mt-4">
              {live.map((row) => (
                <li
                  key={row}
                  className="flex items-start gap-3 py-3 border-b border-border text-[15px] text-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-success flex-shrink-0" />
                  <span>{row}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-warning" />
              Building
            </div>
            <ul className="mt-4">
              {building.map((row) => (
                <li
                  key={row}
                  className="flex items-start gap-3 py-3 border-b border-border text-[15px] text-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-warning flex-shrink-0" />
                  <span>{row}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs italic text-text-tertiary leading-relaxed">
              Items in the BUILDING column are subject to development, testing, and applicable regulatory approvals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="border-t border-border bg-surface-tint">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <SectionHeading eyebrow="Questions" title="Common questions." />
        <Accordion type="single" collapsible className="mt-12 w-full">
          {FAQ_ITEMS.map((it, i) => (
            <AccordionItem
              key={it.q}
              value={`faq-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-5 text-left text-base md:text-lg font-medium text-foreground hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] text-text-secondary leading-relaxed">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Nodes() {
  const items = [
    { t: "Run Your Node", d: "Perpetual right to operate Licensed Mining Node software." },
    { t: "Off-chain verifiable work", d: "Cryptographically-verified randomness, gated by a lightweight anti-spam check." },
    { t: "Earn AULT emissions", d: "Distributed pro-rata by verifiable work credits. Variable, not guaranteed." },
    { t: "Join DAO governance", d: "One license, one vote, after KYC and Constitution acceptance." },
  ];

  return (
    <section id="nodes" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Licensed Mining Nodes"
          title="Operate verifiable off-chain work for the Ault Blockchain."
          lead="A perpetual, non-exclusive software license to run a Licensed Mining Node. Of 1,000,000 total Node Licenses, 500,000 are held for internal operation; of the public 500,000, more than 186,000 are reserved."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-2 p-6 h-full">
              <div className="text-base font-semibold">{it.t}</div>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 italic text-sm text-text-tertiary leading-relaxed max-w-4xl">
          Node License is a software product sold by Ault Capital Group, not an investment. Licensed Mining Nodes are distinct from validators and do not participate in transaction ordering. Rewards are variable and not guaranteed.
        </p>
      </div>
    </section>
  );
}

function DualFunnel() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-surface-2 p-10 flex flex-col">
            <Eyebrow>Institutional access</Eyebrow>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
              Talk to our BD team.
            </h3>
            <p className="mt-4 text-text-secondary leading-relaxed">
              RWA issuance, DEX integration, custody pathways. We work with treasuries, exchanges, and licensed issuers.
            </p>
            <div className="mt-8">
              <a
                href="mailto:sales@aultblockchain.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a call <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface-2 p-10 flex flex-col">
            <Eyebrow>Developer access</Eyebrow>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
              Ship on Ault Blockchain.
            </h3>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Compatible with the broad Ethereum application ecosystem, REST API, developer SDK, mainnet and testnet endpoints. Full documentation and example integrations.
            </p>
            <div className="mt-8">
              <a
                href="https://docs.aultblockchain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground hover:bg-surface-3 transition-colors"
              >
                Read the docs <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveToday() {
  const items = [
    { t: "Mainnet", href: "https://ault.explorer.xangle.io", d: "Block production live since March 3, 2026." },
    { t: "Hub & rewards", href: "https://ault.hub.xangle.io", d: "Join community pools and track rewards on-chain." },
    { t: "Public docs", href: "https://docs.aultblockchain.com", d: "Architecture, Node operations, dev guides." },
  ];

  return (
    <section className="border-t border-border bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="What's live today"
          title="Verifiable on-chain. In real time."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {items.map((it) => (
            <a
              key={it.t}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-surface-2 p-6 hover:border-border-strong transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="text-lg font-semibold">{it.t}</div>
                <ArrowUpRightIcon />
              </div>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">{it.d}</p>
              <div className="mt-4 font-mono text-xs text-text-tertiary truncate">{new URL(it.href).host}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg className="h-4 w-4 text-text-tertiary group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function About() {
  // anchor target for nav
  return <div id="about" className="sr-only" aria-hidden />;
}

function Home() {
  const { blockHeight, activeValidators } = useChainStats();
  return (
    <div className="min-h-screen bg-background text-foreground">
        <AnnouncementBar date="2026-05-15">
        Mainnet live — Hybrid PoW/PoS sovereign chain fully operational, Licensed Mining Node layer active.
      </AnnouncementBar>
      <StatusBar />
      <Nav />
      <main>
        <About />
        <Hero />
        <CredibilityStrip />
        <OnlyBulls />
        <AultMarkets />
        <Architecture />
        <Cadence />
        <ExecutiveQuote />
        <FAQ />

        {/* T2-g: Ecosystem gallery — tabbed card grid */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <SectionLabel n="09" label="Ecosystem" />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-4 mb-8">
              Building on Ault
            </h2>

            <Tabs defaultValue="featured" className="w-full">
              <TabsList className="mb-8">
                {["Featured", "dApps", "Chains", "Infra", "Mining"].map((tab) => (
                  <TabsTrigger key={tab} value={tab.toLowerCase()}>{tab}</TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="featured">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: "Ault Markets", tag: "Institutional DeFi", desc: "Trade RWAs, crypto pairs, and compliant assets on Ault." },
                    { name: "Ault DEX", tag: "On-chain trading", desc: "EVM-compatible execution entity inside Ault Markets." },
                    { name: "Ault Lending", tag: "Yield", desc: "Composable lending and yield on the Ault protocol." },
                    { name: "OnlyBulls", tag: "Consumer", desc: "AI market agent — iOS, Android, and web." },
                    { name: "AultShield", tag: "RWA", desc: "Off-chain asset provenance anchored to chain state." },
                    { name: "Numerai Era 5", tag: "AI / Quantitative", desc: "Stake-elevated inference within a deterministic compute window." },
                  ].map(({ name, tag, desc }) => (
                    <div key={name} className="rounded-lg border border-border bg-surface-2 p-6 hover:bg-surface-3 transition-colors">
                      <div className="text-xs uppercase tracking-widest text-primary font-mono mb-2">{tag}</div>
                      <div className="text-base font-medium text-foreground mb-1.5">{name}</div>
                      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="dapps">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: "Ault Markets", tag: "DEX · Lending" },
                    { name: "Ault Vaults", tag: "Yield strategies" },
                    { name: "AultShield", tag: "RWA provenance" },
                    { name: "OnlyBulls", tag: "Consumer wallet" },
                    { name: "Numerai", tag: "AI inference" },
                    { name: "Onyx", tag: "Compliance" },
                  ].map(({ name, tag }) => (
                    <div key={name} className="rounded-lg border border-border bg-surface-2 p-6 hover:bg-surface-3 transition-colors">
                      <div className="text-xs uppercase tracking-widest text-primary font-mono mb-2">{tag}</div>
                      <div className="text-base font-medium text-foreground">{name}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="chains">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: "Mainnet", tag: "Hybrid PoW/PoS", desc: "Live since March 3, 2026. ~0.9s finality." },
                    { name: "Ault-EVM", tag: "EVM-compatible", desc: "Solidity 0.8.x bytecode. Use MetaMask, Hardhat, Foundry." },
                  ].map(({ name, tag, desc }) => (
                    <div key={name} className="rounded-lg border border-border bg-surface-2 p-6 hover:bg-surface-3 transition-colors">
                      <div className="text-xs uppercase tracking-widest text-primary font-mono mb-2">{tag}</div>
                      <div className="text-base font-medium text-foreground mb-1.5">{name}</div>
                      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="infra">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: "ault.explorer.xangle.io", tag: "Core explorer" },
                    { name: "ault-evm.explorer.xangle.io", tag: "EVM explorer" },
                    { name: "ault.hub.xangle.io", tag: "Staking hub" },
                    { name: "docs.aultblockchain.com", tag: "Public docs" },
                    { name: "REST API V1", tag: "Read-only" },
                    { name: "Licensed Mining Nodes", tag: "Off-chain work" },
                  ].map(({ name, tag }) => (
                    <div key={name} className="rounded-lg border border-border bg-surface-2 p-6 hover:bg-surface-3 transition-colors">
                      <div className="text-xs uppercase tracking-widest text-primary font-mono mb-2">{tag}</div>
                      <div className="text-base font-medium text-foreground">{name}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mining">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: "Licensed Mining Node", tag: "Verifiable randomness", desc: "Off-chain work gated by licensed anti-spam check." },
                    { name: "Phase 2 applicants", tag: "Application open", desc: "Phase 1 slots filled. Licensing Review Committee Q2 2026." },
                    { name: "Node Holder dashboard", tag: "Mined-AULT", desc: "Track mined AULT balance and work credits in real time." },
                  ].map(({ name, tag, desc }) => (
                    <div key={name} className="rounded-lg border border-border bg-surface-2 p-6 hover:bg-surface-3 transition-colors">
                      <div className="text-xs uppercase tracking-widest text-primary font-mono mb-2">{tag}</div>
                      <div className="text-base font-medium text-foreground mb-1.5">{name}</div>
                      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <Nodes />
        <LiveToday />

        {/* T2-b: Per-chain stats — mainnet vs Ault-EVM */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <SectionLabel n="04-b" label="Chain breakdown" />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-4 mb-8">
              Two chains within one network
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-surface-2 px-6 py-5">
                <div className="text-xs uppercase tracking-widest text-text-tertiary font-mono mb-3">Mainnet</div>
                <div className="flex gap-6">
                  <span className="text-2xl font-mono text-foreground">
                    {blockHeight != null ? blockHeight.toLocaleString("en-US") : "—"}
                  </span>
                  <div className="text-xs text-text-tertiary self-center uppercase tracking-wider">Block</div>
                </div>
                <div className="flex gap-6 mt-2">
                  <span className="text-2xl font-mono text-foreground">{activeValidators.toLocaleString("en-US")}</span>
                  <div className="text-xs text-text-tertiary self-center uppercase tracking-wider">Validators</div>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface-2 px-6 py-5">
                <div className="text-xs uppercase tracking-widest text-text-tertiary font-mono mb-3">Ault-EVM</div>
                <div className="flex gap-6">
                  <span className="text-2xl font-mono text-foreground">—</span>
                  <div className="text-xs text-text-tertiary self-center uppercase tracking-wider">Block</div>
                </div>
                <div className="flex gap-6 mt-2">
                  <span className="text-2xl font-mono text-foreground">—</span>
                  <div className="text-xs text-text-tertiary self-center uppercase tracking-wider">Validators</div>
                </div>
                <p className="text-xs text-text-tertiary mt-3 font-mono">EVM block height pending RPC data source.</p>
              </div>
            </div>
          </div>
        </section>

        <DualFunnel />

        {/* T1-e: Media / Video section */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="mb-12">
              <SectionLabel n="08" label="Media" />
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] tracking-tight">
                In the media
              </h2>
            </div>

            {/* Explainer video thumbnail — WebM/MP4, no illustrated blobs */}
            <div className="rounded-lg border border-border bg-surface-2 overflow-hidden mb-8">
              <div className="relative aspect-video bg-surface-3 flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-surface-3 flex items-center justify-center">
                  <span
                    className="text-6xl font-mono text-text-tertiary/30 select-none"
                    aria-hidden
                  >
                    AULT
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center
                     transition-transform duration-[200ms] ease-out group-hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                      fill="currentColor" className="w-10 h-10 text-primary-foreground ml-1">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-surface/90 text-xs font-mono text-text-secondary">
                  2:34
                </div>
              </div>
              <div className="px-6 py-5">
                <span className="text-xs uppercase tracking-widest text-primary font-mono">
                  Explainer
                </span>
                <h3 className="text-base md:text-lg font-medium text-foreground mt-1">
                  Ault Blockchain — Mainnet Launch Overview
                </h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed max-w-xl">
                  A short walkthrough of the protocol stack: what Licensed Mining
                  Nodes do, how the Ault DAO governs the Community Pool, and why
                  ISP-nexus placement matters for on-chain finality.
                </p>
              </div>
            </div>

            {/* Testimonial / quote tile */}
            <div className="rounded-lg border border-border bg-surface-2 px-8 py-10 md:px-10 md:py-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="currentColor" className="w-7 h-7 text-primary/40 mb-6">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.183 11 15c0 1.933-1.567 3.5-3.5 3.5-1.332 0-2.505-.663-3.09-1.679z
                         M14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.183 21 15c0 1.933-1.567 3.5-3.5 3.5-1.332 0-2.505-.663-3.09-1.679z" />
              </svg>
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-6">
                Ault&apos;s design philosophy is that a sovereign chain can offer both
                EVM compatibility and miner-defined randomness without a trade-off
                in finality. The results speak for themselves.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-surface-3 flex items-center justify-center text-xs font-mono text-text-tertiary uppercase">
                  ICF
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    International Crypto Foundation
                  </p>
                  <p className="text-xs text-text-tertiary">
                    Mainnet-A grade · Dec 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <NewsSection />
      <SubscribeCTA />
      <TransparencySection
        eyebrow="Network guarantees"
        title="What you can verify on-chain."
        features={[
          {
            Icon: ShieldCheckIcon,
            title: "On-chain auditability",
            body: "Block production and all mining rewards are fully verifiable via the public block explorers on Xangle.",
          },
          {
            Icon: LightningIcon,
            title: "Fast finality",
body: "Approximately 0.9-second transaction confirmation. single-chain, no bridging delays.",          },
          {
            Icon: WalletIcon,
            title: "Compatible with standard Ethereum development tools",
            body: "Use MetaMask, Hardhat, Foundry, and familiar wallet and tooling integrations. No proprietary lock-in.",
          },
          {
            Icon: BlockIcon,
            title: "Separated roles",
            body: "Validators secure consensus. Licensed Mining Nodes perform off-chain verifiable work. No shared incentive structure.",
          },
          {
            Icon: GlobeIcon,
            title: "Public-main explorer",
            body: "ault.explorer.xangle.io and ault-evm.explorer.xangle.io. Hub delegation at ault.hub.xangle.io.",
          },
          {
            Icon: LockIcon,
            title: "Governance-token model",
            body: "AULT holders govern the DAO Community Pool. Node License holders participate through the governance framework.",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
