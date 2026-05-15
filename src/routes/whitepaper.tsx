import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StatusBar } from "@/components/site/StatusBar";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/whitepaper")({
  component: WhitepaperPage,
  head: () => ({
    meta: [
      { title: "Whitepaper — Ault Blockchain" },
      { name: "description", content: "The Ault Blockchain Whitepaper — canonical technical specification of the protocol." },
    ],
  }),
});

function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StatusBar />
      <Nav />
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Whitepaper</h1>
        <p className="mt-6 text-lg text-text-secondary leading-relaxed">
          The Ault Blockchain Whitepaper is the canonical technical specification of the protocol — consensus, Licensed Mining Node work mechanism, tokenomics, governance, and gas-fee economics.
        </p>
        <div className="mt-10">
          {/* TODO: replace /whitepaper.pdf placeholder with the actual PDF when available */}
          <a
            href="/whitepaper.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Download the whitepaper (PDF) <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-4 italic text-sm text-text-tertiary">
          PDF coming soon. For the live technical documentation, see{" "}
          <a href="https://docs.aultblockchain.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
            docs.aultblockchain.com
          </a>{" "}
          (opens in new tab).
        </p>
      </section>
      <Footer />
    </div>
  );
}
