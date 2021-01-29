import React from 'react';
import Chip from '@/components/Chip';
import SearchBar from '@/components/SearchBar';
import StudentList from '@/components/StudentList';
import SearchContextProvider from '@/context/SearchContext';

const App = () => {
  return (
    <SearchContextProvider>
      <div className="container mx-auto p-6 lg:px-64">
        <div className="pb-4">
          <div className="font-semibold text-2xl text-teal-400">
            Geprek NIM Finder
          </div>
          <div className="text-sm text-gray-400 italic">
            Geprek-ed by Ayam Geprek Freedom.
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SearchBar />
        </div>
        <div>
          <StudentList />
        </div>
      </div>
    </SearchContextProvider>
  );
};

export default App;
