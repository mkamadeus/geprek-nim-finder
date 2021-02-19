import React, { useRef } from 'react';
import majorMap from '@/json/list_jurusan.json';
import facultyMap from '@/json/list_fakultas.json';

interface Props {
  name: string;
  facultyId: string;
  majorId: string;
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const Student = (props: Props) => {
  const nameRef = useRef<HTMLDivElement | null>(null);
  const majorIdRef = useRef<HTMLDivElement | null>(null);
  const facultyIdRef = useRef<HTMLDivElement | null>(null);

  const getMajor = () => {
    if (props.majorId) {
      const majorCode: keyof typeof majorMap = props.majorId.slice(
        0,
        3,
      ) as keyof typeof majorMap;
      return majorMap[majorCode];
    }
    return undefined;
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
        <div
          className="text-sm md:text-base font-medium dark:text-gray-200 cursor-pointer hover:animate-pulse"
          ref={nameRef}
          onClick={() => {
            copyToClipboard(nameRef.current?.innerHTML!);
          }}
        >
          {props.name}
        </div>
        <div className="text-xs md:text-sm italic text-gray-500 dark:text-gray-300 select-none">
          {major || faculty}
        </div>
      </div>
      <div>
        {major ? (
          <div
            className={`text-xs md:text-sm text-gray-500  dark:text-gray-300 cursor-pointer hover:animate-pulse`}
            ref={majorIdRef}
            onClick={() => {
              copyToClipboard(majorIdRef.current?.innerHTML!);
            }}
          >
            {props.majorId}
          </div>
        ) : null}
        <div
          className={`text-xs md:text-sm text-gray-500  dark:text-gray-300 ${
            major ? 'select-none' : ''
          } cursor-pointer hover:animate-pulse`}
          ref={facultyIdRef}
          onClick={() => {
            copyToClipboard(facultyIdRef.current?.innerHTML!);
          }}
        >
          {props.facultyId}
        </div>
      </div>
    </div>
  );
};

export default Student;
