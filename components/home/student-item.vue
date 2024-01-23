<script setup lang="ts">
import { useSettings } from '~/stores/settings'

// props
type Props = {
  student: Student;
  isSpecial: boolean;
};

const props = defineProps<Props>()

// remap dicts
const majorsResponse = await useFetch<Record<string, string>>('api/list')
if (!majorsResponse) {
  throw new Error('Failed to load majors')
}
const codesResponse = await useFetch<Record<string, string>>('api/codes')
if (!codesResponse) {
  throw new Error('Failed to load codes')
}
const majors = majorsResponse.data.value!
const codes = majorsResponse.data.value!

const { showYear, useSBMYear } = useSettings()

const getMajorName = () => {
  const prefix = props.student.majorID?.slice(0, 3) ?? props.student.tpbID.slice(0, 3)
  const year =
    2000 +
    parseInt(props.student.tpbID.slice(3, 5)) + // got from NIM
    (useSBMYear && ['190', '192', '197'].includes(prefix) ? 3 : 0) // add 3 years if student is under SBM
  const major = majors[prefix]
  // const shortened = codes[prefix]

  // let result: string
  // switch (mode) {
  //   case MajorMode.LONG:
  //     result = `${major}${showYear ? ` ${year}` : ''}`;
  //     break;
  //   case MajorMode.SHORT:
  //     result = `${shortened}${showYear ? `${year}` : ''}`;
  //     break;
  //   case MajorMode.BOTH:
  //     result = `${major} (${shortened}${showYear ? `${year}` : ''})`;
  //     break;
  //   default:
  //     break;
  //   }
  const result = `${major}${showYear ? ` ${year}` : ''}`

  return result
}

const clipboard = useClipboard()
// const { t } = useI18n();
</script>

<template>
  <li
    bg="hover:gray-100/50 hover:dark:gray-700/50"

    p="y-1 x-2"
    flex
    cursor-pointer
    items-center
    justify-between
    rounded-lg
    space-x-2
  >
    <div>
      <div
        text="sm md:base dark:gray-200"
        inline-flex
        cursor-pointer
        items-center
        font-700
        font-medium
        hover:animate-pulse
        space-x-2
        title="Click to copy!"
      >
        <span
          :class="{ 'dark:text-yellow-200 text-yellow-500': isSpecial }"
          @click="clipboard.copy(student.name || '')"
        >{{ student.name }}</span>
        <span
          v-if="isSpecial"
          text="xs teal-500 dark:teal-300"
          @click="$router.push('/help')"
        ><div class="i-carbon-star-filled" /></span>
      </div>
      <div text="xs md:sm dark:gray-300" select-none font-300 italic>
        {{ getMajorName() }}
      </div>
    </div>
    <div>
      <div
        v-if="student.majorID"
        text="xs md:sm gray-500 dark:gray-300"
        cursor-pointer
        select-none
        hover:animate-pulse
        title="Click to copy!"
        @click="clipboard.copy(student.majorID || '')"
      >
        {{ student.majorID }}
      </div>
      <div
        text="xs md:sm gray-500 dark:gray-300"
        cursor-pointer
        select-none
        hover:animate-pulse
        title="Click to copy!"
        @click="clipboard.copy(student.tpbID)"
      >
        {{ student.tpbID }}
      </div>
    </div>
  </li>
</template>

<style scoped>
.golden {
  background: linear-gradient(45deg, #c1af8b 22%, #ffeaad 40%, #b5a584 78%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
