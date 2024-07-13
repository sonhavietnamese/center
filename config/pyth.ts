import { PriceServiceConnection } from '@pythnetwork/price-service-client'

export const connection = new PriceServiceConnection('https://hermes.pyth.network', {
  priceFeedRequestConfig: {
    binary: false,
  },
})

// const priceIds = [
//   '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43', // BTC/USD price id
// ]

// connection.subscribePriceFeedUpdates(priceIds, (priceFeed) => {
//   console.log(`Received an update for ${priceFeed.id}: ${priceFeed.getPriceNoOlderThan(60)}`)
//   console.log(priceFeed.getPriceNoOlderThan(60))
// })
