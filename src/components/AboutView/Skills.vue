<template>
  <Card title="skills">
    <div :class="$style.container">
      <SkillTag v-for="skill in skills" :key="skill.name" :name="skill.name" :color="skill.color" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import SkillTag from '@/components/SkillTag.vue'
import skillsYaml from '@/assets/skills.yaml?raw'
import Card from '@/components/UI/Card.vue'
import { load } from 'js-yaml'
import { Skill } from '@/models'
const skills = load(skillsYaml) as Skill[]
</script>

<style module>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
