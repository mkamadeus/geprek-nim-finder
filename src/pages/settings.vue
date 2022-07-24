<script setup lang="ts">
import Switch from '~/components/common/switch.vue';
import { useSettings } from '~/store/settings';
import Dropdown from '~/components/common/dropdown.vue';
import { MajorMode } from '~/models/MajorMode';

const settings = useSettings();
</script>

<template>
  <!-- HEADER -->
  <NavigationHeader title="Pengaturan" subtitle="Bagaimana sebaiknya geprek kalian disajikan?" />
  <!-- MAIN -->
  <main flex="~ col" justify-center space="y-6 lg:y-2" text="sm">
    <!-- <div flex="~ col lg:row" space="y-2" justify="lg:between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>Mode pencarian</div>
        <div text="xs lg:sm">Gunakan online mode untuk hasil pencarian yang lebih baik.</div>
      </div>
      <div>
        <Switch v-model="settings.onlineMode" />
      </div>
    </div> -->
    <!-- YEAR LIMIT SETTINGS -->
    <div flex="~ col lg:row" space="y-2" justify="lg:between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>Batas angkatan</div>
        <div text="xs lg:sm">Batasi tahun angkatan untuk mengurangi hasil pencarian.</div>
      </div>
      <div>
        <Dropdown
          :values="[2016, 2017, 2018, 2019]"
          :options="[2016, 2017, 2018, 2019]"
          v-model="settings.yearLimit"
        />
      </div>
    </div>
    <!-- MAJOR MODE SETTINGS -->
    <div flex="~ col lg:row" space="y-2" justify="lg:between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>Tampilan jurusan/fakultas</div>
        <div text="xs lg:sm">
          Tampilkan nama panjang, singkatan, atau keduanya untuk jurusan/fakultas.
        </div>
      </div>
      <div>
        <Dropdown
          :values="[MajorMode.LONG, MajorMode.SHORT, MajorMode.BOTH]"
          :options="['Panjang', 'Singkatan', 'Keduanya']"
          v-model="settings.majorMode"
        />
      </div>
    </div>
    <!-- SHOW YEAR SETTINGS -->
    <div flex="~ row" space="y-2" justify="between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>Tampilan tahun jurusan/fakultas</div>
        <div text="xs lg:sm">Tampilkan tahun untuk jurusan/fakultas.</div>
      </div>
      <div>
        <Switch v-model="settings.showYear" />
      </div>
    </div>
    <!-- <SearchBar />
        <StudentList /> -->
  </main>
</template>
