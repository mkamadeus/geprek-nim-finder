<script setup lang="ts">
import geprek from '~/constants/geprek';

// randomize geprek
const geprekIndex = Math.floor(Math.random() * geprek.length);
</script>

<template>
  <!-- HEADER -->
  <header pb-3>
    <div
      flex="~ col sm:row"
      justify-between
      items="start sm:center"
      space-y-2
      text="teal-500 dark:teal-300"
    >
      <div flex="~ col" justify="items-center">
        <h1 flex="~" font="semibold" text="xl center" items-center space-x-3>
          Geprek ITB NIM Book
        </h1>
        <p text="xs md:sm gray-400 dark:white" italic>Digeprek oleh {{ geprek[geprekIndex] }}.</p>
      </div>
      <NavigationBar />
    </div>
  </header>
  <!-- MAIN -->
  <main grid="~ gap-2 cols-3" justify-center>
    <div bg-gray-700 rounded shadow p-2>2016</div>
    <div bg-gray-700 rounded shadow p-2>2016</div>
    <div bg-gray-700 rounded shadow p-2>2016</div>
  </main>
</template>
