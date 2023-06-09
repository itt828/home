<template>
  <div :class="$style.container">
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <SkillCard />
  </div>
</template>

<script setup lang="ts">
import SkillCard from "@/components/UI/SkillCard.vue";
</script>

<style module>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
