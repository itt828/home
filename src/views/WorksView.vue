<template>
  <div :class="$style.container">
    <TagSearch :class="$style.tagSearch" />
    <div :class="$style.works">
      <div :class="$style.elements">
        <WorkCard
          v-for="work in works"
          :key="work.title"
          :image="work.image"
          :title="work.title"
          :description="work.description"
          :descriptionDetail="work.descriptionDetail"
          :skills="getSkills(work.skills)"
          @selected="selected = work.title"
          @close="selected = null"
          :isSelected="selected === work.title"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorkCard from '@/components/WorksView/WorkCard.vue'
import TagSearch from '@/components/WorksView/TagSearch.vue'
import { getSkills } from '@/utils'
import { ref } from 'vue'
import { load } from 'js-yaml'
import worksYaml from '@/assets/works.yaml?raw'
import { Work } from '@/models'

const selected = ref<string | null>(null)

const works = load(worksYaml) as Work[]
</script>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 12px;
}
.tagSearch {
  flex-grow: 0;
  flex-shrink: 0;
}
.works {
  @include borderedFrame;
  overflow: auto;
  min-height: 0;
}
.elements {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: max-content;
  gap: 12px;
  justify-items: center;
}
</style>
