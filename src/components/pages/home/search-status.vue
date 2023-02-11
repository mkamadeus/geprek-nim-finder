<script setup lang="ts">
import { useSearch } from '~/stores/search';

const { t } = useI18n();
const search = useSearch();

// status
const isIdle = computed(
  () => !search.isLoading && search.result.length === 0 && search.query.length <= 2,
);
const isLoading = computed(() => search.isLoading);
const isShowing = computed(
  () => !search.isLoading && search.result.length !== 0 && search.query.length > 2,
);
const isNone = computed(
  () => !search.isLoading && search.result.length === 0 && search.query.length > 2,
);
</script>

<template>
  <!-- WHEN IDLE -->
  <div mb-3>
    <div v-if="isIdle" text="center gray-400/70 xs" italic>
      <div>{{ t('home.search.default') }} v{{ search.version }}.</div>
      <div>
        {{ t('home.search.incomplete') }}
        <a underline="~ dotted" cursor-pointer @click="search.clearCache">{{
          t('home.search.reset')
        }}</a>
      </div>
    </div>
    <!-- WHEN SHOWING -->
    <div v-if="isShowing" text="center gray-400/70 xs" italic>
      {{ t('home.search.result.showing') }} {{ Math.min(search.limit, search.result.length) }}
      {{ t('home.search.result.of') }} {{ search.result.length }}
      {{ t('home.search.result.result') }}.
    </div>
    <!-- WHEN NO RESULT -->
    <div
      v-if="isNone"
      text="center gray-400/70 xs"
      flex="~ col"
      justify-center
      items-center
      space-y-2
      italic
    >
      <div>{{ t('home.search.empty') }}</div>
      <img
        src="/svg/chicken.svg"
        alt="geprek-icon"
        w="10"
        h="10"
        filter="~ grayscale-100"
        opacity-20
        text-center
      />
    </div>
    <!-- WHEN LOADING -->
    <div v-if="isLoading" text="center gray-400/70 xs" italic>
      <div>{{ t('home.search.loading') }}</div>
    </div>
  </div>
</template>
