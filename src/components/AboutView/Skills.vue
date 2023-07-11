<template>
  <Card title="skill">
    <div :class="$style.container">
      <SkillTag v-for="skill in skills" :key="skill.name" :name="skill.name" :color="skill.color" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { skills } from '@/assets/skills'
import SkillTag from '@/components/SkillTag.vue'
</script>

<style module>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
