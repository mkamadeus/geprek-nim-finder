import { useChip } from '@/hooks/useChip';
import React, { useRef, useState } from 'react';
import { isTag } from '@/utils/isTag';
import Chip from './Chip';

interface Props {}

const SearchBar = (props: Props) => {
  const [query, setQuery] = useState<string>('');
  const { chipArray, addChip, removeChip } = useChip();

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    if (inputValue[inputValue.length - 1] == ' ') {
      let splittedInput = inputValue.split(' ');
      if (isTag(splittedInput[splittedInput.length - 2])) {
        inputValue = splittedInput.slice(0, splittedInput.length - 2).join(' ');
        addChip(splittedInput[splittedInput.length - 2].slice(1));
      }
    }
    setQuery(inputValue);
  };

  return (
    <>
      <div className="flex rounded-full shadow p-2 mb-2 w-full border-2 border-teal-200 overflow-x-scroll">
        <input
          value={query}
          onChange={onSearch}
          className="outline-none w-full"
          role="textbox"
        />
      </div>
      <div className="flex flex-wrap w-full -mx-1">
        {chipArray.map((chip, index) => {
          return (
            <div className="px-1">
              <Chip name={chip.name} onClose={() => removeChip(index)} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchBar;
