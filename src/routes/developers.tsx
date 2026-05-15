import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ArrowRight, Code, Zap, Terminal, BookOpen } from "lucide-react";

export const Route = createFileRoute("/developers")({
  component: DevelopersPage,
});

function DevelopersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main>
        {/* Hero */}
        <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 max-w-5xl mx-auto">
          <SectionLabel n="03" label="Build on Ault" />
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
            Build on Ault
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
            Ault Blockchain is an open, sovereign Layer 1. Near-instant finality,
            full EVM compatibility, and a REST API layer for real-time chain
            data. Everything you need to ship — node infrastructure, contract
            tooling, and on-chain state — accessible today.
          </p>
        </section>

        <div className="mx-auto max-w-5xl px-6 pb-12">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-2 transition-colors"
            >
              GitHub <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://docs.aultblockchain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Go to Ault Markets <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Proof strip */}
        <section className="px-6 pb-16 max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-8 md:gap-14 text-sm text-text-secondary font-mono">
            <div>
              FCC / EEA Genesis
              <span className="ml-2 text-foreground">L1</span>
            </div>
            <div>
              ICF
              <span className="mx-1.5 text-border">—</span>
              Mainnet
              <span className="ml-2 text-foreground">A+</span>
            </div>
            <div>
              EE-4
              <span className="ml-2 text-foreground">zk-rollup free</span>
            </div>
            <div>
              AultREST
              <span className="ml-2 text-foreground">read-only</span>
            </div>
            <div>
              AVM
              <span className="ml-2 text-foreground">EVM-compatible</span>
            </div>
            <div>
              2.1 s
              <span className="ml-2 text-foreground"> consensus finality</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Entry points — 3 cards */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <ArrowRight className="h-4 w-4 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">Entry points</h2>
              </div>

              <div className="grid gap-3">
                {[
                  {
                    title: "REST API",
                    sub: "Chain data via /rest/cosmos/ paths · read-only V1",
                    href: "https://docs.aultblockchain.com",
                  },
                  {
                    title: "SDK",
                    sub: "TypeScript client · install from npm",
                    href: "https://docs.aultblockchain.com",
                  },
                  {
                    title: "Smart contracts",
                    sub: "Solidity 0.8.x · AVM bytecode · Hardhat / Foundry",
                    href: "https://github.com/ault-blockchain",
                  },
                ].map(({ title, sub, href }) => (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-lg border border-border bg-surface-2 px-4 py-4 hover:bg-surface-3 hover:border-text-tertiary/30 transition-colors group"
                  >
                    <Code className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary/70" />
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {title}
                        <ArrowRight className="ml-1.5 inline-block h-3.5 w-3.5 text-text-tertiary group-hover:text-primary transition-colors" />
                      </div>
                      <div className="text-xs text-text-tertiary leading-relaxed mt-1 font-mono">
                        {sub}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* الخدمات */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-4 w-4 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">أبرز الخدمات</h2>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Ault Markets",
                    sub: "Institutional product surface — trade RWAs, crypto pairs, and compliant assets.",
                  },
                  {
                    title: "Ault DEX",
                    sub: "On-chain trading entity inside Ault Markets. EVM-compatible execution.",
                  },
                  {
                    title: "Ault Lending Protocol",
                    sub: "Composable lending and yield generation, built on the Protocol.",
                  },
                  {
                    title: "Ault Vaults",
                    sub: "Programmatic yield strategies with on-chain attestation for regulated investors.",
                  },
                ].map(({ title, sub }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 rounded-lg border border-border bg-surface-2 px-4 py-3"
                  >
                    <Terminal className="mt-0.5 h-4.5 w-4.5 shrink-0 text-success/70" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{title}</div>
                      <div className="text-xs text-text-tertiary leading-relaxed mt-1">
                        {sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REST API section — B-RPC-safe */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="border-t border-border pt-12">
            <SectionLabel n="API" label="REST API — official paths only" />
            <h2 className="text-2xl font-semibold text-foreground mt-4 mb-6">
              AultREST is read-only
            </h2>

            <div className="rounded-lg border border-border bg-surface-2 overflow-hidden mb-6">
              <div className="px-4 py-2 border-b border-border bg-surface-3 flex items-center gap-2">
                <span className="text-xs font-mono text-success">200</span>
                <span className="text-xs font-mono text-text-secondary">
                  /rest/cosmos/base/tendermint/v1beta1/blocks/latest
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs text-text-secondary font-mono leading-relaxed">
                  {`{"block_id":{"hash":"AULT..."},"block":{"header":{...}},"block_results":{...}}`}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>
                All documented paths live under <code className="font-mono text-foreground bg-surface-3 px-1.5 py-0.5 rounded text-xs">/rest/cosmos/</code>.
                Unannounced base-Tendermint RPC paths are not part of the public spec and must never be
                used to build production integrations.
              </p>
              <p>
                V1 spec endpoints are stable. Path aliases may change before v2.
                Use semantic versioning for all production wiring.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface-3 p-4 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Getting started</span>
              </div>
              <p className="text-xs font-mono text-text-secondary leading-relaxed mb-3">
                npm install @ault-blockchain/rest-client
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">
                import {"{"} AultRESTClient {"}"} from "@ault-blockchain/rest-client"
              </p>
            </div>
          </div>
        </section>

        {/* TypeScript SDK */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="border-t border-border pt-12">
            <SectionLabel n="TS" label="TypeScript SDK" />
            <h2 className="text-2xl font-semibold text-foreground mt-4 mb-6">
              Ship with confidence
            </h2>

            <div className="rounded-xl border border-border overflow-hidden bg-surface-2">
              <div className="px-4 py-3 border-b border-border bg-surface-3/50 flex items-center gap-2">
                <Terminal className="h-4.5 w-4.5 text-text-tertiary" />
                <span className="text-xs font-mono text-text-secondary">sdk.ts</span>
              </div>
              <div className="p-5">
                <p className="text-xs font-mono text-text-secondary leading-loose">
                  import {"{"} AultRESTClient {"}"} from "@ault-blockchain/rest-client"
                </p>
                <p className="text-xs font-mono text-text-secondary leading-loose mt-1">
                  const rpc = new AultRESTClient("https://api.aultblockchain.com/rest")
                </p>
                <p className="text-xs font-mono text-text-secondary leading-loose mt-1">
                  const latest {"<"} await rpc.blocks.latest()
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* Node prerequisites */}
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="border-t border-border pt-12">
            <SectionLabel n="--" label="Node prerequisites" />
            <h2 className="text-2xl font-semibold text-foreground mt-4 mb-6">
              Before you run a node
            </h2>

            <div className="rounded-lg border border-border bg-surface-2 p-6 md:p-8">
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                Full node instructions are published in the{" "}
                <a
                  href="https://docs.aultblockchain.com"
                  className="text-primary underline underline-offset-2"
                >
                  protocol docs
                </a>
                . The minimum production checklist before connecting a node to a
                live network is captured below.
              </p>

              <h3 className="text-sm font-medium text-foreground mb-3">
                Checklist
              </h3>
              <ul className="space-y-2">
                {[
                  "Minimum 16 GB RAM; SSD-backed persistent storage (≥ 500 GB NVMe recommended)",
                  "Versioned binary from the official release channel — verify the SHA-256 checksum before install",
                  "Exposed P2P port (30333) reachable from the public internet; private key stored offline",
                  "Tendermint node key and genesis file from docs.aultblockchain.com",
                  "OS-level firewall restricting all inbound traffic except 30333 (P2P) and 26657 (RPC — localhost only in production)",
                  "UPnP and rate-limiting disabled; use managed CIDR egress rather than flat public IP",
                  "Licensed Mining Node registration verified before connecting the node key to the production pool",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
