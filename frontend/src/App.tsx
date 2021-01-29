import React from 'react';
import Chip from '@/components/Chip';
import SearchBar from '@/components/SearchBar';
import { useChip } from '@/hooks/useChip';
import StudentList from '@/components/StudentList';

const App = () => {
  return (
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
        <StudentList
          students={[
            {
              name: 'Matthew Kevin Amadeus',
              majorId: '13518035',
              facultyId: '16518406',
            },
            {
              name: 'Matthew Kevin Amadeus',
              majorId: '13518035',
              facultyId: '16518406',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
