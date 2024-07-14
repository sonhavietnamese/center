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
  clearPythData: () => void

  chainlinkData: Price[]
  appendChainlinkData: (chainlinkData: Price) => void
  clearChainlinkData: () => void

  binanceData: Price[]
  appendBinanceData: (binanceData: Price) => void
  clearBinanceData: () => void

  coinbaseData: Price[]
  appendCoinbaseData: (coinbaseData: Price) => void
  clearCoinbaseData: () => void

  allData: AllPrice[]
  updateData: (provider: string, price: number) => void
}

export const usePriceStore = create<PriceState>()((set) => ({
  pythData: [],
  appendPythData: (pythData) => set((state) => ({ pythData: [...state.pythData, pythData].slice(-20) })),
  clearPythData: () => set({ pythData: [] }),

  chainlinkData: [],
  appendChainlinkData: (chainlinkData) => set((state) => ({ chainlinkData: [...state.chainlinkData, chainlinkData].slice(-20) })),
  clearChainlinkData: () => set({ chainlinkData: [] }),

  binanceData: [],
  appendBinanceData: (binanceData) => set((state) => ({ binanceData: [...state.binanceData, binanceData].slice(-20) })),
  clearBinanceData: () => set({ binanceData: [] }),

  coinbaseData: [],
  appendCoinbaseData: (coinbaseData) => set((state) => ({ coinbaseData: [...state.coinbaseData, coinbaseData].slice(-20) })),
  clearCoinbaseData: () => set({ coinbaseData: [] }),

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
        pyth: provider === 'pyth' ? price : allData[allData.length - 1].pyth || 0,
        chainlink: provider === 'chainlink' ? price : allData[allData.length - 1].chainlink || 0,
        binance: provider === 'binance' ? price : allData[allData.length - 1].binance || 0,
        coinbase: provider === 'coinbase' ? price : allData[allData.length - 1].coinbase || 0,
      })

      return {
        allData: allData.slice(-120),
      }
    }),
}))
