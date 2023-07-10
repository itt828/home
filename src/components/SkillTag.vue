<template>
  <RouterLink :to="link" :class="$style.link">
    <div :class="$style.card">
      <div :class="$style.icon" :style="{ backgroundColor: props.color }"></div>
      <div :class="$style.name">{{ props.name }}</div>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

const link = computed(() => `/works?tag=${props.name}`);
const props = defineProps<{
  name: string;
  color: string;
}>();
</script>
<style module lang="scss">
.card {
  height: 32px;
  border: 2px $accent solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 8px 0 0;

  &:hover {
    background-color: $ui;
    cursor: pointer;
  }
}
.icon {
  width: 12px;
  height: 12px;
  margin: 4px 8px;
  border-radius: 50%;
}
.link {
  text-decoration: none;
  &:link {
    color: $text;
  }
  &:visited {
    color: $text;
  }
}
</style>
