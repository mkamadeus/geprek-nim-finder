<script setup lang="ts">
const search = useSearch()

// debounce query
const getQueryResult = useDebounceFn(async () => {
  if (search.query.length >= 2) {
    await search.search()
    search.getResult()
  } else {
    search.resetResult()
  }
  search.isTyping = false
  search.isLoading = false
}, 500)

// const { t } = useI18n();
</script>

<template>
  <form flex="~" mb-2 w-full space="x-2" @submit.prevent="">
    <fieldset
      class="group"
      border="2 gray-200 dark:gray-800/70 focus-within:teal-200/70"
      bg="white dark:gray-700/70"
      p="x-4"
      text="dark:white"
      transition="~ duration-150"
      role="textbox"
      h-10
      w-full
      flex
      items-center
      rounded-full
      shadow
      outline-none
      space-x-2
    >
      <div class="i-carbon-search" />
      <input
        v-model="search.query"
        autofocus
        w-full
        bg-transparent
        focus:outline-none
        text="sm md:base"
        placeholder="Ketik nama, NIM, atau kode jurusan..."
        @input="search.isTyping = true; getQueryResult()"
      >
    </fieldset>
    <HomeSearchFilter />
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
