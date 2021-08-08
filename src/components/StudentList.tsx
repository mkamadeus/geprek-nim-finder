import React from 'react';
import { useSearch } from '@/hooks/useSearch';
import Student from './Student';

const StudentList = () => {
  const { keywords, chips, result, count, isLoading, loadMore } = useSearch();

  if (isLoading) {
    return <div className="text-xs text-center italic text-gray-500">Loading...</div>;
  } else if (keywords.length < 3 && chips.length === 0) {
    return (
      <div className="text-xs text-center italic text-gray-500">
        Hasil pencarian akan keluar di sini.
      </div>
    );
  } else {
    return (
      <>
        <div className="text-xs text-center italic text-gray-500">
          {count === 0
            ? 'Tidak ditemukan apa-apa. Mungkin salah geprek.'
            : `Menunjukan ${count} dari ${result.length} hasil.`}
        </div>
        <div className="pb-4">
          {result.slice(0, count).map((s) => {
            return (
              <div key={s[1]}>
                <Student name={s[0]} facultyId={s[1]} majorId={s[2]} />
                <hr />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center w-full">
          {result.length !== count ? (
            <button
              className="border border-teal-500 dark:border-gray-700 rounded text-teal-500 dark:text-gray-100 px-4 py-2 outline-none bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150"
              onClick={loadMore}
            >
              Load more...
            </button>
          ) : null}
        </div>
      </>
    );
  }
};

export default StudentList;
