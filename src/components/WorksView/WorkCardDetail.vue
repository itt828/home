<template>
  <div :class="$style.card">
    <div :class="$style.image">
      <img :src="props.image" />
    </div>
    <div :class="$style.description">
      <div :class="$style.title">{{ props.title }}</div>
      <div>
        <span :class="$style.text">
          {{ props.description }}
        </span>
      </div>
    </div>
    <div :class="$style.skillContainer">
      <SkillTag
        v-for="skill in fixedSkills"
        :key="skill.name"
        :name="skill.name"
        :color="skill.color"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { skills } from '@/assets/skills'
import SkillTag from '@/components/SkillTag.vue'
import { Skill } from '@/models'
import { computed } from 'vue'
const props = defineProps<{
  image: string
  title: string
  description: string
  skills: Array<{ name: string; color: string } | undefined>
}>()
const fixedSkills = computed<Skill[]>(() => skills.filter((v) => v !== undefined))
</script>

<style module lang="scss">
.card {
  border: 2px $accent solid;
  border-radius: 12px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.image {
  display: flex;
  justify-content: center;
  max-height: 300px;
  & > img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
}
.description {
  padding: 0 12px;
}
.title {
  margin-bottom: 12px;
  font-size: 1.25rem;
}
.text {
  overflow-wrap: normal;
  font-size: 1rem;
}
.skillContainer {
  padding: 0 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
