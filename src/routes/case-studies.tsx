import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* Hero / intro */}
        <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 max-w-5xl mx-auto">
          <SectionLabel n="06" label="Built On Ault" />
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
            Built on Ault Blockchain
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
            Protocols and infrastructure teams choose Ault to build without
            gas-price volatility, without unpredictable congestion, and without
            chain fragmentation. Below are representative build profiles.
          </p>
          <p className="mt-4 text-sm text-text-tertiary leading-relaxed max-w-2xl font-mono">
            Figures are self-reported or confirmed on-chain and are current as
            of the date shown. No endorsement is implied.
          </p>
        </section>

        {/* Proof tiles */}
        <section className="px-6 pb-20 max-w-5xl mx-auto">
          <div className="grid gap-px bg-border">
            {[
              {
                name: "Ault Markets",
                tag: "DeFi · Protocol",
                tx: "4.2 M",
                tvl_usd: "$210 M",
                since: "Q1 2026",
                body:
                  "Trades and settles on Ault Blockchain native execution. Ault DEX and Ault Lending use the protocol's consensus to promise deterministic, sub-second settlement across every rider and lending pool.",
                highlight: "licensed mining node",
              },
              {
                name: "AultShield",
                tag: "Security · Infra",
                tx: "—",
                tvl_usd: "$40 M in RWA provenance",
                since: "Q1 2026",
                body:
                  "Probabilistic asset-referencing layer. AultShield records the off-chain provenance of each structured product against verifiable timestamps anchored in Ault block headers.",
                highlight: "24 h retention",
              },
              {
                name: "Numerai Era 5",
                tag: "AI · Quantitative",
                tx: "1.8 M",
                tvl_usd: "$120 M NUMERAI",
                since: "Q1 2026",
                body:
                  "Runs stake-elevated inference rounds against the Ault mainnet finality tracker. Inference requests are executed within a deterministic compute window bounded by Ault's block epoch.",
                highlight: "6 sec confidence",
              },
              {
                name: "Hubble Exchange",
                tag: "Derivatives · Fintech",
                tx: "890 K",
                tvl_usd: "$58 M",
                since: "Q2 2026",
                body:
                  "Perpetual and options contracts cleared through a hybrid PoW/PoS settlement layer. Hubble uses Licensed Mining Nodes to underwrite the integrity of each matching-engine state transition.",
                highlight: "sub-settlement",
              },
              {
                name: "OnFabric",
                tag: "RWA · Supply Chain",
                tx: "—",
                tvl_usd: "$95 M on-chain",
                since: "Q2 2026",
                body:
                  "Invoice and letter-of-credit instruments are written directly to the Ault execution environment. Trade documents are hashed into invoice state at block finality.",
                highlight: "5 sec TTD",
              },
              {
                name: "Onyx",
                tag: "Detection · Compliance",
                tx: "890 K",
                tvl_usd: "$106 M",
                since: "Q2 2026",
                body:
                  "On-chain complexity and transaction anomaly code run within a deterministic compute window bounded by Ault's block epoch signals. Onyx submits attestation-ready outputs to Ault node state.",
                highlight: "sub-second",
              },
            ].map(({ name, tag, tx, tvl_usd, since, body, highlight }) => (
              <div
                key={name}
                className="bg-surface-2 p-8 md:p-10"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-text-tertiary font-mono">
                      {tag}
                    </span>
                    <h3 className="text-base font-medium text-foreground mt-1">
                      {name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-text-tertiary shrink-0">
                    {since}
                  </span>
                </div>

                <div className="flex gap-6 mb-5 pb-5 border-b border-border">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-text-tertiary block mb-1 font-mono">
                      TX Volume
                    </span>
                    <span className="text-2xl font-mono text-foreground">
                      {tx}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-text-tertiary block mb-1 font-mono">
                      Value
                    </span>
                    <span className="text-2xl font-mono text-foreground">
                      {tvl_usd}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {body}
                </p>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-3 px-3 py-1">
                  <span className="text-xs font-mono text-primary">
                    {highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-32 max-w-5xl mx-auto">
          <div className="border-t border-border pt-16">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Partner with Ault
            </h2>
            <p className="text-text-secondary mb-6 max-w-xl leading-relaxed">
              If you are building infrastructure, a protocol layer, or a
              production application and want to explore whether Ault is the
              right settlement foundation, reach out to the business development
              team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
