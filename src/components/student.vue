<script setup lang="ts">
import type { Student } from '~/models/Student';
import m from '~/json/majors.json';

const majors = m as { [k: string]: string };
type Props = {
  student: Student;
};
defineProps<Props>();
</script>

<template>
  <div flex justify-between items-center py-2>
    <div>
      <div
        text="sm md:base dark:gray-200"
        font-medium
        cursor-pointer
        hover:animate-pulse
        title="Click to copy!"
      >
        {{ student.name }}
      </div>
      <div text="xs md:sm dark:gray-300" italic select-none>
        {{ majors[student.majorID?.slice(0, 3) ?? student.tpbID.slice(0, 3)] }}
      </div>
    </div>
    <div>
      <div
        v-if="student.majorID"
        text="xs md:sm gray-500 dark:gray-300"
        select-none
        cursor-pointer
        hover:animate-pulse
        title="Click to copy!"
      >
        {{ student.majorID }}
      </div>
      <div
        text="xs md:sm gray-500 dark:gray-300"
        select-none
        cursor-pointer
        hover:animate-pulse
        title="Click to copy!"
      >
        {{ student.tpbID }}
      </div>
    </div>
  </div>
</template>
