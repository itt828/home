<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: "iitt.dev",
  },
);
</script>

<template>
  <div
    class="h-full w-full flex items-center justify-start border-solid border-stone-500 border-[12px] bg-gray-50"
  >
    <div class="flex flex-col items-center justify-center w-full h-full p-12 text-center">
      <h1 class="text-[80px] font-bold text-gray-900 leading-tight mb-4">
        {{ title }}
      </h1>
      <p v-if="description" class="text-[40px] text-gray-600 leading-normal">
        {{ description }}
      </p>
    </div>
  </div>
</template>
