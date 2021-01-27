import React, { useState } from 'react';
import Chip from './Chip';

interface Props {}

const SearchBar = (props: Props) => {
  const [query, setQuery] = useState<string>('');

  return (
    <div
      className="flex flex-wrap rounded-full shadow p-2"
      style={{ width: '60%' }}
    >
      <input
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        name="search-bar"
        className="outline-none w-64"
      />
    </div>
  );
};

export default SearchBar;
