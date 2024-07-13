import { create } from 'zustand'

export type Price = {
  price: number
  conf: number
}

export type AllPrice = {
  pyth: number
  chainlink: number
  binance: number
  coinbase: number
}

interface PriceState {
  pythData: Price[]
  appendPythData: (pythData: Price) => void

  chainlinkData: Price[]
  appendChainlinkData: (chainlinkData: Price) => void

  binanceData: Price[]
  appendBinanceData: (binanceData: Price) => void

  coinbaseData: Price[]
  appendCoinbaseData: (coinbaseData: Price) => void

  allData: AllPrice[]
  updateData: (provider: string, price: number) => void
}

export const usePriceStore = create<PriceState>()((set) => ({
  pythData: [],
  appendPythData: (pythData) => set((state) => ({ pythData: [...state.pythData, pythData].slice(-20) })),

  chainlinkData: [],
  appendChainlinkData: (chainlinkData) => set((state) => ({ chainlinkData: [...state.chainlinkData, chainlinkData].slice(-20) })),

  binanceData: [],
  appendBinanceData: (binanceData) => set((state) => ({ binanceData: [...state.binanceData, binanceData].slice(-20) })),

  coinbaseData: [],
  appendCoinbaseData: (coinbaseData) => set((state) => ({ coinbaseData: [...state.coinbaseData, coinbaseData].slice(-20) })),

  allData: [
    {
      pyth: 0,
      chainlink: 0,
      binance: 0,
      coinbase: 0,
    },
  ],
  updateData: (provider, price) =>
    set((state) => {
      const allData = [...state.allData]

      allData.push({
        pyth: provider === 'pyth' ? price : allData[allData.length - 1].pyth,
        chainlink: provider === 'chainlink' ? price : allData[allData.length - 1].chainlink,
        binance: provider === 'binance' ? price : allData[allData.length - 1].binance,
        coinbase: provider === 'coinbase' ? price : allData[allData.length - 1].coinbase,
      })

      return {
        allData: allData.slice(-20),
      }
    }),
}))
