<template>
  <div :class="$style.container">
    <AboutMe :class="$style.aboutMe" />
    <Skills :class="$style.skills" />
  </div>
</template>

<script setup lang="ts">
import AboutMe from "@/components/AboutView/AboutMe.vue";
import Skills from "@/components/AboutView/Skills.vue";
</script>

<style module lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.aboutMe {
  grid-column: 1 / 3;
  grid-row: 1;
}
.skills {
  grid-column: 1 / 2;
  grid-row: 2;
}
</style>
