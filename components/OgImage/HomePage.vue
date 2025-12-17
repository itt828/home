<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: "title",
  },
);
</script>

<template>
  <div
    class="h-full w-full flex items-center justify-start border-solid border-stone-500 border-[12px] bg-gray-50"
  >
    <div class="flex flex-col items-center justify-center w-full h-full">
      <h1 class="text-[80px]">iitt.dev</h1>
      <h2 class="text-[40px]">ホームページ</h2>
    </div>
  </div>
</template>
