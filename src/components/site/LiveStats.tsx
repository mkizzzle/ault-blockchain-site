import { useChainStats } from "@/hooks/useChainStats";

function PulseDot() {
  return (
    <span
      aria-hidden
      className="absolute top-3 right-3 inline-flex h-1.5 w-1.5"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-70 motion-safe:animate-ping [animation-duration:2s]" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
    </span>
  );
}

function Cell({
  value,
  label,
  mono = false,
}: {
  value: string;
  label: string;
  mono?: boolean;
}) {
  return (
    <div className="relative border-l border-border pl-4 md:pl-6 pr-6">
      <PulseDot />
      <div
        className={`text-2xl md:text-3xl font-semibold text-foreground tracking-tight ${
          mono ? "font-mono tabular-nums" : ""
        }`}
      >
        {value}
      </div>
      <div className="text-xs uppercase tracking-wider text-text-tertiary mt-1">{label}</div>
    </div>
  );
}

export function LiveStats() {
  const { blockHeight, totalStakedAult, activeValidators, uptimeDays } = useChainStats();
  const stakedM = totalStakedAult != null
      ? `${Math.round(totalStakedAult / 1e6)}M AULT`
      : "—";

  return (
    <div>
      <div className="grid grid-cols-2 min-[900px]:grid-cols-5 gap-y-6 gap-x-4">
        <Cell value={blockHeight != null ? blockHeight.toLocaleString("en-US") : "—"} label="Block height" mono />
        <Cell value="~1s" label="Block time" />
        <Cell value={stakedM} label="Total staked" mono />
        <Cell value={activeValidators.toLocaleString("en-US")} label="Active validators" mono />
        <Cell value={uptimeDays != null ? uptimeDays.toLocaleString("en-US") : "—"} label="Days mainnet uptime" mono />
      </div>
      <p className="mt-6 text-xs italic text-text-tertiary">
        Live on-chain data via the Ault Blockchain mainnet RPC. Updates every 6 seconds.
      </p>
    </div>
  );
}
