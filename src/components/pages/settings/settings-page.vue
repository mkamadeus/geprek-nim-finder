<script setup lang="ts">
import { useSettings } from '~/stores/settings';
import { MajorMode } from '~/models/MajorMode';

const settings = useSettings();
const { t, locale } = useI18n();
</script>

<template>
  <div flex="~ col" space-y-4>
    <!-- LANGUAGE SETTINGS -->
    <div flex="~ col lg:row" space="y-2" justify="lg:between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>{{ t('settings.language.title') }}</div>
        <div text="xs lg:sm">{{ t('settings.language.subtitle') }}</div>
      </div>
      <div>
        <Dropdown
          :values="['id', 'en', 'cn']"
          :options="['🇮🇩 ID', '🇺🇸 EN', '🇨🇳 CN']"
          v-model="locale"
        />
      </div>
    </div>
    <!-- YEAR LIMIT SETTINGS -->
    <div flex="~ col lg:row" space="y-2" justify="lg:between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>{{ t('settings.limit.title') }}</div>
        <div text="xs lg:sm">{{ t('settings.limit.subtitle') }}</div>
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
        <div text="sm lg:base" font-bold>{{ t('settings.display.title') }}</div>
        <div text="xs lg:sm">
          {{ t('settings.display.subtitle') }}
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
        <div text="sm lg:base" font-bold>{{ t('settings.yearDisplay.title') }}</div>
        <div text="xs lg:sm">{{ t('settings.yearDisplay.subtitle') }}</div>
      </div>
      <div>
        <Switch v-model="settings.showYear" />
      </div>
    </div>
    <!-- SBM SETTINGS -->
    <div flex="~ row" space="y-2" justify="between" items="lg:center">
      <div>
        <div text="sm lg:base" font-bold>{{ t('settings.sbmYear.title') }}</div>
        <div text="xs lg:sm">{{ t('settings.sbmYear.subtitle') }}</div>
      </div>
      <div>
        <Switch v-model="settings.useSBMYear" />
      </div>
    </div>
  </div>
  <!-- <SearchBar />
        <StudentList /> -->
</template>
