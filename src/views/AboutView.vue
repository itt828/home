<template>
  <div :class="$style.container">
    <!-- <MyImage /> -->
    <Card title="itt" :class="$style.aboutMe">
      <AboutMe />
    </Card>
    <Card title="skill" :class="$style.skills">
      <Skills />
    </Card>
  </div>
</template>

<script setup lang="ts">
import Section from "@/components/UI/Section.vue";
import AboutMe from "@/components/profile/AboutMe.vue";
import Skills from "@/components/profile/Skills.vue";
import MyImage from "../components/profile/MyImage.vue";
import Card from "../components/UI/Card.vue";
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
