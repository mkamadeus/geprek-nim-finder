import { ArchiveOutline } from '@graywolfai/react-heroicons';
import { RouteComponentProps } from '@reach/router';
import React from 'react';

const Archive: React.FC<RouteComponentProps> = () => {
  return (
    <div className="bg-white dark:bg-gray-900 w-full">
      <div className="flex justify-center items-center container mx-auto min-h-screen">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 text-gray-500">
            <ArchiveOutline className="w-20 h-20" />
          </div>
          <div className="font-light text-4xl text-center text-gray-500 tracking-widest mb-4">
            ARCHIVE
          </div>
          <div className="italic text-sm text-gray-500 dark:text-gray-100">Coming soon.</div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
