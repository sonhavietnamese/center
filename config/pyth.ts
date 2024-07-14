import { PriceServiceConnection } from '@pythnetwork/price-service-client'

export const connection = new PriceServiceConnection('https://hermes.pyth.network', {
  priceFeedRequestConfig: {
    binary: false,
  },
})

export const PYTH_PAIRS = [
  {
    id: 'btcusd',
    name: 'BTC/USD',
    priceId: '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43',
  },
  {
    id: 'ethusd',
    name: 'ETH/USD',
    priceId: '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace',
  },
  {
    id: 'linkusd',
    name: 'LINK/USD',
    priceId: '0x8ac0c70fff57e9aefdf5edf44b51d62c2d433653cbb2cf5cc06bb115af04d221',
  },
  {
    id: 'solusd',
    name: 'SOL/USD',
    priceId: '0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d',
  },
]
