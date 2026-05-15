/**
 * SectionLabel — numbered section header with border rule.
 * Pattern: matrixdock SectionLabel
 */
export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="scroll-mt-[100px]">
      <div className="mx-auto flex max-w-7xl items-baseline gap-4 px-6 py-3">
        <span className="flex h-7 min-w-[44px] items-center justify-center bg-primary px-3 text-[15px] font-semibold leading-none text-primary-foreground">
          {n}
        </span>
        <p className="font-mono text-[15px] uppercase tracking-[0.15em] text-text-secondary">
          {label}
        </p>
      </div>
    </div>
  );
}
