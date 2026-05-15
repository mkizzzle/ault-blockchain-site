import { createContext, useContext, type ReactNode } from "react";

/**
 * BlockHeightContext carries the current chain tip height.
 * The provider accepts an optional `value` so it can be used as a
 * straightforward wrapper (no-value mode) or with a live RPC height.
 */
const BlockHeightContext = createContext<number | null>(null);

interface BlockHeightProviderProps {
  children: ReactNode;
  value?: number | null;
}

export function BlockHeightProvider({ children, value }: BlockHeightProviderProps) {
  return (
    <BlockHeightContext.Provider value={value ?? null}>
      {children}
    </BlockHeightContext.Provider>
  );
}

export function useBlockHeight(): number | null {
  return useContext(BlockHeightContext);
}
