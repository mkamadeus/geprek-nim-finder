<script setup lang="ts">
import c from '~/json/codes.json';
import m from '~/json/majors.json';
const codes = c as {[key: string]: string}
const majors = m as {[key: string]: string}
</script>

<template>
  <header pb-3>
    <div
      flex="~ col sm:row"
      justify-between
      align-center
      space-y-2
      text="teal-500 dark:teal-300"
    >
      <div flex="~ col" justify="items-center sm:items-start">
        <h1 flex="~" font="semibold" text="xl center" items-center>
          <i-carbon-information w-5 h-5 mr-2 />
          <span>Bantuan</span>
        </h1>
        <p text="xs md:sm gray-400 dark:white" italic>Bagi kalian yang suka ayam geprek.</p>
      </div>
      <NavigationBar />
    </div>
  </header>
  <main flex="~ col" justify-center text="sm gray-700 dark:gray-100">
    <p my-2>
      Halo! Jika Anda berada di page ini, Anda tentu ingin mengetahui lebih banyak terkait situs
      ini.
    </p>
    <p my-2>
      Situs ini dibuat dengan tujuan untuk mencari nama dan NIM bagi mahasiswa ITB. Tenang saja,
      situs ini tidak mengumbar data pribadi dari mahasiswa ITB kok :-)
    </p>
    <p my-2>
      Untuk mencari mahasiswa ITB yang dimaksud, bisa dilakukan pencarian terhadap nama, NIM,
      fakultas, atau jurusan yang bersangkutan.
    </p>
    <p my-2>
      Berikut ini penjelasan terkait beberapa mode pencarian yang bisa dilakukan.
      <ul class="pl-6 my-1">
        <li class="list-disc my-1">
          <div class="font-semibold">Pencarian lewat NIM</div>
          <div>
            Tentu Anda bisa mencari lewat NIM. Kalau tidak bisa ini, bukan NIM finder namanya.
          </div>
        </li>
        <li class="list-disc my-1">
          <div class="font-semibold">Pencarian lewat nama</div>
          <div>Anda bisa melakukan pencarian lewat nama orangnya.</div>
        </li>
        <li class="list-disc my-1">
          <div class="font-semibold">Pencarian lewat kode fakultas/jurusan</div>
          <div>Anda dapat mencari orang berdasarkan tahun dan fakultas/jurusannya.</div>
        </li>
        <li class="list-disc my-1">
          <div class="font-semibold">Pencarian menggunakan chips / filter</div>
          <div>Anda bisa menambahkan filter lewat chips, demi kemudahan pencarian.</div>
        </li>
      </ul>
    </p>
    <p my-2>Terkait pencarian fakultas, saat ini bisa dilakukan lewat pencarian dari inisial suatu fakultas diikuti dengan tahunnya, seperti contoh <code>MA18</code>.</p>
    <p my-2>Pencarian dengan chips bisa dilakukan dengan mengetikan dalam format <code bg="gray-100 dark:gray-700" rounded text="gray-700 dark:gray-100">?&lt;query anda&gt;?</code>.</p>
    <p my-2>Berikut ini daftar dari kode yang valid, tidak peduli dengan kapitalisasinya. Bila dirasa ada kode yang kurang tepat silakan buat <i>issue</i> pada GitHub atau hubungi pembuat :)
      <div flex="~ col" space="y-1" my-1>
        <div class="pr-2" v-for="(k, v) of codes">
          <code bg="gray-100 dark:gray-700" rounded text="gray-700 dark:gray-100" p="0.5">{{k}}</code> untuk <b>{{majors[k]}}</b> (<code bg="gray-100 dark:gray-700" rounded text="gray-700 dark:gray-100" p="0.5">{{v}}</code>)
        </div>
      </div>
    </p>
  </main>
</template>