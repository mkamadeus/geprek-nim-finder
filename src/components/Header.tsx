import React, { useContext, useMemo } from 'react';
import { navigate } from '@reach/router';
import { ThemeContext } from '~/context/ThemeContext';
import {
  InformationCircleOutline,
  TableOutline,
  SunOutline,
  MoonOutline,
  ArchiveOutline,
} from '@graywolfai/react-heroicons';

const geprekList = [
  'Ayam Geprek Freedom',
  'Krisbar Gemesya',
  'Krisbar Disitu',
  'Ayam Geprek Bakso',
  'I Am Geprek Bakso',
  'Ayam Geprek Kepribon',
];

const Header: React.FC = () => {
  const geprek = useMemo<string>(() => {
    return geprekList[Math.floor(Math.random() * geprekList.length)];
  }, []);

  const { isDarkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="flex flex-col space-y-2 sm:flex-row justify-between items-center text-teal-400 dark:text-teal-300">
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center space-x-3 font-semibold text-xl md:text-xl">
            <h1 className="text-center">Geprek ITB NIM Finder</h1>
          </div>
          <div className="text-xs text-center md:text-sm text-gray-400 dark:text-white italic">
            Digeprek oleh {geprek}.
          </div>
        </div>
        <div className="flex items-end space-x-2">
          <div className="" onClick={() => navigate('/help')}>
            <InformationCircleOutline className="w-5 h-5 cursor-pointer transform hover:-translate-y-1 duration-150" />
          </div>
          <div className="" onClick={() => navigate('/sheets')}>
            <TableOutline className="w-5 h-5 cursor-pointer transform hover:-translate-y-1 duration-150" />
          </div>
          <div
            className=""
            onClick={() => {
              setDarkMode!(!isDarkMode);
            }}
          >
            {isDarkMode ? (
              <MoonOutline className="w-5 h-5 cursor-pointer transform hover:-translate-y-1 duration-150" />
            ) : (
              <SunOutline className="w-5 h-5 cursor-pointer transform hover:-translate-y-1 duration-150" />
            )}
          </div>
          <div
            className=""
            onClick={() => {
              window.location.href = 'https://github.com/mkamadeus/nim-finder-v2';
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 cursor-pointer transform hover:-translate-y-1 duration-150"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <div className="" onClick={() => navigate('/archive')}>
            <ArchiveOutline className="w-5 h-5 cursor-pointer transform hover:-translate-y-1 duration-150" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
