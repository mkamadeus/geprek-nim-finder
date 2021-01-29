import React from 'react';
import Student from './Student';
import { IStudent } from '@/models/Student';

interface Props {
  students: IStudent[];
}

const StudentList = (props: Props) => {
  const { students } = props;

  return (
    <>
      {students.map((s) => {
        return (
          <>
            <Student
              name={s.name}
              facultyId={s.facultyId}
              majorId={s.majorId}
            />
            <hr />
          </>
        );
      })}
    </>
  );
};

export default StudentList;
