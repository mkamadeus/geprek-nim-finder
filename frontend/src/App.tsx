import React from 'react';
import Chip from '@/components/Chip';
import SearchBar from '@/components/SearchBar';
import StudentList from '@/components/StudentList';
import SearchContextProvider from '@/context/SearchContext';
import Switch from '@/components/Switch';

const App = () => {
  return (
    <SearchContextProvider>
      <div className="container mx-auto p-6 lg:px-64 bg-white dark:bg-violet-900 min-h-screen">
        <div className="pb-4">
          <div className="font-semibold text-2xl text-teal-400 dark:text-teal-300">
            Geprek NIM Finder
          </div>
          <div className="text-sm text-gray-400 dark:text-white italic">
            Geprek-ed by Ayam Geprek Freedom.
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-2">
            <SearchBar />
          </div>
          <div className="flex-1">
            <StudentList />
          </div>
          <div className="absolute bottom-2 right-2">
            <Switch
              onToggle={() => {
                if (!localStorage.getItem('theme')) {
                  document
                    .getElementsByTagName('html')[0]
                    .classList.add('dark');
                  localStorage.setItem('theme', 'dark');
                } else {
                  document
                    .getElementsByTagName('html')[0]
                    .classList.remove('dark');
                  localStorage.removeItem('theme');
                }
              }}
            />
            {/* <button
            }
          >
            toggle darkmode
          </button> */}
          </div>
        </div>
      </div>
    </SearchContextProvider>
  );
};

export default App;
