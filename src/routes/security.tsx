import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/security")({
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* Hero */}
        <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 max-w-5xl mx-auto">
          <SectionLabel n="05" label="Security Centre" />
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
            Ault Blockchain Security Centre
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
            The Ault Blockchain protocol is stable, formally described, and
            continuously assessed by independent audit firms. Security disclosure
            is not an afterthought — it is part of the release process.
          </p>
        </section>

        {/* Audit attestation wall */}
        <section className="px-6 pb-20 max-w-5xl mx-auto">
          <div className="border-t border-border pt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs uppercase tracking-wider text-text-tertiary">
                Audit attestations
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Attribution mosaic — five firms, ordered by year, no links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
              {[
                { year: "2023", firm: "Trail Of Bits" },
                { year: "2024", firm: "Open Zeppelin" },
                { year: "2024", firm: "SlowMist" },
                { year: "2025", firm: "Certik" },
                { year: "2026", firm: "Schell" },
              ].map(({ year, firm }) => (
                <div
                  key={firm}
                  className="flex flex-col items-center justify-center gap-2 py-12 px-4 bg-surface-2 text-center"
                >
                  <span className="text-xs uppercase tracking-widest text-text-tertiary font-mono">
                    {year}
                  </span>
                  <span className="text-sm font-medium text-foreground uppercase tracking-wide">
                    {firm}
                  </span>
                </div>
              ))}
            </div>

            {/* Disclosure note — no scroll, lean block */}
            <p className="mt-8 text-sm text-text-tertiary leading-relaxed max-w-2xl font-mono">
              Each engagement scope and report summary are available upon request
              to license holders. Named firms are listed chronologically by the
              year of their most recent written report; no firm appears more than
              once. Scope is not disclosed publicly.
            </p>
          </div>
        </section>

        {/* Formal verification posture */}
        <section className="px-6 pb-24 max-w-5xl mx-auto">
          <div className="border-t border-border pt-16">
            <SectionLabel n="05-a" label="Protocol maturity" />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-[1.15] tracking-tight mb-6">
              Formally described, not informally assumed
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Specification-first",
                  body: "Core consensus and execution routes have formal specifications before any implementation commit. Changes to the spec require a three-stage review; the spec is the source of truth, not the code.",
                },
                {
                  title: "Coverage targets",
                  body: "Unit and integration test suites are required to maintain line and branch coverage above 80 percent on the consensus module and above 90 percent on the execution module before any release candidate is merged.",
                },
                {
                  title: "Third-party review",
                  body: "All significant protocol changes trigger a mandatory external review window. Internal security review signoff is required before the review window opens.",
                },
                {
                  title: "Disclosure policy",
                  body: "Prospective security researchers may disclose findings through the bounty program or via the designated PGP key listed in the Responsible Disclosure section of the protocol repository.",
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-lg border border-border bg-surface-2 px-6 py-5"
                >
                  <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
