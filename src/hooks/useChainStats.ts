import useSWR from "swr";

const RPC = "https://mainnet-rpc-proxy.aultblockchain.xyz";
const fetcher = (url: string) => fetch(url).then((r) => r.json());
const GENESIS = new Date("2026-03-03T00:00:00Z");

const FALLBACK = {
  blockHeight: null,
  totalStakedAult: null,
  activeValidators: 0,
};

export function useChainStats() {
  const { data: latest } = useSWR(
    `${RPC}/rest/cosmos/base/tendermint/v1beta1/blocks/latest`,
    fetcher,
    { refreshInterval: 6000, fallbackData: null },
  );
  const { data: pool } = useSWR(
    `${RPC}/rest/cosmos/staking/v1beta1/pool`,
    fetcher,
    { refreshInterval: 30000, fallbackData: null },
  );
  const { data: validators } = useSWR(
    `${RPC}/rest/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=100`,
    fetcher,
    { refreshInterval: 30000, fallbackData: null },
  );

  const blockHeight = latest?.block?.header?.height
    ? parseInt(latest.block.header.height, 10)
    : FALLBACK.blockHeight;

  const totalStakedAult = pool?.pool?.bonded_tokens
    ? Math.floor(Number(pool.pool.bonded_tokens) / 1e18)
    : FALLBACK.totalStakedAult;

  const activeValidators =
    validators?.validators?.length ?? FALLBACK.activeValidators;

  const uptimeDays = Math.max(
    0,
    Math.floor((Date.now() - GENESIS.getTime()) / 86_400_000),
  );

  return { blockHeight, totalStakedAult, activeValidators, uptimeDays };
}
