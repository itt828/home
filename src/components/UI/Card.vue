<template>
  <div :class="$style.card">
    <div :class="$style.title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>

<style module lang="scss">
.card {
  @include borderedFrame;
}
.title {
  font-size: 1.75rem;
  margin-bottom: 8px;
  margin-left: 16px;
}
</style>
