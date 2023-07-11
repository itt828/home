<template>
  <div :class="$style.card">
    <div :class="$style.cardInner">
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
    <div :class="$style.button">
      <button @click="emit('selected')">詳細を見る</button>
      <Teleport to="body">
        <div v-if="isSelected" :class="$style.modalBackground" @click="emit('close')" />
        <WorkCardDetail
          v-if="isSelected"
          :image="props.image"
          :title="props.title"
          :descriptionDetail="props.descriptionDetail"
        />
      </Teleport>
    </div>
  </div>
</template>
<script setup lang="ts">
import SkillTag from '@/components/SkillTag.vue'
import { Skill } from '@/models'
import { computed } from 'vue'
import WorkCardDetail from './WorkCardDetail.vue'
const props = defineProps<{
  image: string
  title: string
  description: string
  descriptionDetail: string
  skills: Array<Skill | undefined>
  isSelected: boolean
}>()
const emit = defineEmits<{
  (e: 'selected'): void
  (e: 'close'): void
}>()
const fixedSkills = computed<Skill[]>(() => props.skills.filter((v): v is Skill => v !== undefined))
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
  justify-content: space-between;
}
.cardInner {
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
.button {
  display: flex;
  justify-content: right;
  padding-bottom: 8px;
  padding: 4px;
  & > button {
    @include borderedFrame;
    padding: 8px 24px;
    background-color: transparent;
    cursor: pointer;
    color: $text;
    &:hover {
      background-color: $ui;
    }
  }
}
.modalBackground {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
}
</style>
