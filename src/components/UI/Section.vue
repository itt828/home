<template>
  <div>
    <div :class="$style.title">{{ title }}</div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<style module>
.title {
  font-size: 2rem;
}
</style>
