<template>
  <div :class="$style.container">
    <TagSearch :class="$style.tagSearch" />
    <div :class="$style.works">
      <div :class="$style.elements">
        <WorkCard
          image="/src/assets/knoq.png"
          title="knoQ"
          description="hoegegee"
          :skills="[{ name: 'Vue', color: '#bbaacc' }]"
        />
        <WorkCard
          image="/src/assets/fooder.png"
          title="knoQ"
          description="hoegegee"
          :skills="[
            { name: 'Vue', color: '#bbaacc' },
            { name: 'Vue2', color: '#f2a' },
          ]"
        />
        <WorkCard
          image="/src/assets/knoq.png"
          title="knoQ"
          description="hoegegee"
          :skills="[{ name: 'Vue', color: '#bbaacc' }]"
        />
        <WorkCard
          image="/src/assets/knoq.png"
          title="knoQ"
          description="hoegegee"
          :skills="[{ name: 'Vue', color: '#bbaacc' }]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorkCard from "../components/UI/WorkCard.vue";
import Section from "../components/UI/Section.vue";
import TagSearch from "../components/UI/TagSearch.vue";
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
  // grid-auto-rows: 440px;
  grid-auto-rows: max-content;
  gap: 12px;
  justify-items: center;
}
</style>
