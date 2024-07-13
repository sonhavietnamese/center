import { create } from 'zustand'

export type Mode = 'individual' | 'dual'

interface ModeState {
  mode: Mode
  setMode: (mode: Mode) => void
}

export const useModeStore = create<ModeState>()((set) => ({
  mode: 'individual',
  setMode: (mode) => set({ mode }),
}))
