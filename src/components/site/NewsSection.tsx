"use client";

import { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "./icons";

interface NewsItem {
  date: string;
  label: string;
  href: string;
}

const NEWS: NewsItem[] = [
  {
    date: "2026-05-12",
    label: "Mainnet live — Hybrid PoW/PoS sovereign chain operational, Licensed Mining Node layer active",
    href: "https://docs.aultblockchain.com",
  },
  {
    date: "2026-05-06",
    label: "OnlyBulls exceeds 50,000 downloads across iOS, Android, and web",
    href: "https://onlybulls.com",
  },
  {
    date: "2026-04-21",
    label: "Smart-contract audit complete — report pending public release",
    href: "https://docs.aultblockchain.com",
  },
  {
    date: "2026-04-01",
    label: "Argentum (Ag) RWA tokenization program soft-launched on Ault Blockchain",
    href: "https://docs.aultblockchain.com",
  },
  {
    date: "2026-03-03",
    label: "Ault Blockchain launches mainnet — Hybrid PoW/PoS sovereign chain, Licensed Mining Nodes live",
    href: "https://ault.explorer.xangle.io",
  },
];

/** Lightweight fetch: poll the RPC /status endpoint for the latest block height */
async function fetchBlockHeight(): Promise<number | null> {
  try {
    const baseUrl =
      typeof window !== "undefined"
        ? (import.meta.env.VITE_RPC_URL as string | undefined) ?? ""
        : "";
    const url = (baseUrl || "/rpc") + "/rest/cosmos/base/tendermint/v1beta1/blocks/latest";
    const resp = await fetch(url, {
      signal: AbortSignal.timeout(4_000),
    });
    if (!resp.ok) return null;
    const data = await resp.json();
    return typeof data.block?.header?.height === "string"
      ? parseInt(data.block.header.height, 10)
      : null;
  } catch {
    return null;
  }
}

/**
 * NewsSection — latest announcements strip with live block height ticker.
 * Pattern: injective NewsSection + canton NewsSection
 */
export function NewsSection() {
  const [blockHeight, setBlockHeight] = useState<number | null>(null);

  useEffect(() => {
    fetchBlockHeight().then(setBlockHeight);
    // Poll every 30 s
    const id = setInterval(() => fetchBlockHeight().then(setBlockHeight), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-success motion-safe:animate-pulse" />
          <span className="text-xs uppercase tracking-[0.18em] text-text-tertiary">
            Network status
          </span>
          <span className="mx-3 h-3 w-px bg-border" />
          <span className="font-mono text-xs text-text-secondary">
            {blockHeight ? `Block #${blockHeight.toLocaleString("en-US")}` : "Block #–"}
          </span>
        </div>
        <div className="mt-8 space-y-3">
          {NEWS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-lg px-3 py-3 -mx-3 transition-colors hover:bg-surface-2"
            >
              <span className="mt-1 flex h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="flex-1 text-[15px] leading-relaxed text-text-secondary group-hover:text-foreground transition-colors">
                {item.label}
              </span>
              <ArrowUpRightIcon className="mt-1 h-4 w-4 flex-shrink-0 text-text-tertiary group-hover:text-primary transition-colors" />
              <time className="hidden flex-shrink-0 text-xs text-text-tertiary tabular-nums sm:block">
                {item.date}
              </time>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
