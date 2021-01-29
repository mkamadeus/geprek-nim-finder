import React, { useContext, useRef, useState } from 'react';
import { isTag } from '@/utils/isTag';
import Chip from './Chip';
import { SearchContext } from '@/context/SearchContext';

interface Props {}

const SearchBar: React.FC<Props> = (props: Props) => {
  const { keywords, setKeywords, chips, setChips } = useContext(SearchContext);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    if (inputValue[inputValue.length - 1] == ' ') {
      let splittedInput = inputValue.split(' ');

      // Check if tag is inputted
      if (isTag(splittedInput[splittedInput.length - 2])) {
        inputValue = splittedInput.slice(0, splittedInput.length - 2).join(' ');
        const tagValue = splittedInput[splittedInput.length - 2].slice(1);
        setChips(chips.length === 0 ? tagValue : chips + `,${tagValue}`);
      }
    }

    setKeywords(inputValue);
  };

  const chipArray = () => {
    const chipArray = chips.split(',');

    if (chipArray[0].length === 0) {
      return null;
    }

    return chipArray.map((chip, index) => {
      return (
        <div className="px-1">
          <Chip
            name={chip}
            onClose={() => {
              const filtered = chipArray.filter((_, i) => i !== index);
              setChips(filtered.join(','));
            }}
          />
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex rounded-full shadow p-2 mb-2 w-full border-2 border-teal-200">
        <input
          value={keywords}
          onChange={onSearch}
          className="outline-none w-full"
          role="textbox"
        />
      </div>
      <div className="flex flex-wrap w-full -mx-1">{chipArray()}</div>
    </>
  );
};

export default SearchBar;
