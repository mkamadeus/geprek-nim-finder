import React, { useState, useContext, useEffect, useCallback } from 'react';
import Student from './Student';
import studentData from '@/json/data.json';
import { SearchContext } from '@/context/SearchContext';
import { IStudent } from '@/models/Student';

const StudentList = () => {
  const { keywords, chips } = useContext(SearchContext);
  const [result, setResult] = useState<IStudent[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const filterData = useCallback(async () => {
    setLoading(true);
    const data = new Promise<IStudent[]>((resolve, _) => {
      const tmp = studentData.filter((s: IStudent) =>
        s.n.toLowerCase().includes(keywords),
      );
      resolve(tmp);
    });
    return data.then((students) => {
      setLoading(false);
      setResult(students);
    });
  }, [keywords, chips, setLoading, setResult]);

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
        {result.map((s) => {
          console.log(s);
          return (
            <>
              <Student name={s.n} facultyId={s.f} majorId={s.j} />
              <hr />
            </>
          );
        })}
      </>
    );
  }
};

export default StudentList;
