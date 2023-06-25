<template>
  <div :class="$style.bar"></div>
</template>
<script setup lang="ts"></script>

<style module lang="scss">
.bar {
  height: 60px;
  border: 2px $accent solid;
  border-radius: 16px;
}
</style>
