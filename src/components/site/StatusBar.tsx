import { useChainStats } from "@/hooks/useChainStats";

export function StatusBar() {
  const { blockHeight, activeValidators } = useChainStats();
  const formatted = blockHeight != null ? blockHeight.toLocaleString("en-US") : "—";

  return (
    <div className="sticky top-0 z-[60] h-7 border-b border-border bg-background/70 backdrop-blur-[12px]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 font-mono text-[11px] text-text-secondary">
        <span className="hidden sm:inline">
          Latest block: #{formatted} · Block time: ~1s · Validators: {activeValidators} ·{" "}
          <span className="text-foreground">Mainnet: Live</span>
        </span>
        <span className="sm:hidden">
          <span className="text-foreground">Mainnet: Live</span> · Block #{formatted}
        </span>
      </div>
    </div>
  );
}
