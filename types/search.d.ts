declare global {
  type Query = {
    keywords: string[];
    chips: Chip[];
  }
  
  type Chip = {
    name: string;
  }
  
  type SearchRequestBody = {
    query: string;
    page: number;
    chips?: string[]; 
    settings?: Settings;
  }

  type SearchResponseBody = {
    results: Student[];
    metadata: {
      page: number;
      totalPages: number;
      totalResults: number;
    }
  }

  type SearchConfig = Settings
}

export {};
