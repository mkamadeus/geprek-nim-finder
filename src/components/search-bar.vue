<script setup lang="ts">
import { useSearch } from '~/store/search';

const store = useSearch();
const cachedQuery = useStorage('geprek-query', '');
const cachedChips = useStorage('geprek-chips', [] as string[]);

// debounce query
const getQueryResult = useDebounceFn(() => {
  if (store.query.length >= 2) {
    store.getResult();
  }
}, 500);

watchEffect(() => {
  cachedQuery.value = store.query;
  cachedChips.value = store.chips;
  console.log(store.query);
});
</script>

<template>
  <form flex="~ col" space-y-2 mb-1 w-full @submit.prevent="">
    <input
      v-model="store.query"
      rounded-full
      border="2 gray-200 dark:gray-800/70 focus:teal-200/70"
      bg="white dark:gray-700/70"
      shadow
      p="2 x-4"
      outline-none
      w-full
      bg-transparent
      text="dark:white"
      transition="~ duration-150"
      placeholder="Ketik nama, NIM, atau kode jurusan..."
      role="textbox"
      autofocus
      @input="getQueryResult"
    />
    <!-- CHIPS -->
    <div flex space-x-2>
      <button
        v-for="(chip, i) in store.chips"
        @click="store.removeChip(i)"
        inline-flex
        items-center
        justify-center
        p="x-1.5 y-0.5"
        text="sm"
        rounded-full
        cursor-pointer
        bg="teal-400"
      >
        <span font-semibold>{{ chip }}</span>
        <span>
          <i-carbon-close />
        </span>
      </button>
    </div>
  </form>
</template>
