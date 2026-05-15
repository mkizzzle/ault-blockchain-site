import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

interface Feature {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}

interface TransparencySectionProps {
  eyebrow?: string;
  title?: string;
  features: Feature[];
}

/**
 * TransparencySection — icon + label feature grid.
 * Good for roadmap items, trust signals, capabilities.
 * Pattern: matrixdock TransparencySection
 */
export function TransparencySection({
  eyebrow = "Architecture",
  title = "Built for transparency.",
  features,
}: TransparencySectionProps) {
  return (
    <section className="border-t border-border bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.18em] text-primary">{eyebrow}</span>
          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl text-balance">{title}</h2>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => (
            <div
              key={feat.title}
              className={cn(
                "flex flex-col gap-4 bg-surface-1 p-6 md:p-8",
                "hover:bg-surface-2 transition-colors duration-150"
              )}
            >
              <feat.Icon className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-base font-medium text-foreground">{feat.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{feat.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
