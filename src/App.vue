<template>
  <CommonHeader />
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import CommonHeader from "./components/CommonHeader.vue";
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 80%;
  font-family: "M PLUS 1", sans-serif;
  color: $text;
}
</style>

<style module lang="scss">
main {
  margin-top: 8px;
}
</style>
