import { TableOutline } from '@graywolfai/react-heroicons';
import { RouteComponentProps } from '@reach/router';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SheetsFunction = `
function itbStudent(nim) {
  const response = UrlFetchApp.fetch("https://cdn.jsdelivr.net/gh/mkamadeus/nim-finder-v2@main/src/json/${localStorage.getItem(
    'version',
  )}.json", {'method' : 'get',})
  const data = JSON.parse(response.getContentText());
  const filtered = data.filter((v) => {
  return v[1] == nim || v[2] == nim
  })
  return filtered[0][0]
}
`;

const Sheets = (props: RouteComponentProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto p-6 lg:px-64">
        <div className="pb-3">
          <div>
            <div className="font-semibold text-xl text-teal-400 dark:text-teal-300 inline-flex items-center">
              <TableOutline className="w-5 h-5 mr-2" />
              Integrasi Google Sheets
            </div>
            <div className="text-xs text-gray-400 dark:text-white italic">
              Bagi kalian yang suka mengolah data.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-sm text-gray-700 dark:text-gray-100">
          <div className="my-2">
            Jika kalian tertarik untuk menggunakan pencarian ini dalam Google Sheets kalian, kalian
            bisa memberikan script ini lewat menu <code className="">Tools &gt; Script Editor</code>
            :
          </div>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {SheetsFunction}
          </SyntaxHighlighter>
          <div className="my-2">
            Cara menggunakannya adalah dengan menggunakan formula{' '}
            <code>&#61;itbStudent&#40;nim&#41;</code>. Sementara ini hanya bisa untuk mendapatkan
            satu orang teratas dari query kalian.
          </div>
          <div className="my-2">Semoga bermanfaat untuk keperluan administrasi kalian!</div>
        </div>
      </div>
    </div>
  );
};

export default Sheets;
