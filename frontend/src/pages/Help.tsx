import { RouteComponentProps } from '@reach/router';
import React from 'react';
import facultyData from '@/json/kode_fakultas.json';
import majorData from '@/json/kode_jurusan.json';

interface Props {}

const searchModes = [
  {
    name: 'Pencarian lewat NIM',
    description:
      'Tentu Anda bisa mencari lewat NIM. Kalau tidak bisa ini, bukan NIM finder namanya.',
  },
  {
    name: 'Pencarian lewat nama',
    description: 'Anda bisa melakukan pencarian lewat nama orangnya.',
  },
  {
    name: 'Pencarian lewat kode fakultas/jurusan',
    description:
      'Anda dapat mencari orang berdasarkan tahun dan fakultas/jurusannya.',
  },
  {
    name: 'Pencarian menggunakan chips / filter',
    description:
      'Anda bisa menambahkan filter lewat chips, demi kemudahan pencarian.',
  },
];

const Help = (props: RouteComponentProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto p-6 lg:px-64">
        <div className="pb-3">
          <div>
            <div className="font-semibold text-xl text-teal-400 dark:text-teal-300">
              Bantuan
            </div>
            <div className="text-xs text-gray-400 dark:text-white italic">
              Bagi kalian yang suka ayam geprek.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-sm text-gray-700 dark:text-gray-100">
          <div className="my-2">
            Halo! Jika Anda berada di page ini, Anda tentu ingin mengetahui
            lebih banyak terkait situs ini.
          </div>
          <div className="my-2">
            Situs ini dibuat dengan tujuan untuk mencari nama dan NIM bagi
            mahasiswa ITB. Tenang saja, situs ini tidak mengumbar data pribadi
            dari mahasiswa ITB kok :-)
          </div>
          <div className="my-2">
            Untuk mencari mahasiswa ITB yang dimaksud, bisa dilakukan pencarian
            terhadap nama, NIM, fakultas, atau jurusan yang bersangkutan.
          </div>
          <div className="my-2">
            Berikut ini penjelasan terkait beberapa mode pencarian yang bisa
            dilakukan.
            <ul className="pl-6 my-1">
              {searchModes.map(({ name, description }) => {
                return (
                  <li className="list-disc my-1">
                    <div className="font-semibold">{name}</div>
                    <div>{description}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="my-2">
            Terkait pencarian fakultas, saat ini bisa dilakukan lewat pencarian
            dari inisial suatu fakultas diikuti dengan tahunnya, seperti contoh{' '}
            <code className="bg-teal-200 text-gray-700">
              {
                Object.keys(majorData)[
                  Math.floor(Math.random() * Object.keys(majorData).length)
                ]
              }
              18
            </code>
            .
          </div>
          <div className="my-2">
            Pencarian dengan chips bisa dilakukan dengan mengetikan dalam format{' '}
            <code className="bg-teal-200 text-gray-700">
              ?&lt;query anda&gt;?
            </code>
            .
          </div>
          <div className="my-2">
            Berikut ini daftar dari kode yang valid, tidak peduli dengan
            kapitalisasinya:
            <ul className="pl-6 my-1">
              {(() => {
                const result: JSX.Element[] = [];
                for (const key of Object.keys(facultyData)) {
                  const castedKey = key as keyof typeof facultyData;
                  result.push(
                    <li className="list-disc">
                      <code className="bg-teal-200 text-gray-700">
                        {castedKey}
                      </code>{' '}
                      untuk {facultyData[castedKey]}
                    </li>,
                  );
                }
                for (const key of Object.keys(majorData)) {
                  const castedKey = key as keyof typeof majorData;
                  result.push(
                    <li className="list-disc">
                      <code className="bg-teal-200 text-gray-700">
                        {castedKey}
                      </code>{' '}
                      untuk {majorData[castedKey]}
                    </li>,
                  );
                }
                return result;
              })()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
