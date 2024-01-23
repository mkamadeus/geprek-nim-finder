<script setup lang="ts">
type Props = {
  modelValue: boolean;
};
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const switchState = useVModel(props, 'modelValue', emits)
</script>

<template>
  <SwitchRoot
    id="airplane-mode"
    v-model:checked="switchState"
    class="relative h-[25px] w-[42px] flex cursor-default rounded-full bg-black/50 shadow-sm data-[state=checked]:bg-black focus-within:outline-black focus-within:outline"
  >
    <SwitchThumb
      class="my-auto block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white shadow-sm transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]"
    />
  </SwitchRoot>
</template>
