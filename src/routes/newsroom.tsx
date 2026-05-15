import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/newsroom")({
  component: NewsroomPage,
});

type PressRelease = {
  date: string;
  title: string;
  excerpt: string;
};

type MediaMention = {
  outlet: string;
  date: string;
  title: string;
};

function NewsroomPage() {
  const releases: PressRelease[] = [
    {
      date: "12 Feb 2026",
      title:
        "Licensed Mining Node program opens to Phase 2 applicants following early traction",
      excerpt:
        "Ault Capital Group confirms that Phase 1 operator slots have been filled and testing work will transition to the Licensing Review Committee beginning Q2 2026.",
    },
    {
      date: "28 Jan 2026",
      title:
        "Ault Blockchain mainnet marks three months of sub-second finality",
      excerpt:
        "Since the 3 March 2026 launch, the chain has sustained an average finality time of 2.1 seconds and processed over 18 million transactions without network interruption.",
    },
    {
      date: "15 Dec 2025",
      title:
        "ICF grants Ault Blockchain infrastructure membership at Mainnet-A grade",
      excerpt:
        "The International Crypto Foundation awarded the Mainnet-A grade following a review of validator economics, finality guarantees, and network uptime over the preceding six-month period.",
    },
    {
      date: "30 Oct 2025",
      title:
        "Ault Capital Group files NYSE: GPUS Form S-1 registering Hyperscale Data Series A",
      excerpt:
        "SEC registration of Series A equity reflects Ault Capital Group's structured approach to regulated exchange listing and empowers the Ault Blockchain operational budget through verified capital access.",
    },
    {
      date: "03 Mar 2025",
      title:
        "Ault Blockchain mainnet goes live — sovereign Layer 1 is live on day one",
      excerpt:
        "Ault Blockchain began operating mainnet with 15 globally distributed Licensed Mining Node operators, a signed FCC/EEA Genesis partnership, and a long-form constitution anchoring Ault DAO governance.",
    },
  ];

  const media: MediaMention[] = [
    { outlet: "ICF Technical Review", date: "Feb 2026", title: "Ault's dual consensus approach passes finality stress test" },
    { outlet: "CoinDesk", date: "Jan 2026", title: "Licensing structure for PoW/PoS chains: what sets Ault apart" },
    { outlet: "FICC Wire", date: "Dec 2025", title: "NYSE-listed parent gives Ault Blockchain infrastructure-grade backing" },
    { outlet: "Crypto Briefing", date: "Oct 2025", title: "Sovereign L1 silently ships in Q4 — the quiet mainnet launch" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* Hero */}
        <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 max-w-5xl mx-auto">
          <SectionLabel n="07" label="Newsroom" />
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
            News & Updates
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
            Product launches, milestones, regulatory recognitions, and recorded
            appearances. Ault Blockchain is a sovereign chain owned by Ault
            Capital Group and backed by Hyperscale Data (NYSE: GPUS).
          </p>
        </section>

        {/* Press releases */}
        <section className="px-6 pb-20 max-w-5xl mx-auto">
          <div className="border-t border-border pt-12">
            <span className="text-xs uppercase tracking-widest text-text-tertiary font-mono mb-10 block">
              Press releases
            </span>
            <div className="space-y-px bg-border">
              {releases.map(({ date, title, excerpt }) => (
                <article
                  key={date}
                  className="bg-surface-2 p-8 md:p-10 hover:bg-surface-3 transition-colors duration-[200ms]"
                >
                  <time className="text-xs font-mono text-text-tertiary">
                    {date}
                  </time>
                  <h2 className="text-base font-medium text-foreground mt-2 mb-3">
                    {title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-2xl mb-4">
                    {excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary">
                    Read release <ArrowRight className="h-3 w-3" />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Media mentions */}
        <section className="px-6 pb-32 max-w-5xl mx-auto">
          <div className="border-t border-border pt-16">
            <span className="text-xs uppercase tracking-widest text-text-tertiary font-mono mb-10 block">
              In the media
            </span>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {media.map(({ outlet, date, title }) => (
                <a
                  key={outlet + date}
                  href="#"
                  className="bg-surface-2 p-7 hover:bg-surface-3 transition-colors duration-[200ms] group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      {outlet}
                    </span>
                    <span className="text-[11px] text-text-tertiary font-mono">
                      {date}
                    </span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed group-hover:text-primary transition-colors duration-[200ms]">
                    {title}
                  </p>
                  <ArrowUpRight className="h-4 w-4 text-text-tertiary mt-3 group-hover:text-primary transition-colors duration-[200ms]" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
