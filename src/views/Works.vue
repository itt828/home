<template>
  <Section :class="$style.section" title="Works">
    <div :class="$style.container">
      <TagSearch />
      <div :class="$style.elements">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import WorkCard from "../components/UI/WorkCard.vue";
import Section from "../components/UI/Section.vue";
import TagSearch from "../components/UI/TagSearch.vue";
</script>

<style module lang="scss">
.section {
  max-width: 1300px;
  margin: auto;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.elements {
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 1fr));
  grid-auto-rows: 600px;
  gap: 24px;
  justify-items: center;
}
</style>
