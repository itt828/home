<template>
  <div :class="$style.container">
    <AboutMe />
    <Section title="スキル" :class="$style.skills">
      <Skills />
    </Section>
  </div>
</template>

<script setup lang="ts">
import Section from "@/components/UI/Section.vue";
import AboutMe from "@/components/profile/AboutMe.vue";
import Skills from "@/components/profile/Skills.vue";
</script>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.skills {
  margin-left: 16px;
}
</style>
