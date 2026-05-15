import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "./icons";

interface ThreeCardGridProps {
  cards: {
    title: string;
    description: string;
    href?: string;
    icon?: ReactNode;
  }[];
}

/**
 * ThreeCardGrid — 3-up horizontal card layout.
 * Used for compare-style value props or role definitions.
 * Pattern: canton ThreeCardGrid + with Ault brand tokens
 */
export function ThreeCardGrid({ cards }: ThreeCardGridProps) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <a
              key={card.title}
              href={card.href ?? "#"}
              target={card.href ? "_blank" : undefined}
              rel={card.href ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-border bg-surface-2 p-6 md:p-8
                         hover:border-border-strong transition-colors duration-150
                         focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                {card.href && (
                  <ArrowUpRightIcon className="mt-1 h-4 w-4 flex-shrink-0 text-text-tertiary group-hover:text-primary transition-colors" />
                )}
              </div>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
