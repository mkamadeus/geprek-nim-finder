import React from 'react';
import SearchBar from '@/components/SearchBar';
import StudentList from '@/components/StudentList';
import SearchContextProvider from '@/context/SearchContext';
import Header from '@/components/Header';
import { RouteComponentProps } from '@reach/router';

const Home = (_: RouteComponentProps) => {
  return (
    <SearchContextProvider>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto p-6 lg:px-64">
          <div className="pb-3">
            <Header />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-2">
              <SearchBar />
            </div>
            <div className="flex-1">
              <StudentList />
            </div>
          </div>
        </div>
      </div>
    </SearchContextProvider>
  );
};

export default Home;