import { useEffect, useRef, useState } from "react";
import { useChainStats } from "@/hooks/useChainStats";

type CellProps = {
  value: React.ReactNode;
  label: string;
  mono?: boolean;
};

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

function Cell({ value, label, mono = false }: CellProps) {
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
      <div className="text-xs uppercase tracking-wider text-text-tertiary mt-1">
        {label}
      </div>
    </div>
  );
}

function AnimatedValue({
  to,
  durationMs,
  format,
  className,
  threshold = 0.4,
}: {
  to: number;
  durationMs: number;
  format: (v: number) => string;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started, threshold]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed >= durationMs) {
        setDisplayed(to);
        return;
      }
      const t = elapsed / durationMs;
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayed(Math.round(eased * to));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to, durationMs]);

  return (
    <span ref={ref} className={className}>
      {started ? format(displayed) : format(0)}
    </span>
  );
}

export function LiveStats() {
  const { blockHeight, totalStakedAult, activeValidators, uptimeDays } =
    useChainStats();

  const stakedM =
    totalStakedAult != null
      ? `${Math.round(totalStakedAult / 1e6)}M AULT`
      : "—";

  return (
    <div>
      <div className="grid grid-cols-2 min-[900px]:grid-cols-5 gap-y-6 gap-x-4 text-center">
        <Cell
          value={
            blockHeight != null ? (
              <AnimatedValue
                to={blockHeight}
                durationMs={1200}
                format={(v) => v.toLocaleString("en-US")}
                className="font-mono tabular-nums"
              />
            ) : (
              "—"
            )
          }
          label="Block height"
          mono
        />
        <Cell value="~1s" label="Block time" />
        <Cell
          value={
            totalStakedAult != null ? (
              <AnimatedValue
                to={Math.round(totalStakedAult / 1e6)}
                durationMs={1000}
                format={(v) => `${v}M AULT`}
                className="font-mono tabular-nums"
              />
            ) : (
              "—"
            )
          }
          label="Total staked"
          mono
        />
        <Cell
          value={
            activeValidators != null ? (
              <AnimatedValue
                to={activeValidators}
                durationMs={800}
                format={(v) => v.toLocaleString("en-US")}
                className="font-mono tabular-nums"
              />
            ) : (
              "—"
            )
          }
          label="Active validators"
          mono
        />
        <Cell
          value={uptimeDays != null ? uptimeDays.toLocaleString("en-US") : "—"}
          label="Days mainnet uptime"
          mono
        />
      </div>
      <p className="mt-6 text-xs italic text-text-tertiary">
        Live on-chain data via the Ault Blockchain mainnet RPC. Updates every 6 seconds.
      </p>
    </div>
  );
}
