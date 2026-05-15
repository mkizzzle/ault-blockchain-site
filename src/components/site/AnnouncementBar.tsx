"use client";

import { useState } from "react";
import { CloseIcon } from "./icons";

interface AnnouncementBarProps {
  /**
   * Date prefix, e.g. "2026-05-15:"
   * Pass empty string to suppress the date stamp.
   */
  date?: string;
  /** Optional headline link — entire bar becomes clickable when provided */
  href?: string;
  children: React.ReactNode;
}

/**
 * AnnouncementBar — thin dismissible ticker at the very top of the page.
 * Use for network upgrades, maintenance windows, regulatory notices.
 * Default: closable, non-clickable.
 * Pattern: matrixdock AnnouncementBar
 */
export function AnnouncementBar({ date = "", href, children }: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const content = (
    <>
      {date && (
        <span className="relative z-20 -ml-4 overflow-hidden whitespace-nowrap pl-4 pr-1 font-mono text-text-tertiary">
          {date}:
        </span>
      )}
      <span className="relative z-10 mx-auto flex-1 text-center text-xs text-text-secondary md:text-sm">
        {children}
      </span>
    </>
  );

  return (
    <div className="relative min-h-10 border-b border-border bg-surface-tint py-2.5">
      <div className="mx-auto flex max-w-7xl items-center overflow-hidden text-[13px] leading-none">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="flex w-full items-center">
            {content}
          </a>
        ) : (
          <div className="flex w-full items-center">{content}</div>
        )}
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="ml-auto flex h-6 w-6 flex-shrink-0 items-center justify-center rounded hover:bg-border"
          aria-label="Dismiss announcement"
        >
          <CloseIcon className="h-3.5 w-3.5 text-text-tertiary" />
        </button>
      </div>
    </div>
  );
}
