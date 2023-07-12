<template>
  <div :class="$style.container">
    <div :class="$style.logo"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.container {
  margin-top: 72px;
  display: flex;
  justify-content: center;
}
.logo {
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 2.5rem;
}
</style>
