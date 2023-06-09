<template>
  <div :class="$style.title">{{ title }}</div>
  <div class="content">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{ title: string }>();
</script>

<style module>
.title {
  font-size: 2rem;
}
</style>
