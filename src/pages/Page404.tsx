import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Chicken from '@/svg/chicken.svg';

const Page404 = (props: RouteComponentProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 w-full">
      <div className="flex justify-center items-center container mx-auto min-h-screen">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 mb-4">
            <img src={Chicken} alt="geprek-icon" />
          </div>
          <div className="font-semibold text-4xl text-center text-teal-400">
            404
          </div>
          <div className="italic text-sm text-gray-500 dark:text-gray-100">
            Lhoo.. kayaknya salah geprek deh.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
