<script setup lang="ts">
import type { Student } from '~/models/Student';
import m from '~/json/majors.json';
import c from '~/json/codes.json';
import { useSettings } from '~/store/settings';
import { MajorMode } from '~/models/MajorMode';

// props
type Props = {
  student: Student;
};

const props = defineProps<Props>();

// remap dicts
const majors = m as { [k: string]: string };
const codes: { [k: string]: string } = {};
for (const [k, v] of Object.entries(c)) {
  codes[v] = k;
}

const { majorMode: mode, showYear } = useSettings();

const getMajorName = () => {
  const prefix = props.student.majorID?.slice(0, 3) ?? props.student.tpbID.slice(0, 3);
  const year = 2000 + parseInt(props.student.tpbID.slice(3, 5));
  const major = majors[prefix];
  const shortened = codes[prefix];

  let result: string;
  switch (mode) {
    case MajorMode.LONG:
      result = `${major}${showYear ? ` ${year}` : ''}`;
      break;
    case MajorMode.SHORT:
      result = `${shortened}${showYear ? `${year}` : ''}`;
      break;
    case MajorMode.BOTH:
      result = `${major} (${shortened}${showYear ? `${year}` : ''})`;
      break;
    default:
      result = `${major}${showYear ? ` ${year}` : ''}`;
      break;
  }

  return result;
};
</script>

<template>
  <div flex justify-between items-center space-x-2 py-2>
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
        {{ getMajorName() }}
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
