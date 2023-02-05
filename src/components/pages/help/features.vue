<template>
  <section mb-2>
    <h3 font-bold text-xl>Fitur Geprek</h3>
    <p my-2>
      Situs ini dibuat dengan tujuan untuk mencari nama dan NIM bagi mahasiswa ITB.
      Tenang saja, situs ini tidak mengumbar data pribadi dari mahasiswa ITB kok :-)
    </p>
		<p my-2>
      Untuk mencari mahasiswa ITB yang dimaksud, bisa dilakukan pencarian terhadap nama, NIM,
      fakultas, atau jurusan yang bersangkutan.
    </p>
		<p my-2>
      Berikut ini penjelasan terkait beberapa fitur pencarian yang bisa dilakukan.
      <ul pl-6 my-1>
        <li list-disc my-1>
          <div font-semibold text-lg>Pencarian lewat NIM</div>
          <p my-2>
            Tentunya, Anda bisa mencari lewat NIM yang diberikan.
            Kalau tidak bisa ini, bukan NIM finder namanya.
            Misalnya, <code bg="gray-100 dark:gray-700" rounded text="gray-700 dark:gray-100">13518035</code>.
          </p>
          <p my-2>
            Diterima juga masukan berupa NIM parsial.
            Masukan yang berupa angka dan bukan tahun akan digunakan untuk mencari NIM.
            Misalnya, <code bg="gray-100 dark:gray-700" rounded text="gray-700 dark:gray-100">13518</code>.
          </p>
        </li>
        <li list-disc my-1>
          <div font-semibold text-lg>Pencarian lewat nama</div>
          <p>
            Anda bisa melakukan pencarian lewat nama seseorang.
            Masukan nama dapat berupa potongan nama seseorang.
            Misalnya,
            <code bg="gray-100 dark:gray-700" rounded text="gray-700 dark:gray-100">muh</code>,
            <code bg="gray-100 dark:gray-700" rounded text="gray-700 dark:gray-100">muhammad</code>,
            <code bg="gray-100 dark:gray-700" rounded text="gray-700 dark:gray-100">mat kev</code>, dll.
          </p>
        </li>
        <li list-disc my-1>
          <div font-semibold text-lg>Pencarian lewat fakultas/jurusan dan tahun</div>
          <p>
            Anda dapat mencari seseorang atau beberapa orang berdasarkan tahun dan fakultas/jurusannya.
            Dengan memberikan masukan ini beserta pencarian nama, akan dihasilkan hasil yang merupakan subset dari kedua pencarian tersebut.
          </p>
        </li>
        <li list-disc my-1>
          <div font-semibold text-lg>Pencarian menggunakan chips / filter</div>
          <p>Anda bisa menambahkan filter lewat chips, demi kemudahan pencarian.</p>
        </li>
      </ul>
    </p>
		<p my-2>Terkait pencarian fakultas, saat ini bisa dilakukan lewat pencarian dari inisial suatu fakultas diikuti dengan tahunnya, seperti contoh <code bg="gray-100 dark:gray-700" rounded text="gray-700 dark:gray-100">MA18</code>.</p>
    <p my-2>Pencarian dengan chips bisa dilakukan dengan mengetikan dalam format <code bg="gray-100 dark:gray-700" rounded text="gray-700 dark:gray-100">?&lt;query anda&gt;?</code>.</p>
  </section>
</template>
