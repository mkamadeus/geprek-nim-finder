<script setup lang="ts">
type Props = {
  title: string;
  subtitle: string;
};

defineProps<Props>();
</script>

<template>
  <header mb-5 w-full class="not-prose">
    <div flex="~ col lg:row" justify-between items="center lg:end" space-y-2>
      <div flex="~ col" items="center lg:start">
        <h1
          flex="~"
          font="semibold"
          text="2xl center teal-500 dark:teal-300"
          items-center
          space-x-3
        >
          {{ title }}
        </h1>
        <p text="base md: gray-400 dark:white" italic>{{ subtitle }}</p>
      </div>
      <NavigationBar />
    </div>
  </header>
</template>
