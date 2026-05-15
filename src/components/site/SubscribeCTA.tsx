"use client";

import { ArrowRight } from "lucide-react";

interface SubscribeCTAProps {
  /** Pre-filled headline — defaults to brand copy */
  eyebrow?: string;
  title?: string;
  lead?: string;
}

/**
 * SubscribeCTA — email / Telegram sign-up CTA band.
 * Matte surface, brand tangerine CTA.
 * Pattern: matrixdock SubscribeCTA
 */
export function SubscribeCTA({
  eyebrow = "Stay in the loop",
  title = "Get updates from Ault Blockchain.",
  lead = "Mainnet milestones, miner program updates, product releases, and governance proposals, straight to your inbox.",
}: SubscribeCTAProps) {
  return (
    <section className="border-t border-border bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-6 bg-primary/60" />
            {eyebrow}
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="mt-5 text-3xl font-semibold text-foreground md:text-4xl text-balance">
            {title}
          </h2>
          {lead && (
            <p className="mt-4 text-text-secondary leading-relaxed">{lead}</p>
          )}

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              className="w-full max-w-xs rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-text-tertiary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary sm:w-auto"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-4 text-xs text-text-tertiary">
            One-click unsubscribe. No spam. We respect your inbox.
          </p>
        </div>
      </div>
    </section>
  );
}
