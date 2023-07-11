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
  font-size: 2rem;
  margin-bottom: 4px;
}
</style>
