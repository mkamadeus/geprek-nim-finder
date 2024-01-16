<script setup lang="ts">
const settings = useSettings()
// const { t, locale } = useI18n();
</script>

<template>
  <div flex="~ col" space-y-4>
    <!-- LANGUAGE SETTINGS -->
    <div flex="~ col lg:row" space="y-2" justify="lg:between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>
          Pengaturan
        </div>
        <div text="xs lg:sm">
          Gepreknya level berapa?
        </div>
      </div>
      <!-- <div>
        <Dropdown :values="['id', 'en', 'cn']" :options="['🇮🇩 ID', '🇺🇸 EN', '🇨🇳 CN']" v-model="locale" />
      </div> -->
    </div>
    <!-- YEAR LIMIT SETTINGS -->
    <div flex="~ col lg:row" space="y-2" justify="lg:between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>
          Batas angkatan
        </div>
        <div text="xs lg:sm">
          Batasi tahun angkatan untuk mengurangi hasil pencarian.
        </div>
      </div>
      <div>
        <Dropdown v-model="settings.yearLimit" :values="[2016, 2017, 2018, 2019]" :options="[2016, 2017, 2018, 2019]" />
      </div>
    </div>
    <!-- MAJOR MODE SETTINGS -->
    <div flex="~ col lg:row" space="y-2" justify="lg:between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>
          Tampilan jurusan/fakultas
        </div>
        <div text="xs lg:sm">
          Tampilkan nama panjang, singkatan, atau keduanya untuk jurusan/fakultas.
        </div>
      </div>
      <!-- <div>
        <Dropdown :values="[MajorMode.LONG, MajorMode.SHORT, MajorMode.BOTH]"
          :options="['Panjang', 'Singkatan', 'Keduanya']" v-model="settings.majorMode" />
      </div> -->
    </div>
    <!-- SHOW YEAR SETTINGS -->
    <div flex="~ row" space="y-2" justify="between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>
          {{ t('settings.yearDisplay.title') }}
        </div>
        <div text="xs lg:sm">
          {{ t('settings.yearDisplay.subtitle') }}
        </div>
      </div>
      <div>
        <Switch v-model="settings.showYear" />
      </div>
    </div>
    <!-- SBM SETTINGS -->
    <div flex="~ row" space="y-2" justify="between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>
          {{ t('settings.sbmYear.title') }}
        </div>
        <div text="xs lg:sm">
          {{ t('settings.sbmYear.subtitle') }}
        </div>
      </div>
      <div>
        <Switch v-model="settings.useSBMYear" />
      </div>
    </div>
  </div>
  <!-- <SearchBar />
        <StudentList /> -->
</template>
