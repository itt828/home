<template>
  <CommonHeader :class="$style.header" />
  <main>
    <router-view :class="$style.content" />
  </main>
</template>

<script setup lang="ts">
import CommonHeader from './components/CommonHeader.vue'
import 'normalize.css'
</script>

<style lang="scss">
html {
  height: 100%;
  font-family: 'M PLUS 1', sans-serif;
  background-color: $background;
  color: $text;
}
body {
  height: 100%;
}
#app {
  height: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
}
</style>

<style module lang="scss">
.header {
  margin: 8px 20px 0;
  max-width: 1080px;
  margin-bottom: 12px;
}
main {
  margin: 0 20px 8px;
  max-width: 1080px;
  height: 100%;
  min-height: 0;
  overflow: auto;
}
</style>
