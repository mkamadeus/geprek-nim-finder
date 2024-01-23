<script setup lang="ts">
const settings = useSettings()
// const { yearLimit } = storeToRefs(settings)
// const { t, locale } = useI18n();

// const locale = useLocalStorage('geprek-locale', 'id')
const yearLimit = useLocalStorage('geprek-year-limit', 2016)
const majorMode = useLocalStorage('geprek-major-mode', 'LONG' as MajorMode)
const showYear = useLocalStorage('geprek-show-year', true)
const useSBMYear = useLocalStorage('geprek-use-sbm-year', true)
</script>

<template>
  <ClientOnly>
    <section flex="~ col" space-y-4 text="black dark:gray-300">
      <!-- LANGUAGE SETTINGS -->
      <fieldset flex="~ col lg:row" space="y-2" justify="lg:between" items="lg:center">
        <div>
          <div text="sm lg:base" font-bold>
            Bahasa
          </div>
          <div text="xs lg:sm">
            Pilih bahasa yang ingin digunakan.
          </div>
        </div>
      <!-- <div>
        <Dropdown v-model="locale" :values="['id', 'en', 'cn']" :options="['🇮🇩 ID', '🇺🇸 EN', '🇨🇳 CN']" />
      </div> -->
      </fieldset>
      <!-- YEAR LIMIT SETTINGS -->
      <fieldset flex="~ col lg:row" space="y-2" justify="lg:between" items="lg:center">
        <div>
          <div text="sm lg:base" font-bold>
            Batas angkatan
          </div>
          <div text="xs lg:sm">
            Batasi tahun angkatan untuk mengurangi hasil pencarian.
          </div>
        </div>
        <div>
          <Dropdown v-model="yearLimit" :values="[2016, 2017, 2018, 2019]" :options="[2016, 2017, 2018, 2019]" />
        </div>
      </fieldset>
      <!-- MAJOR MODE SETTINGS -->
      <fieldset flex="~ col lg:row" space="y-2" justify="lg:between" items="lg:center">
        <div>
          <div text="sm lg:base" font-bold>
            Tampilan jurusan/fakultas
          </div>
          <div text="xs lg:sm">
            Tampilkan nama panjang, singkatan, atau keduanya untuk jurusan/fakultas.
          </div>
        </div>
        <div>
          <Dropdown
            v-model="majorMode"
            :values="['LONG', 'SHORT', 'BOTH']"
            :options="['Panjang', 'Singkatan', 'Keduanya']"
          />
        </div>
      </fieldset>
      <!-- SHOW YEAR SETTINGS -->
      <fieldset flex="~ row" space="y-2" justify="between" items="lg:center">
        <div>
          <div text="sm lg:base" font-bold>
            Tahun jurusan/fakultas
          </div>
          <div text="xs lg:sm">
            Tampilkan tahun untuk jurusan/fakultas.
          </div>
        </div>
        <div>
          <Switch v-model="showYear" />
        </div>
      </fieldset>
      <!-- SBM SETTINGS -->
      <fieldset flex="~ row" space="y-2" justify="between" items="lg:center">
        <div>
          <div text="sm lg:base" font-bold>
            Tahun Kelulusan SBM
          </div>
          <div text="xs lg:sm">
            Gunakan tahun kelulusan SBM untuk untuk tampilan dan pencarian.
          </div>
        </div>
        <div>
          <Switch v-model="useSBMYear" />
        </div>
      </fieldset>
    </section>
  </ClientOnly>
  <!-- <SearchBar />
        <StudentList /> -->
</template>
