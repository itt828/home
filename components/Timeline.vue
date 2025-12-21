<template>
  <ol class="relative border-l border-gray-400 ml-3">
    <li v-for="(item, index) in items" :key="index" class="mb-10 ml-6">
      <div
        class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white"
        :class="isCurrent(item) ? 'bg-blue-600' : 'bg-gray-400'"
      ></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-600">
        {{ item.period[0] }} - {{ item.period[1] || "現在" }}
      </time>
      <h3
        class="text-lg font-semibold text-gray-900"
        :class="{ 'opacity-50': !isCurrent(item) }"
      >
        {{ item.title }}
      </h3>
      <p class="mb-4 text-base font-normal text-gray-600 whitespace-pre-line">
        {{ item.description }}
      </p>
    </li>
  </ol>
</template>

<script setup lang="ts">
export interface TimelineItem {
  period: [string, string | null];
  title: string;
  description: string;
}

defineProps<{
  items: TimelineItem[];
}>();

const isCurrent = (item: TimelineItem) =>
  item.period[1] === null || item.period[1] === "現在";
</script>
