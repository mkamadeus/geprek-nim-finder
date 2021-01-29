import React, { useCallback, useEffect, useState } from 'react';
import { useQueryString } from '../hooks/useQueryString';
import { IQuery } from '../models/Query';

type SearchContextType = {
  keywords: string;
  chips: string;
  setKeywords: (_: string) => void;
  setChips: (_: string) => void;
};

export const SearchContext = React.createContext<SearchContextType>({
  keywords: '',
  chips: '',
  setKeywords: (_: string) => {},
  setChips: (_: string) => {},
});

const SearchContextProvider: React.FC<{}> = (props) => {
  const params = new URLSearchParams(window.location.search);
  const [keywords, setKeywords] = useQueryString(
    'query',
    params.get('query') || '',
  );
  const [chips, setChips] = useQueryString('chips', params.get('filter') || '');

  console.log(keywords);
  console.log(chips);

  return (
    <SearchContext.Provider value={{ keywords, chips, setKeywords, setChips }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
