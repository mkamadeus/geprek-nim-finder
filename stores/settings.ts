import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

export const useSettings = defineStore('settings', {
  state: () => {
    return {
      onlineMode: useStorage('geprek-online-mode', false),
      yearLimit: useStorage('geprek-year-limit', 2016),
      majorMode: useStorage('geprek-major-mode', MajorMode.LONG),
      showYear: useStorage('geprek-show-year', false),
      useSBMYear: useStorage('geprek-use-sbm-year', false),
    };
  },
});
