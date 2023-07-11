<template>
  <header :class="$style.header">
    <div :class="$style.path">
      <RouterLink to="/">iitt.dev</RouterLink>
      <span>
        {{ $route.path }}
      </span>
    </div>
    <div :class="$style.pages">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/works">Works</RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style module lang="scss">
.header {
  @include borderedFrame;
  display: flex;
  justify-content: space-between;
  padding: 8px 24px;
}
.path {
  font-size: 1.25rem;
}

.pages {
  display: flex;
  align-items: center;
  gap: 12px;
}
.icon {
  width: 24px;
  height: 24px;
  background-color: $text;
}
</style>
