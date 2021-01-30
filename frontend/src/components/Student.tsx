import React from 'react';
import majorMap from '@/json/list_jurusan.json';
import facultyMap from '@/json/list_fakultas.json';

interface Props {
  name: string;
  facultyId: string;
  majorId: string;
}

const Student = (props: Props) => {
  const getMajor = () => {
    const majorCode: keyof typeof majorMap = props.majorId.slice(
      0,
      3,
    ) as keyof typeof majorMap;
    return majorMap[majorCode];
  };

  const getFaculty = () => {
    const facultyCode: keyof typeof facultyMap = props.facultyId.slice(
      0,
      3,
    ) as keyof typeof facultyMap;
    return facultyMap[facultyCode];
  };

  const major = getMajor();
  const faculty = getFaculty();

  return (
    <div className="flex justify-between items-center py-2">
      <div>
        <div className="text-sm font-medium  dark:text-teal-200">
          {props.name}
        </div>
        <div className="text-xs italic text-gray-500 dark:text-white select-none">
          {major || faculty}
        </div>
      </div>
      <div>
        {major ? (
          <div className={`text-xs text-gray-500  dark:text-white`}>
            {props.majorId}
          </div>
        ) : null}
        <div
          className={`text-xs text-gray-500  dark:text-white ${
            major ? 'select-none' : ''
          }`}
        >
          {props.facultyId}
        </div>
      </div>
    </div>
  );
};

export default Student;
