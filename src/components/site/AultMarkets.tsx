"use client";

import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

/**
 * AultMarkets — the institutional product surface section.
 * Three products: Ault DEX, Lending Protocol, Vaults.
 */
export function AultMarkets() {
  return (
    <section className="border-t border-border" id="markets">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionLabel n="02" label="Ault Markets" />
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
            The institutional product surface.
          </h2>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            Trade tokenized assets, access compliant real-world assets, and
            integrate with the Ault Blockchain ecosystem through a unified
            institutional-grade interface.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            {
              label: "Ault DEX",
              title: "On-chain trading entity",
              body:
                "The Ault DEX operates inside Ault Markets as a separately governed protocol on Ault Blockchain. Trade tokenized equities, crypto pairs, and compliant RWAs with EVM-compatible execution.",
              bullets: [
                "EVM-compatible execution environment",
                "Separate governance from Ault DEX protocol",
                "Deep liquidity for RWA and crypto pairs",
              ],
            },
            {
              label: "Lending",
              title: "Tokenized asset lending",
              body:
                "Borrow against real-world asset collateral. Earn yield on institutional-grade on-chain positions with transparent, verifiable terms.",
              bullets: [
                "RWA-backed collateral",
                "Transparent interest and risk parameters",
                "On-chain risk engine, off-chain verification",
              ],
            },
            {
              label: "Vaults",
              title: "Structured yield strategies",
              body:
                "Programmatic vault strategies across the Ault Markets ecosystem. Select risk tiers, auto-compounding, and transparent fee structures.",
              bullets: [
                "Select risk tiers",
                "Auto-compounding options",
                "Transparent fee structure",
              ],
            },
          ].map((p, i) => (
            <div
              key={p.label}
              className="rounded-2xl border border-border bg-surface-2 p-6 md:p-8 h-full"
            >
              <SectionLabel n="" label={p.label} />
              <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {p.body}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-text-secondary">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AultMarkets;
