import React from 'react';
import majorMap from '@/json/list_jurusan.json';

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

  return (
    <div className="flex justify-between items-center py-2">
      <div>
        <div className="text-sm font-medium">{props.name}</div>
        <div className="text-xs italic text-gray-500">{getMajor()}</div>
      </div>
      <div>
        <div className="text-xs text-gray-500">{props.majorId}</div>
        <div className="text-xs text-gray-500">{props.facultyId}</div>
      </div>
    </div>
  );
};

export default Student;
