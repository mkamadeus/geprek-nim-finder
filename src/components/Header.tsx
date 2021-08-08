import React, { useContext, useMemo } from 'react';
import Switch from './Switch';
import Help from '~/svg/help.svg';
import { Link } from '@reach/router';
import { ThemeContext } from '~/context/ThemeContext';

const geprekList = [
  'Ayam Geprek Freedom',
  'Krisbar Gemesya',
  'Krisbar Disitu',
  'Ayam Geprek Bakso',
  'I Am Geprek Bakso',
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
          <div className="flex items-center font-semibold text-xl md:text-xl text-teal-400 dark:text-teal-300">
            <h1 className="pr-4">Geprek ITB NIM Finder</h1>
            <div className="w-3 h-3">
              <Link to="/help">
                <img
                  src={'/svg/help.svg'}
                  className="w-full h-full"
                  style={{
                    filter:
                      'invert(100%) sepia(57%) saturate(667%) hue-rotate(280deg) brightness(120%) contrast(87%)',
                  }}
                  alt="help-button"
                />
              </Link>
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
