<template>
  <div :class="$style.card">
    <div :class="$style.image">
      <img src="/src/assets/knoq.png" />
    </div>
    <div :class="$style.description">
      <div :class="$style.title">hoge</div>
      <div>
        <span :class="$style.text">
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああaaaaaaaaaaaaaaaaaあああああいいいいいいいいい
        </span>
      </div>
    </div>
    <div :class="$style.skillContainer">
      <SkillTag />
      <SkillTag />
      <SkillTag />
      <SkillTag />
    </div>
  </div>
</template>
<script setup lang="ts">
import SkillTag from "../SkillTag.vue";
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
  gap: 4px;
}
.image {
  display: flex;
  justify-content: center;
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
