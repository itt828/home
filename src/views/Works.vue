<template>
  <Section title="Works">
    <div :class="$style.container">
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </div>
  </Section>
</template>

<script setup lang="ts">
import WorkCard from "../components/UI/WorkCard.vue";
import Section from "../components/UI/Section.vue";
</script>

<style module>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: auto;
}
</style>
