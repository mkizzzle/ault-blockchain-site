import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ArrowRight, PlayCircleIcon } from "lucide-react";

export const Route = createFileRoute("/media")({
  component: MediaPage,
});

function VideoCard({
  title,
  duration,
  source,
  description,
}: {
  title: string;
  duration: string;
  source: string;
  description: string;
}) {
  return (
    <div className="group relative bg-surface border border-border p-3">
      {/* Thumbnail placeholder */}
      <div className="relative aspect-video bg-surface-2 flex items-center justify-center overflow-hidden">
        {/* AULT watermark */}
        <span className="text-[10px] font-mono text-text-tertiary tracking-widest uppercase">
          AULT
        </span>
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <PlayCircleIcon className="w-14 h-14 text-primary" />
        </div>
        {/* Duration badge */}
        <span className="absolute bottom-2 right-2 bg-background/80 text-text-tertiary text-xs font-mono px-1.5 py-0.5">
          {duration}
        </span>
      </div>
      <div className="px-3 py-3">
        <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">
          {source}
        </p>
        <h3 className="text-sm font-semibold text-foreground leading-snug mb-1">
          {title}
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function MediaTile({
  outlet,
  title,
  date,
  href,
}: {
  outlet: string;
  title: string;
  date: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block bg-surface border border-border p-5 hover:border-border-hover transition-all duration-200"
    >
      <p className="text-xs text-primary font-mono uppercase tracking-wider mb-2">
        {outlet}
      </p>
      <h3 className="text-base font-semibold text-foreground leading-snug mb-2">
        {title}
      </h3>
      <p className="text-xs text-text-tertiary">{date}</p>
      <span className="inline-flex items-center gap-1.5 mt-3 text-xs text-text-secondary hover:text-foreground transition-colors duration-200">
        Read full story <ArrowRight className="w-3 h-3" />
      </span>
    </a>
  );
}

function MediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* Hero */}
        <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 max-w-5xl mx-auto">
          <SectionLabel n="09" label="In the Media" />
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
            Media and press
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
            Video explainers, press appearances, and select coverage from outlets
            following Ault Blockchain's launch and mainnet growth.
          </p>
        </section>

        {/* Video section */}
        <section className="px-6 pb-20 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Explainer & tech overview
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            <VideoCard
              title="Ault Blockchain — Architecture Overview"
              duration="6:42"
              source="Official Channel"
              description="Core architecture: Hybrid PoW/PoS consensus, Licensed Mining Nodes, and the settlement data model."
            />
            <VideoCard
              title="Licensed Mining Nodes — Technical Deep Dive"
              duration="9:18"
              source="Official Channel"
              description="How the off-chain work layer operates and why verification rewards computation over raw power."
            />
          </div>
        </section>

        {/* Press mentions */}
        <section className="px-6 pb-20 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Press and media mentions
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            <MediaTile
              outlet="ICF Magazine"
              title="Ault Blockchain launches institutional-grade L1 with mainnet live"
              date="March 2026"
              href="#"
            />
            <MediaTile
              outlet="CoinDesk"
              title="Hybrid PoW/PoS sovereign chain goes live — a look at the architecture"
              date="March 2026"
              href="#"
            />
            <MediaTile
              outlet="FICC"
              title="Licensing model for mining nodes draws institutional attention"
              date="April 2026"
              href="#"
            />
            <MediaTile
              outlet="Crypto Briefing"
              title="Ault-EVM and ecosystem expansion: roadmap update"
              date="May 2026"
              href="#"
            />
          </div>
        </section>

        {/* CTA band */}
        <section className="px-6 pb-28 max-w-5xl mx-auto">
          <div className="border-t border-border pt-16">
            <p className="text-sm text-text-tertiary uppercase tracking-wider font-mono mb-6">
              Press & media contact
            </p>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-6">
              For media enquiries, interview requests, or press kits, reach out to
              the Ault Blockchain press desk.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              Contact us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
