export const useSettings = defineStore('settings', {
  state: () => {
    return {
      yearLimit: 2016,
      majorMode: 'LONG' as MajorMode,
      showYear: true,
      useSBMYear: false,
    }
  },
  persist: {
    storage: persistedState.localStorage,
  }
})
