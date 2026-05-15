{/* SOURCE OF TRUTH: Ault Blockchain Whitepaper (May 2026) Sections 4 + Appendices A, B, C — cross-verified against docs.aultblockchain.com/architecture/tokenomics, gas-and-fee-market, governance-and-dao. Where the whitepaper and docs differ, the docs (production source) take precedence — currently affects: voting window (docs say 7 days default + 1 day expedited; whitepaper says 10 days). Whitepaper Appendix C header has a known arithmetic error (says 0.00053% bootstrap; correct value is 0.0001% = 100,000 AULT, matching the Appendix C table, Section 4, and docs). */}
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StatusBar } from "@/components/site/StatusBar";

// Whitepaper Appendix A — exact values
const EMISSIONS_DATA = [
  { year: 1, emissions: 15.0, daily: 41.1 },
  { year: 2, emissions: 13.586, daily: 37.22 },
  { year: 3, emissions: 12.305, daily: 33.71 },
  { year: 4, emissions: 11.145, daily: 30.53 },
  { year: 5, emissions: 10.094, daily: 27.66 },
  { year: 6, emissions: 9.143, daily: 25.05 },
  { year: 7, emissions: 8.281, daily: 22.69 },
  { year: 8, emissions: 7.5, daily: 20.55 },
  { year: 9, emissions: 6.793, daily: 18.61 },
  { year: 10, emissions: 6.153, daily: 16.86 },
];

const TOKEN_METRICS: { value: string; label: string }[] = [
  { value: "100B", label: "Total supply" },
  { value: "95%", label: "Emissions to Mining Nodes" },
  { value: "5%", label: "Emissions to Staking Rewards" },
  { value: "90%", label: "Validators' share of gas fees" },
  { value: "10%", label: "DAO Treasury share of gas fees" },
  { value: "10 years", label: "Emissions timeframe" },
  { value: "1,000,000", label: "Protocol-max node licenses" },
  { value: "2 years", label: "License non-transferability" },
  { value: "100,000 AULT", label: "Genesis bootstrap" },
];

const DISTRIBUTION_ROWS: { bucket: string; pct: string; amount: string }[] = [
  {
    bucket:
      "Emissions Supply (10-year distribution: 95% to Licensed Mining Nodes, 5% to staking rewards)",
    pct: "~99.9999%",
    amount: "99,999,900,000",
  },
  {
    bucket: "Genesis Validator Bootstrap (seed validators for Block 1 production)",
    pct: "~0.00001%",
    amount: "10,000",
  },
  {
    bucket:
      "Initial Validator & Ecosystem Bootstrap (post-genesis operations + gas-fee subsidies)",
    pct: "~0.00009%",
    amount: "90,000",
  },
];

const GOVERNANCE_PARAMS: { value: string; label: string }[] = [
  { value: "500,000 AULT", label: "Minimum proposal stake" },
  { value: "7 days", label: "Default voting window" },
  { value: "1 day", label: "Expedited voting window" },
  { value: "20%", label: "Quorum requirement" },
  { value: "33.4%", label: "No-with-Veto threshold" },
  { value: "200,000", label: "Max votes per member" },
];

const TX_COSTS: { type: string; cost: string }[] = [
  { type: "Token transfer (~80k gas)", cost: "~0.01 AULT" },
  { type: "Staking operation (100–120k gas)", cost: "~0.0125–0.015 AULT" },
  { type: "DEX swap (150–250k gas)", cost: "~0.019–0.031 AULT" },
  { type: "Smart contract call (200–500k gas)", cost: "~0.025–0.063 AULT" },
];

const CANONICAL_URL = "https://aultblockchain.com/tokenomics";

