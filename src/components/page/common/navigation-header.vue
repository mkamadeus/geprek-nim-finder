<script setup lang="ts">
type Props = {
  title: string;
  subtitle: string;
};

defineProps<Props>();
</script>

<template>
  <header pb-3 w-full>
    <div
      flex="~ col lg:row"
      justify-between
      items="center lg:end"
      space-y-2
      text="teal-500 dark:teal-300"
    >
      <div flex="~ col" items="center lg:start">
        <h1 flex="~" font="semibold" text="xl center" items-center space-x-3>
          {{ title }}
        </h1>
        <p text="xs md:sm gray-400 dark:white" italic>{{ subtitle }}</p>
      </div>
      <NavigationBar />
    </div>
  </header>
</template>
