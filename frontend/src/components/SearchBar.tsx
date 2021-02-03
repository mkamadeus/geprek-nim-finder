import React, { useContext } from 'react';
import { isTag, tokenizeTag } from '@/utils/tagUtils';
import Chip from './Chip';
import { SearchContext } from '@/context/SearchContext';

interface Props {}

const SearchBar: React.FC<Props> = (props: Props) => {
  const { keywords, setKeywords, chips, setChips } = useContext(SearchContext);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    let splittedInput = tokenizeTag(inputValue);

    // Check if tag is inputted
    if (inputValue[inputValue.length - 1] === '?') {
      const phrase = splittedInput[splittedInput.length - 1];
      if (isTag(phrase)) {
        const tagValue = phrase.slice(1, phrase.length - 1);
        setChips(chips.length === 0 ? tagValue : chips + `,${tagValue}`);
      }
      inputValue = splittedInput
        .filter((phrase) => {
          return !isTag(phrase);
        })
        .join(' ');
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
      <div className="flex rounded-full shadow p-2 mb-1 w-full border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-700 active:border-teal-200">
        <input
          value={keywords}
          onChange={onSearch}
          className="outline-none w-full bg-transparent dark:text-white"
          role="textbox"
        />
      </div>
      <div className="flex overflow-hidden md:flex-wrap w-full -mx-1 p-1">
        {chipArray()}
      </div>
    </>
  );
};

export default SearchBar;
