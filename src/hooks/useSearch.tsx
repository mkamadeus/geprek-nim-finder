import { useCallback, useContext, useMemo, useState } from 'react';
import { useAsync, useLocalStorage } from 'react-use';
import { SearchContext } from '@/context/SearchContext';
import Axios from 'axios';
import {
  tokenizeTag,
  parseKeywordsWithNumber,
  parseKeywordsWithoutNumber,
  checkMatch,
} from '@/utils/tagUtils';

export const useSearch = () => {
  const { keywords, chips } = useContext(SearchContext);
  const [result, setResult] = useState<string[][]>([]);
  const [count, setCount] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  const [studentData, setStudentData] = useLocalStorage<string[][]>(
    'studentData',
  );

  const verifyStudentData = useCallback(async () => {
    if (!studentData) {
      await Axios.get(
        'https://cdn.jsdelivr.net/gh/mkamadeus/nim-finder-v2@latest/src/json/data_13_20.json',
      ).then((result) => {
        setStudentData(result.data);
      });
    }
  }, []);

  const loadMore = () => {
    setCount(count + (result.length - count < 10 ? result.length - count : 10));
  };

  const keywordsWithoutNumber = useMemo<string[]>(() => {
    return parseKeywordsWithoutNumber(tokenizeTag(keywords));
  }, [keywords]);

  const keywordsWithNumber = useMemo<string[]>(() => {
    return parseKeywordsWithNumber(tokenizeTag(keywords));
  }, [keywords]);

  const chipsWithoutNumber = useMemo<string[]>(() => {
    return parseKeywordsWithoutNumber(chips.split(','));
  }, [chips]);

  const chipsWithNumber = useMemo<string[]>(() => {
    return parseKeywordsWithNumber(chips.split(','));
  }, [chips]);

  // Data filter logic
  const filterData = async () => {
    const data = new Promise<string[][]>((resolve, _) => {
      const chipFiltered =
        chips.length !== 0
          ? studentData!.filter((s: string[]) => {
              return checkMatch(s, chipsWithoutNumber, chipsWithNumber);
            })
          : studentData;
      const queryFiltered =
        keywordsWithoutNumber.length !== 0 || keywordsWithNumber.length !== 0
          ? chipFiltered!.filter((s: string[]) => {
              return checkMatch(s, keywordsWithoutNumber, keywordsWithNumber);
            })
          : chipFiltered;
      const sortedAndFiltered = queryFiltered!.sort((x, y) => {
        let xrank = 0,
          yrank = 0;
        const xsplit = x[0].split(' ');
        const ysplit = y[0].split(' ');
        for (const keyword of keywordsWithoutNumber) {
          let mult = 1;
          if (keyword.length < 3) continue;

          for (const namePhrase of xsplit) {
            if (namePhrase.toLowerCase().startsWith(keyword.toLowerCase()))
              xrank += 3 * mult;
            if (namePhrase.toLowerCase().endsWith(keyword.toLowerCase()))
              xrank += 2 * mult;
            mult *= 0.9;
          }
          for (const namePhrase of ysplit) {
            if (namePhrase.toLowerCase().startsWith(keyword.toLowerCase()))
              yrank += 3 * mult;
            if (namePhrase.toLowerCase().endsWith(keyword.toLowerCase()))
              yrank += 2 * mult;
            mult *= 0.9;
          }
        }

        for (const keyword of keywordsWithNumber) {
          if (keyword.length < 3) continue;

          if (x[1].includes(keyword) || (x[2] && x[2].includes(keyword)))
            xrank += 5;
          if (y[1].includes(keyword) || (y[2] && y[2].includes(keyword)))
            yrank += 5;
        }

        return yrank - xrank;
      });

      resolve(sortedAndFiltered);
    });
    return data;
  };

  useAsync(async () => {
    await verifyStudentData();

    if (keywords.length >= 3 || chips.length !== 0) {
      const result = await filterData();
      setLoading(false);
      setResult(result);
      setCount(result.length < 10 ? result.length : 10);
      return result;
    }
  }, [keywords, chips]);

  return { result, count, isLoading, keywords, chips, loadMore };
};
