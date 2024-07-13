import { TIME_INTERVALS } from '@/config/interval'
import { create } from 'zustand'

export type TimeInterval = (typeof TIME_INTERVALS)[number]

interface IntervalState {
  timeInterval: TimeInterval
  setTimeInterval: (interval: TimeInterval) => void
}

export const useTimeIntervalStore = create<IntervalState>()((set) => ({
  timeInterval: TIME_INTERVALS[0],
  setTimeInterval: (timeInterval) => set({ timeInterval }),
}))
