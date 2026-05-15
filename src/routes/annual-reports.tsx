import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/annual-reports")({
  component: AnnualReportsPage,
});

function AnnualReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 max-w-5xl mx-auto">
          <SectionLabel n="10" label="Documents" />
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
            Annual reports
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
            Ault Capital Group annual financial and operational disclosures. Full
            PDF reports are linked below; inline previews will appear here once
            the uploads are finalised.
          </p>
        </section>

        <section className="px-6 pb-20 max-w-5xl mx-auto">
          <div className="border-t border-border pt-16 space-y-px bg-border">
            {[
              {
                year: "2025",
                title: "Ault Capital Group Annual Report FY2025",
                status: "PDF · 2.4 MB",
                note: "Financial statements, operational metrics, and auditor attestations. Uploaded pending final sign-off.",
              },
              {
                year: "2024",
                title: "Ault Capital Group Annual Report FY2024",
                status: "PDF · 2.1 MB",
                note: "Full year coverage including Hyperscale Data (NYSE: GPUS) consolidated figures.",
              },
            ].map((report) => (
              <div
                key={report.year}
                className="bg-surface px-6 py-8 flex flex-col md:flex-row md:items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <span className="text-2xl font-semibold font-mono text-foreground">
                    {report.year}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-semibold text-foreground leading-snug">
                    {report.title}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {report.note}
                  </p>
                  <span className="inline-block mt-3 text-xs font-mono text-text-tertiary">
                    {report.status}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Download PDF →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-text-tertiary italic">
            PDF embeds will be added inline once the final files are approved for
            public distribution.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
