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
        .filter((s: IStudent) => s.n.toLowerCase().includes(keywords))
        .sort((x, y) => {
          if (x.n > y.n) return 1;
          if (x.n < y.n) return -1;
          return 0;
        });
      resolve(tmp);
    });
    return data.then((students) => {
      setLoading(false);
      setCount(10);
      setResult(students);
    });
  }, [keywords, chips, setLoading, setResult, setCount]);

  useEffect(() => {
    if (keywords.length >= 3) {
      filterData();
    }
  }, [filterData]);

  if (isLoading || keywords.length < 3) {
    return <div>loading</div>;
  } else {
    return (
      <>
        <div className="pb-4">
          {result.slice(0, Math.min(result.length, count)).map((s) => {
            // console.log(s);
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
                setCount(count + 10);
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
