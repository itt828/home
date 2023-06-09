<template>
  <div :class="$style.container">
    <AboutMe />
    <Section title="スキル">
      <Skills />
    </Section>
    <Section title="制作">
      <Works />
    </Section>
  </div>
</template>

<script setup lang="ts">
import Section from "@/components/UI/Section.vue";
import AboutMe from "@/components/profile/AboutMe.vue";
import Skills from "@/components/profile/Skills.vue";
import Works from "@/components/profile/Works.vue";
</script>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
}
</style>
