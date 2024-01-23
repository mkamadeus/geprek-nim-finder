import { defineStore } from 'pinia'

export const useSettings = defineStore('settings', {
  state: () => {
    return {
      yearLimit: 0,
      majorMode: 'LONG' as MajorMode,
      showYear: true,
      useSBMYear: false
    }
  },
  hydrate (state, _initialState) {
    state.yearLimit = useLocalStorage('geprek-year-limit', 2016).value
    state.majorMode = useLocalStorage('geprek-major-mode', 'LONG' as MajorMode).value as MajorMode
    state.showYear = useLocalStorage('geprek-show-year', false).value
    state.useSBMYear = useLocalStorage('geprek-use-sbm-year', false).value
  }
})
