/**
 * SectionLabel — numbered section header with border rule.
 * Pattern: matrixdock SectionLabel
 */
export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="scroll-mt-[100px] border-y border-border">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4">
        <span className="flex h-7 min-w-[40px] items-center justify-center bg-primary px-2 text-[13px] font-medium leading-none text-primary-foreground">
          {n}
        </span>
        <p className="font-mono text-[13px] uppercase tracking-wider text-text-tertiary">
          {label}
        </p>
      </div>
    </div>
  );
}
