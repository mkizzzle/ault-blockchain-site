import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StatusBar } from "@/components/site/StatusBar";

export const Route = createFileRoute("/legal/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ault Blockchain" },
      {
        name: "description",
        content: "Ault Blockchain Privacy Policy. Coming soon — under final review with counsel.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StatusBar />
      <Nav />
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-6 text-lg text-text-secondary">
          Privacy Policy coming soon — under final review with counsel.
        </p>
        <p className="mt-10 italic text-sm text-text-tertiary leading-relaxed">
          This website is intended to be for informational purposes only and does not constitute investment, legal, or financial advice, nor should it be relied upon as such. Nothing herein constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation of any security or digital asset. Any forward-looking statements regarding products, services, or future development are subject to known and unknown risks, including technical, regulatory, and market conditions, and no assurance can be given that the plans or objectives described herein will be achieved. Actual results may differ materially from those expressed or implied in any forward-looking statement. For more information, visit aultblockchain.com.
        </p>
      </section>
      <Footer />
    </div>
  );
}
