import React, { useContext, useMemo } from 'react';
import Switch from './Switch';
import Help from '~/svg/help.svg';
import { Link, navigate } from '@reach/router';
import { ThemeContext } from '~/context/ThemeContext';
import { InformationCircleOutline, TableOutline } from '@graywolfai/react-heroicons';

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
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center space-x-3 font-semibold text-xl md:text-xl text-teal-400 dark:text-teal-300">
            <h1 className="">Geprek ITB NIM Finder</h1>
            <div className="" onClick={() => navigate('/help')}>
              <InformationCircleOutline className="w-5 h-5 cursor-pointer transform hover:-translate-y-1 duration-150" />
            </div>
            <div className="" onClick={() => navigate('/sheets')}>
              <TableOutline className="w-5 h-5 cursor-pointer transform hover:-translate-y-1 duration-150" />
            </div>
          </div>
          <div className="text-xs md:text-sm text-gray-400 dark:text-white italic">
            Digeprek oleh {geprek}.
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Switch
            initialState={isDarkMode}
            onSwitchOn={() => {
              setDarkMode!(true);
            }}
            onSwitchOff={() => {
              setDarkMode!(false);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
