
declare global {
  type MajorMode = 'LONG' | 'SHORT' | 'BOTH';

  type Settings = {
    onlineMode: boolean;
    yearLimit: number;
    majorMode: MajorMode;
    showYear: boolean;
    useSBMYear: boolean;
  }
}

export {};
