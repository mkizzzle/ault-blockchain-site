import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/partners")({
  component: PartnersPage,
});

function PartnersPage() {
  const platinum = ["Hyperscale Data", "Ault Capital Group"];
  const gold = ["askROI", "Trail of Bits", "Open Zeppelin"];
  const silver = ["SlowMist", "Certik", "Schell"];

  function TierRow({ tier, names, className }: { tier: string; names: string[]; className?: string }) {
    return (
      <div className={`flex flex-wrap items-center gap-6 md:gap-10 ${className || ""}`}>
        <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest w-16 md:w-24 flex-shrink-0">
          {tier}
        </span>
        <div className="flex flex-wrap gap-6 md:gap-10">
          {names.map((name) => (
            <span
              key={name}
              className="text-lg md:text-xl font-semibold text-text-secondary tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 max-w-5xl mx-auto">
          <SectionLabel n="07" label="Ecosystem" />
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
            Partners and placements
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
            Organisations building on, auditing, or supporting Ault Blockchain.
            Tier reflects public announcement and confirmed integration status
            as of the date shown.
          </p>
        </section>

        <section className="px-6 pb-20 max-w-5xl mx-auto">
          <div className="border-t border-border pt-16 space-y-10">
            <TierRow tier="Platinum" names={platinum} />
            <TierRow tier="Gold" names={gold} />
            <TierRow tier="Silver" names={silver} />
          </div>
          <p className="mt-8 text-xs text-text-tertiary italic">
            Placement tiers are self-reported and subject to verification.
            Names appear here after public announcement. To request a listing
            or report a placement, contact the Ault Blockchain partnerships team.
          </p>
        </section>

        {/* CTA */}
        <section className="px-6 pb-28 max-w-5xl mx-auto">
          <div className="border-t border-border pt-16">
            <p className="text-sm text-text-tertiary uppercase tracking-wider font-mono mb-6">
              Build on Ault
            </p>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-6">
              Protocols, infrastructure teams, and financial institutions
              deploying on Ault Blockchain can apply for partner status.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
