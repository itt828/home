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
body {
  height: 100%;
  width: 100%;
  background-color: #eee;
}
#app {
  height: 100%;
  width: 100%;
  font-family: "M PLUS 1", sans-serif;
  color: $text;
}
</style>

<style module lang="scss">
main {
  margin-top: 8px;
}
</style>
