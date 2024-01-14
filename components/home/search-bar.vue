<script setup lang="ts">
// import { useSearch } from '~/stores/search';

// const store = useSearch();

// // debounce query
// const getQueryResult = useDebounceFn(() => {
//   if (store.query.length >= 2) {
//     store.getResult();
//   } else {
//     store.resetResult();
//   }
//   store.isLoading = false;
// }, 500);

// const { t } = useI18n();
</script>

<template>
  <form flex="~ col" space-y-2 mb-2 w-full @submit.prevent="">
    <input rounded-full border="2 gray-200 dark:gray-800/70 focus:teal-200/70" bg="white dark:gray-700/70" shadow
      p="2 x-4" outline-none w-full bg-transparent text="dark:white" transition="~ duration-150" role="textbox" autofocus
      @input="" />
    <!-- CHIPS -->
    <!-- <TransitionGroup name="list" tag="div" flex space-x-2> -->
    <!-- <button v-for="(chip, i) in store.chips" @click="
            //   store.removeChip(i);
            // store.getResult();
            " inline-flex items-center justify-center p="x-1.5 y-0.5" text="xs lg:sm" rounded-full cursor-pointer
        bg="teal-400">
        <span font-semibold>{{ chip }}</span>
        <span>
          <i-carbon-close />
        </span>
      </button> -->
    <!-- </TransitionGroup> -->
  </form>
</template>
