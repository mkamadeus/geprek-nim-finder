import { useContext, useMemo, useState } from 'react';
import { useAsync } from 'react-use';
import { hasNumber, isNumber } from '../utils/numberUtils';
import facultyCode from '@/json/kode_fakultas.json';
import majorCode from '@/json/kode_jurusan.json';
import studentData from '@/json/data_13_20.json';
import { SearchContext } from '@/context/SearchContext';
import { IStudent } from '@/models/Student';
import { hasTag, tokenizeTag } from '@/utils/tagUtils';

export const useSearch = () => {
  const { keywords, chips } = useContext(SearchContext);
  const [result, setResult] = useState<string[][]>([]);
  const [count, setCount] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  const loadMore = () => {
    setCount(count + (result.length - count < 10 ? result.length - count : 10));
  };

  const keywordsWithoutNumber = useMemo<string[]>(() => {
    const splittedKeywords = tokenizeTag(keywords);
    const result = [];
    for (const keyword of splittedKeywords) {
      if (hasTag(keyword)) {
        continue;
      }

      if (!hasNumber(keyword)) {
        result.push(keyword);
      }
    }
    return result;
  }, [keywords]);

  // Generate keywords that has number
  const keywordsWithNumber = useMemo<string[]>(() => {
    const splittedKeywords = tokenizeTag(keywords);
    const result = [];
    for (const keyword of splittedKeywords) {
      if (hasTag(keyword)) {
        continue;
      }

      if (isNumber(keyword)) {
        result.push(keyword);
      } else if (hasNumber(keyword)) {
        for (const key of Object.keys(facultyCode)) {
          const replacedKeyword = keyword.replace(
            key.toLowerCase(),
            facultyCode[key as keyof typeof facultyCode],
          );
          if (keyword !== replacedKeyword) {
            result.push(replacedKeyword);
          }
        }
        for (const key of Object.keys(majorCode)) {
          const replacedKeyword = keyword.replace(
            key.toLowerCase(),
            majorCode[key as keyof typeof majorCode],
          );
          if (keyword !== replacedKeyword) {
            result.push(replacedKeyword);
          }
        }
      }
    }
    return result;
  }, [keywords]);

  // Data filter logic
  const filterData = async () => {
    const data = new Promise<string[][]>((resolve, _) => {
      const tmp = studentData
        .filter((s: string[]) => {
          const chipArray = chips.split(',');
          for (let i = 0; i < chipArray.length; i++) {
            if (
              s[0].toLowerCase().includes(chipArray[i]) ||
              s[1].includes(chipArray[i]) ||
              s[2]!.includes(chipArray[i])
            ) {
              return true;
            }
          }
        })
        .filter((s: string[]) => {
          // First check -- word check
          for (const keyword of keywordsWithoutNumber) {
            if (keyword.length < 2) continue;

            const status = s[0].toLowerCase().includes(keyword.toLowerCase());
            if (status) {
              return status;
            }
          }

          // Second check -- number check
          for (const keyword of keywordsWithNumber) {
            if (keyword.length < 2) continue;

            const status =
              s[1].startsWith(keyword) || s[2]!.startsWith(keyword);
            if (status) {
              return status;
            }
          }

          return false;
        })
        .sort((x, y) => {
          if (x[0] > y[0]) return 1;
          if (x[0] < y[0]) return -1;
          return 0;
        });
      resolve(tmp);
    });
    return data;
  };

  useAsync(async () => {
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