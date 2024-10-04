import { create } from "zustand"

export interface AppState {
  isMobile: boolean | null
}

export interface Actions {
  setIsMobile: (isMobile: boolean) => void
}

const useStore = create<AppState & Actions>((set) => ({
  isMobile: null,
  setIsMobile: (isMobile: boolean) => set(() => ({ isMobile: isMobile })),
}))

export default useStore
