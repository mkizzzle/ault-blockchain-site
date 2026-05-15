import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

const LOGO = "https://framerusercontent.com/images/urFmPvvAKkpVpjuL7AooFl6ZRT4.svg";

type DropItem = { label: string; sub: string; href: string; external?: boolean };

const securityItems: DropItem[] = [
  { label: "Security Centre", sub: "Audit attestations, formal verification posture, and protocol disclosure", href: "/security" },
];

const networkItems: DropItem[] = [
  { label: "What is Ault Blockchain?", sub: "Hybrid PoW/PoS sovereign chain · Sub-second finality · Broad Ethereum application compatibility · Off-chain work layer", href: "/#about" },
  { label: "Technology & Architecture", sub: "Sovereign blockchain protocol with a Licensed Mining Node layer", href: "/#architecture" },
  { label: "Licensed Mining Nodes", sub: "Off-chain verifiable work: cryptographically-verified randomness, gated by a lightweight anti-spam check", href: "/#nodes" },
];

const marketsItems: DropItem[] = [
  { label: "Ault Markets", sub: "Institutional product surface — trade RWAs, crypto pairs, and compliant assets.", href: "/#markets" },
  { label: "Ault DEX", sub: "On-chain trading entity inside Ault Markets. EVM-compatible execution.", href: "/#markets", external: false },
];

const docsItems: DropItem[] = [
  { label: "Whitepaper", sub: "Full technical specification of the Ault Blockchain protocol", href: "/whitepaper" },
  { label: "Tokenomics", sub: "AULT supply, emissions schedule, gas-fee distribution, governance parameters", href: "/tokenomics" },
  { label: "Public Docs", sub: "Architecture, Node operations, developer guides, network info", href: "https://docs.aultblockchain.com", external: true },
  { label: "Constitution", sub: "Ault DAO governance framework", href: "/legal/constitution" },
];

function Dropdown({ label, items }: { label: string; items: DropItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-3 py-2 text-sm text-text-secondary hover:text-foreground transition-colors"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 w-[420px]">
          <div className="rounded-2xl border border-border bg-surface-2/95 backdrop-blur p-2 shadow-2xl shadow-black/50">
            {items.map((it) => {
              const external = it.external;
              const Comp: any = external ? "a" : "a";
              return (
                <Comp
                  key={it.label}
                  href={it.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-surface-3 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground flex items-center gap-1">
                      {it.label}
                      {external && <ArrowUpRight className="h-3.5 w-3.5 text-text-tertiary" />}
                    </div>
                    <div className="text-xs text-text-tertiary mt-0.5 leading-relaxed">{it.sub}</div>
                  </div>
                </Comp>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-7 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={LOGO} alt="Ault Blockchain" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Dropdown label="Network" items={networkItems} />
          <Dropdown label="Documents" items={docsItems} />
          <Dropdown label="Ault Markets" items={marketsItems} />
          <Dropdown label="Security" items={securityItems} />
          <a href="/contact" className="px-3 py-2 text-sm text-text-secondary hover:text-foreground transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="/license"
            target="_self"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Your License
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2">Network</div>
              {networkItems.map((it) => (
                <a key={it.label} href={it.href} className="block py-2 text-sm text-foreground">{it.label}</a>
              ))}
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2">Documents</div>
              {docsItems.map((it) => (
                <a key={it.label} href={it.href} target={it.external ? "_blank" : undefined} rel={it.external ? "noopener noreferrer" : undefined} className="block py-2 text-sm text-foreground">{it.label}</a>
              ))}
            </div>
            <a href="/contact" className="block py-2 text-sm text-foreground">Contact</a>
            <div>
              <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2">Security</div>
              {securityItems.map((it) => (
                <a key={it.label} href={it.href} className="block py-2 text-sm text-foreground">{it.label}</a>
              ))}
            </div>
            <a
              href="/license"
              target="_self"
              className="block w-full text-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Get Your License
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
