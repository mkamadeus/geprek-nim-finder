import { defineStore } from 'pinia';

export enum MajorModeEnum {
  LONG,
  SHORT,
  BOTH,
}

export const useSettings = defineStore('settings', {
  state: () => {
    return {
      yearLimit: 2016,
      majorMode: MajorModeEnum.LONG,
    };
  },
  actions: {
    setMajorMode(mode: MajorModeEnum) {
      this.majorMode = mode;
    },
    setYearLimit(limit: number) {
      this.yearLimit = limit;
    },
  },
});
