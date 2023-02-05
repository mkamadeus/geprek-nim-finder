<script setup lang="ts">
import type { Student } from '~/models/Student';
import m from '~/json/majors.json';
import c from '~/json/codes.json';
import { useSettings } from '~/stores/settings';
import { MajorMode } from '~/models/MajorMode';

// props
type Props = {
  student: Student;
  isSpecial: boolean;
};

const props = defineProps<Props>();

// remap dicts
const majors = m as { [k: string]: string };
const codes: { [k: string]: string } = {};
for (const [k, v] of Object.entries(c)) {
  codes[v] = k;
}

const { majorMode: mode, showYear, useSBMYear } = useSettings();

const getMajorName = () => {
  const prefix = props.student.majorID?.slice(0, 3) ?? props.student.tpbID.slice(0, 3);
  const year =
    2000 +
    parseInt(props.student.tpbID.slice(3, 5)) + // got from NIM
    (useSBMYear && ['190', '192', '197'].includes(prefix) ? 3 : 0); // add 3 years if student is under SBM
  const major = t(`majors[${prefix}]`);
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

const clipboard = useClipboard();
const { t } = useI18n();
</script>

<template>
  <li flex justify-between items-center space-x-2 py-2>
    <div>
      <div
        text="sm md:base dark:gray-200"
        font-700
        inline-flex
        items-center
        space-x-2
        font-medium
        cursor-pointer
        hover:animate-pulse
        title="Click to copy!"
      >
        <span>{{ student.name }}</span>
        <span v-if="isSpecial" text="xs teal-500 dark:teal-300"><i-carbon-star /></span>
      </div>
      <div text="xs md:sm dark:gray-300" font-300 italic select-none>
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
        @click="clipboard.copy(student.majorID || '')"
      >
        {{ student.majorID }}
      </div>
      <div
        text="xs md:sm gray-500 dark:gray-300"
        select-none
        cursor-pointer
        hover:animate-pulse
        title="Click to copy!"
        @click="clipboard.copy(student.tpbID)"
      >
        {{ student.tpbID }}
      </div>
    </div>
  </li>
</template>
