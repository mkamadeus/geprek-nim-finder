<script setup lang="ts">
import { useSearch } from '~/stores/search';

const { t } = useI18n();
const search = useSearch();
</script>

<template>
  <div v-if="search.result.length !== 0" text="center gray-400/70 xs" italic>
    {{ t('home.search.result.showing') }} {{ Math.min(search.limit, search.result.length) }}
    {{ t('home.search.result.of') }} {{ search.result.length }}
    {{ t('home.search.result.result') }}.
  </div>
  <div
    v-if="search.result.length === 0 && search.query.length <= 2"
    text="center gray-400/70 xs"
    italic
  >
    <div>{{ t('home.search.default') }} v{{ search.version }}.</div>
    <div>
      {{ t('home.search.incomplete') }}
      <a underline="~ dotted" cursor-pointer @click="search.clearCache">{{
        t('home.search.reset')
      }}</a>
    </div>
  </div>
  <div
    v-if="search.result.length === 0 && search.query.length > 2"
    text="center gray-400/70 xs"
    italic
  >
    <div>{{ t('home.search.empty') }}</div>
  </div>
</template>