export const Route = createFileRoute("/tokenomics")({
  component: TokenomicsPage,
  head: () => ({
    meta: [
      { title: "AULT Tokenomics — Ault Blockchain" },
      {
        name: "description",
        content:
          "100 billion AULT, fixed at genesis. 10-year exponential-decay emissions: 95% to Licensed Mining Nodes, 5% to staking rewards. 90% of gas fees to validators, 10% to DAO Treasury. No burns, no inflation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:title", content: "AULT Tokenomics — Ault Blockchain" },
      {
        property: "og:description",
        content:
          "100B AULT fixed supply. 95% of emissions to Licensed Mining Nodes, 5% to staking rewards over 10 years. 90% of gas fees to validators. 10% to DAO Treasury.",
      },
      { property: "og:image", content: "/og-image-tokenomics.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image-tokenomics.png" },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialProduct",
          name: "AULT Token",
          description:
            "Native protocol token of the Ault Blockchain. Total supply: 100,000,000,000 AULT, fixed at genesis. Distributed via 10-year exponential-decay emissions schedule (95% to Licensed Mining Nodes, 5% to staking rewards).",
          provider: {
            "@type": "Organization",
            name: "Ault Capital Group",
            parentOrganization: {
              "@type": "Corporation",
              name: "Hyperscale Data, Inc.",
              tickerSymbol: "GPUS",
            },
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
            { "@type": "ListItem", position: 2, name: "Tokenomics", item: CANONICAL_URL },
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

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-border pl-4 md:pl-6 py-2">
      <div className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
        {value}
      </div>
      <div className="text-xs uppercase tracking-wider text-text-tertiary mt-1">{label}</div>
    </div>
  );
}

function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StatusBar />
      <Nav />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Eyebrow>Tokenomics</Eyebrow>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-balance">
            AULT Token Economics.
          </h1>
          <p className="mt-6 max-w-[880px] text-lg md:text-xl text-text-secondary leading-relaxed">
            100 billion AULT, fixed at genesis. Distribution governed by a 10-year
            exponential-decay emissions schedule — 95% to Licensed Mining Nodes, 5% to staking
            rewards — with gas fees paid to validators and the DAO Treasury. No inflation. No
            future minting.
          </p>
        </div>
      </section>

      {/* Token Metrics grid */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TOKEN_METRICS.map((m) => (
              <StatCell key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Eyebrow>Distribution</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-balance">
            Token allocation at genesis.
          </h2>
          <p className="mt-5 max-w-[880px] text-lg text-text-secondary leading-relaxed">
            100,000,000,000 AULT minted at the token generation event, distributed as follows.
          </p>

          <div className="mt-10 max-w-[880px] overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-text-tertiary uppercase text-xs tracking-wider">
                  <th className="text-left font-medium py-3 pr-4">Bucket</th>
                  <th className="text-right font-medium py-3 px-4">Percentage</th>
                  <th className="text-right font-medium py-3 pl-4">AULT amount</th>
                </tr>
              </thead>
              <tbody>
                {DISTRIBUTION_ROWS.map((row) => (
                  <tr
                    key={row.bucket}
                    className="border-b border-border hover:bg-surface-tint transition-colors"
                  >
                    <td className="py-4 pr-4 text-text-secondary">{row.bucket}</td>
                    <td className="py-4 px-4 text-right font-mono text-foreground">{row.pct}</td>
                    <td className="py-4 pl-4 text-right font-mono text-foreground">{row.amount}</td>
                  </tr>
                ))}
                <tr className="border-b-2 border-foreground/40">
                  <td className="py-4 pr-4 text-foreground font-medium">Total Supply (fixed at genesis)</td>
                  <td className="py-4 px-4 text-right font-mono font-medium text-foreground">
                    100.00000%
                  </td>
                  <td className="py-4 pl-4 text-right font-mono font-medium text-foreground">
                    100,000,000,000 AULT
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Emissions schedule */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Eyebrow>Emissions schedule</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-balance">
            10 years. Exponential decay.
          </h2>
          <p className="mt-5 max-w-[880px] text-lg text-text-secondary leading-relaxed">
            Protocol rewards are distributed from the Emissions Supply through an exponential
            decay schedule spanning ten years (decay factor r = 0.9057263343897231). As more
            operators join the network, the daily emissions pool is divided among a larger set of
            participants — early operators have the opportunity to earn a larger share when fewer
            nodes are online.
          </p>

          <div className="mt-10 h-[360px] md:h-[420px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={EMISSIONS_DATA} margin={{ top: 16, right: 24, bottom: 8, left: 8 }}>
                <defs>
                  <linearGradient id="emissionsFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.32} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.04} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="year"
                  stroke="var(--text-tertiary)"
                  tickLine={false}
                  axisLine={{ stroke: "var(--border)" }}
                  tick={{ fontSize: 12 }}
                  label={{
                    value: "Year",
                    position: "insideBottom",
                    offset: -2,
                    fill: "var(--text-tertiary)",
                    fontSize: 12,
                  }}
                />
                <YAxis
                  stroke="var(--text-tertiary)"
                  tickLine={false}
                  axisLine={{ stroke: "var(--border)" }}
                  tick={{ fontSize: 12 }}
                  label={{
                    value: "Annual emissions (B AULT)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "var(--text-tertiary)",
                    fontSize: 12,
                  }}
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(v: number, _name, item) => [
                    `${v}B AULT (~${item?.payload?.daily}M/day)`,
                    "Emissions",
                  ]}
                  labelFormatter={(l) => `Year ${l}`}
                />
                <Area
                  type="monotone"
                  dataKey="emissions"
                  stroke="var(--primary)"
                  strokeWidth={2}
                  fill="url(#emissionsFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-6 max-w-[880px] text-xs italic text-text-tertiary leading-relaxed">
            Year 1: 15.0B AULT (~41.1M / day). Year 10: 6.15B AULT (~16.9M / day). Annual decay:
            ~9.43%. Cumulative over 10 years: 99,999,900,000 AULT — exactly the Emissions Supply.
            Expected emissions are not indicative of any return on investment. There is no
            guarantee that AULT will have any value.
          </p>
        </div>
      </section>

      {/* Gas fee distribution */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Eyebrow>Gas fees</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-balance">
            EIP-1559 base-fee model. Recycled, not burned.
          </h2>
          <p className="mt-5 max-w-[880px] text-lg text-text-secondary leading-relaxed">
            Every transaction pays a base fee. Unlike protocols that burn the base fee, Ault
            Blockchain recycles 100% of gas-fee revenue back into network participants and the
            DAO Treasury.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-surface-tint p-8">
              <div className="text-xs uppercase tracking-wider text-text-tertiary">
                Validators' share
              </div>
              <div className="mt-3 text-5xl md:text-6xl font-semibold text-foreground tracking-tight">
                90%
              </div>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                Distributed to validators (and to their delegators per validator-defined
                commission rates).
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface-tint p-8">
              <div className="text-xs uppercase tracking-wider text-text-tertiary">
                DAO Treasury
              </div>
              <div className="mt-3 text-5xl md:text-6xl font-semibold text-foreground tracking-tight">
                10%
              </div>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                Routed to the DAO Community Pool. Allocations determined by on-chain governance.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-text-secondary">
            0% of gas fees are burned. Ault Blockchain recycles fees rather than destroying them.
          </p>
        </div>
      </section>

      {/* Illustrative Transaction Costs */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Eyebrow>At a glance</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-balance">
            What transactions cost on Ault Blockchain.
          </h2>
          <p className="mt-5 max-w-[880px] text-lg text-text-secondary leading-relaxed">
            Calculated at the Genesis BaseFee of 125 AULT-gwei per gas unit.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TX_COSTS.map((t) => (
              <div
                key={t.type}
                className="rounded-2xl border border-border bg-surface-tint p-6 flex flex-col"
              >
                <div className="text-xs uppercase tracking-wider text-text-tertiary">
                  {t.type}
                </div>
                <div className="mt-4 text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                  {t.cost}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Eyebrow>Governance</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-balance">
            On-chain governance, with KYC and quorum.
          </h2>
          <p className="mt-5 max-w-[880px] text-lg text-text-secondary leading-relaxed">
            Governance in Ault DAO is limited to licensed Mining Nodes who hold a valid Node
            License, complete KYC verification, and formally acknowledge the DAO Constitution.
            Ault DAO LLC retains limited veto authority over governance proposals that would
            result in regulatory non-compliance or harm to the network.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {GOVERNANCE_PARAMS.map((p) => (
              <StatCell key={p.label} value={p.value} label={p.label} />
            ))}
          </div>

          <p className="mt-8 max-w-[880px] text-xs italic text-text-tertiary leading-relaxed">
            Quorum: 20% of eligible votes must participate. Threshold: simple majority (&gt;50%)
            of participating votes. No-with-Veto: any proposal can be vetoed if 33.4% or more of
            eligible voting power votes "NO with Veto." Default voting window is 7 days;
            expedited proposals use a 1-day window. Participation cap prevents whale dominance —
            no single member can vote more than 200,000 votes regardless of how many licenses
            they hold.
          </p>
        </div>
      </section>

      {/* Risk disclosure */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="max-w-[880px] text-sm italic text-text-tertiary leading-relaxed">
            AULT tokens are not securities, investments, or instruments of profit. Emissions are
            not a guarantee of return. The values shown on this page are protocol parameters and
            do not constitute investment, legal, or financial advice. There is no guarantee that
            AULT will have any value. Expected emissions are not indicative of any return on
            investment. Review the Whitepaper, Risk Disclosures, and Constitution before
            participating in any aspect of the Ault Blockchain ecosystem.
          </p>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[720px] px-6 py-20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Want the full economic specification?
          </h3>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/whitepaper"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Read the whitepaper <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://docs.aultblockchain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-surface-tint transition-colors"
            >
              Read the public docs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
