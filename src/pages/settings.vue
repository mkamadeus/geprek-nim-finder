<script setup lang="ts">
import Switch from '~/components/common/switch.vue';
import { useSettings } from '~/store/settings';
import Dropdown from '~/components/common/dropdown.vue';

const settings = useSettings();
</script>

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
  <main flex="~ col" justify-center space-y-2 text="sm">
    <pre>
      {{ settings }}
    </pre>
    <div flex justify-between items-center>
      <div>
        <div text-base>Mode pencarian</div>
        <div>Gunakan online mode untuk hasil pencarian yang lebih baik.</div>
      </div>
      <div>
        <Switch v-model="settings.onlineMode" />
      </div>
    </div>
    <div flex justify-between items-center>
      <div>
        <div text-base>Batas angkatan</div>
        <div>Batasi tahun angkatan untuk mengurangi hasil pencarian.</div>
      </div>
      <div>
        <Dropdown :options="[2016, 2017, 2018, 2019]" v-model="settings.yearLimit" />
      </div>
    </div>
    <div>
      <div text-base>Karakter filter</div>
      <div>Pilih karakter filter yang kalian inginkan.</div>
    </div>
    <!-- <SearchBar />
        <StudentList /> -->
  </main>
</template>
