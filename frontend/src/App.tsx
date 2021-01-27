import React from 'react';
import Chip from '@/components/Chip';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center font-semibold text-4xl">
        Geprek NIM Finder
      </div>
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div>
        <div className="p-1">
          <Chip name="FTSL'18" />
        </div>
        <div className="p-1">
          <Chip name="STEI'18" />
        </div>
        <div className="p-1">
          <Chip name="135" />
        </div>
        <div className="p-1">
          <Chip name="FTSL'18" />
        </div>
        <div className="p-1">
          <Chip name="STEI'18" />
        </div>
        <div className="p-1">
          <Chip name="FSRD'19" />
        </div>
        <div className="p-1">
          <Chip name="FTSL'18" />
        </div>
        <div className="p-1">
          <Chip name="STEI'18" />
        </div>
        <div className="p-1">
          <Chip name="FSRD'19" />
        </div>
      </div>
      <div>list</div>
    </div>
  );
};

export default App;
