import React, { useState, useContext, useEffect, useCallback } from 'react';
import Student from './Student';
import studentData from '@/json/data.json';
import { SearchContext } from '@/context/SearchContext';
import { IStudent } from '@/models/Student';

const StudentList = () => {
  const { keywords, chips } = useContext(SearchContext);
  const [result, setResult] = useState<IStudent[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  const filterData = useCallback(async () => {
    setLoading(true);
    const data = new Promise<IStudent[]>((resolve, _) => {
      const tmp = studentData
        .filter((s: IStudent) => {
          const chipArray = chips.split(',');
          for (let i = 0; i < chipArray.length; i++) {
            if (
              s.n.toLowerCase().includes(chipArray[i]) ||
              s.f.includes(chipArray[i]) ||
              s.j.includes(chipArray[i])
            ) {
              return true;
            }
          }
        })
        .filter(
          (s: IStudent) =>
            s.n.toLowerCase().includes(keywords) ||
            s.f.includes(keywords) ||
            s.j.includes(keywords),
        )
        .sort((x, y) => {
          if (x.n > y.n) return 1;
          if (x.n < y.n) return -1;
          return 0;
        });
      resolve(tmp);
    });
    return data.then((students) => {
      setLoading(false);
      setResult(students);
    });
  }, [keywords, chips, setLoading, setResult, setCount]);

  // Filter data if keywords length gte 3
  useEffect(() => {
    if (keywords.length >= 3 || chips.length !== 0) {
      filterData();
      setCount(result.length < 10 ? result.length : 10);
    }
  }, [keywords, chips, filterData]);

  if (isLoading) {
    return (
      <div className="text-xs text-center italic text-gray-500">Loading...</div>
    );
  } else if (keywords.length < 3 && chips.length === 0) {
    return (
      <div className="text-xs text-center italic text-gray-500">
        Hasil pencarian akan keluar di sini.
      </div>
    );
  } else {
    return (
      <>
        <div className="text-xs text-center italic text-gray-500">
          Menunjukan {count} dari {result.length} hasil.
        </div>
        <div className="pb-4">
          {result.slice(0, count).map((s) => {
            return (
              <>
                <Student name={s.n} facultyId={s.f} majorId={s.j} />
                <hr />
              </>
            );
          })}
        </div>
        <div className="flex justify-center w-full">
          {result.length != count ? (
            <button
              className="border border-teal-500 rounded text-teal-500 px-2 p-1"
              onClick={() => {
                setCount(
                  count +
                    (result.length - count < 10 ? result.length - count : 10),
                );
              }}
            >
              Load more...
            </button>
          ) : null}
        </div>
      </>
    );
  }
};

export default StudentList;
