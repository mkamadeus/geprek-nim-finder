<script setup lang="ts">
type Props = {
  modelValue: boolean;
};

const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const toggle = () => {
  emits('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div

    h-6
    w-12
    cursor-pointer
    rounded-full
    p-1
    transition-all
    :class="modelValue ? 'bg-teal-500' : 'dark:bg-gray-700 bg-gray-300'"
    @click="toggle"
  >
    <div

      h-4
      w-4
      rounded-full
      bg-gray-100
      shadow
      transition="all ease-out"
      transform="~"
      :class="modelValue ? 'translate-x-6' : 'translate-x-0'"
    />
  </div>
</template>
