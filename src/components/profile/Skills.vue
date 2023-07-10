<template>
  <div :class="$style.container">
    <SkillTag />
    <SkillTag />
    <SkillTag />
    <SkillTag />
    <SkillTag />
    <SkillTag />
    <SkillTag />
  </div>
</template>

<script setup lang="ts">
import SkillTag from "@/components/SkillTag.vue";
</script>

<style module>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
