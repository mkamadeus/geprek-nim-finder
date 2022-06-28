<script setup lang="ts"></script>

<template>
  <header pb-3>
    <div flex="~ col sm:row" justify-between items="center" space-y-2 text="teal-500 dark:teal-300">
      <div flex="~ col" justify="items-center sm:items-start">
        <h1 flex="~" font="semibold" text="xl center" items-center space-x-3>Pengaturan</h1>
        <p text="xs md:sm gray-400 dark:white" italic>
          Bagaimana sebaiknya geprek kalian disajikan?
        </p>
      </div>
      <NavigationBar />
    </div>
  </header>
  <!-- MAIN -->
  <main flex="~ col" justify-center text="sm white">
    <div flex justify-between>
      <div>
        <div text-base>Mode pencarian</div>
        <div>Gunakan online mode untuk hasil pencarian yang lebih baik.</div>
      </div>
    </div>
    <div>
      <div text-base>Batas angkatan</div>
      <div>Batasi tahun angkatan untuk mengurangi hasil pencarian.</div>
    </div>
    <div>
      <div text-base>Karakter filter</div>
      <div>Pilih karakter filter yang kalian inginkan.</div>
    </div>
    <!-- <SearchBar />
        <StudentList /> -->
  </main>
</template>
