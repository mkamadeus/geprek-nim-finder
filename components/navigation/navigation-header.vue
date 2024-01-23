<script setup lang="ts">
type Props = {
  title: string;
  subtitle: string;
};

defineProps<Props>()
</script>

<template>
  <header m="y-6 b-8" w-full>
    <div flex="~ col lg:row" justify-between items="center lg:end" space-y-2>
      <div flex="~ col" items="center lg:start">
        <h1 flex="~" font="800" text="2xl center teal-500 dark:teal-300" items-center space-x-3>
          {{ title }}
        </h1>
        <p text="sm md:base gray-400 dark:gray-400" italic>
          {{ subtitle }}
        </p>
      </div>
      <LazyNavigationBar />
    </div>
  </header>
</template>
