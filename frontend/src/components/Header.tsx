import React, { useEffect, useMemo } from 'react';
import { useLocalStorage } from 'react-use';
import Switch from './Switch';
import Help from '@/svg/help.svg';
import { Link } from '@reach/router';

interface Props {}

const geprekList = [
  'Ayam Geprek Freedom',
  'Krisbar Gemesya',
  'Krisbar Disitu',
  'Ayam Geprek Bakso',
  'I Am Geprek Bakso',
];

const Header: React.FC = () => {
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', false);

  const geprek = useMemo<string>(() => {
    return geprekList[Math.floor(Math.random() * geprekList.length)];
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.getElementsByTagName('html')[0].classList.add('dark');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center font-semibold text-xl text-teal-400 dark:text-teal-300">
            <div className="pr-4">Geprek NIM Finder</div>
            <div className="w-3 h-3">
              <Link to="/help">
                <img
                  src={Help}
                  className="w-full h-full"
                  style={{
                    filter:
                      'invert(100%) sepia(57%) saturate(667%) hue-rotate(280deg) brightness(120%) contrast(87%)',
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="text-xs text-gray-400 dark:text-white italic">
            Digeprek oleh {geprek}.
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Switch
            initialState={isDarkMode}
            onSwitchOn={() => {
              setDarkMode(true);
            }}
            onSwitchOff={() => {
              setDarkMode(false);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
