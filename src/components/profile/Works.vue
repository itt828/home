<template>
  <div :class="$style.container">
    <WorkCard />
    <WorkCard />
    <WorkCard />
    <WorkCard />
    <WorkCard />
    <WorkCard />
    <WorkCard />
  </div>
</template>

<script setup lang="ts">
import WorkCard from "@/components/UI/WorkCard.vue";
</script>

<style module>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
