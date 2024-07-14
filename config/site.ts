export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Oracle Aggregator',
  description: 'Tool for aggregating data from various sources',
}

export const PAIRS = [
  {
    id: 'btcusd',
    name: 'BTC/USD',
    providers: 4,
  },
  {
    id: 'ethusd',
    name: 'ETH/USD',
    providers: 4,
  },
  {
    id: 'linkusd',
    name: 'LINK/USD',
    providers: 4,
  },
  {
    id: 'solusd',
    name: 'SOL/USD',
    providers: 4,
  },
]
