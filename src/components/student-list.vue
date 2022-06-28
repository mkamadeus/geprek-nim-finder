<script setup lang="ts">
import { useSearch } from '~/store/search';

const version = localStorage.getItem('geprek-version');
const store = useSearch();

const limit = ref(10);

// get result on mount
onMounted(() => {
  if (store.query.length >= 2) {
    store.getResult();
  }
});

// reset limit on
watch(
  () => store.result,
  (f, s) => {
    limit.value = 10;
  },
);
</script>

<template>
  <div flex="~ col" justify-center v-if="store.result.length !== 0">
    <div text="center gray-400/70 xs" italic>
      Menunjukkan {{ Math.min(limit, store.result.length) }} dari {{ store.result.length }} hasil.
    </div>
    <template v-for="s in store.result.slice(0, limit)" :key="s[0].majorID || s[0].tpbID">
      <Student :student="s[0]" />
    </template>
    <div flex="~" justify-center mt-2 mx-auto w-full v-if="limit < store.result.length">
      <a
        bg="teal-400 dark:gray-700/70"
        p="x-4 y-2"
        cursor="pointer"
        select-none
        text-white
        text-center
        text-sm
        rounded
        @click="limit += 5"
        >Geprek lagi!</a
      >
    </div>
  </div>
  <div
    v-if="store.result.length === 0 && store.query.length === 0"
    text="center gray-400/70 xs"
    italic
  >
    <div>Hasil pencarian akan keluar di sini. v{{ version }}.</div>
    <div>Data kurang lengkap? <a>Reset cache</a>.</div>
  </div>
  <div
    v-if="store.result.length === 0 && store.query.length !== 0"
    text="center gray-400/70 xs"
    italic
  >
    <div>Tidak ditemukan apa-apa. Mungkin salah geprek.</div>
  </div>
</template>
