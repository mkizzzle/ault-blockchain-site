const LABELS = [
  "Hyperscale Data (NYSE: GPUS)",
  "Altus",
  "TRM",
  "Protofire",
  "LayerZero",
  "TRM Labs",
  "Quicknode",
  "Scottsdale Mint",
];

export function CredibilityStrip() {
  return (
    <section className="bg-surface-2 border-t border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <div className="text-center text-[11px] uppercase tracking-[0.18em] text-text-tertiary">
          Built with · Verified by
        </div>
      </div>
      <div
        className="mx-auto max-w-7xl px-6 h-16 flex items-center overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`.cred-row::-webkit-scrollbar{display:none}`}</style>
        <ul className="cred-row flex items-center gap-x-10 md:gap-x-14 mx-auto whitespace-nowrap">
          {LABELS.map((l) => (
            <li
              key={l}
              className="text-xs uppercase tracking-[0.08em] text-text-tertiary opacity-55 hover:opacity-100 transition-opacity duration-150 cursor-default"
            >
              {l}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
