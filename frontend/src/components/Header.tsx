import React from 'react';
import Switch from './Switch';

interface Props {}

const geprekList = [
  'Ayam Geprek Freedom',
  'Krisbar Gemesya',
  'Krisbar Disitu',
  'Ayam Geprek Bakso',
  'I Am Geprek Bakso',
];

const Header: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="font-semibold text-xl text-teal-400 dark:text-teal-300">
            Geprek NIM Finder
          </div>
          <div className="text-xs text-gray-400 dark:text-white italic">
            Digeprek oleh{' '}
            {geprekList[Math.floor(Math.random() * geprekList.length)]}.
          </div>
        </div>
        <div>
          <Switch
            onToggle={() => {
              if (!localStorage.getItem('theme')) {
                document.getElementsByTagName('html')[0].classList.add('dark');
                localStorage.setItem('theme', 'dark');
              } else {
                document
                  .getElementsByTagName('html')[0]
                  .classList.remove('dark');
                localStorage.removeItem('theme');
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
