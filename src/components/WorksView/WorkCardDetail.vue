<template>
  <div :class="$style.card">
    <div :class="$style.image">
      <img :src="props.image" />
    </div>
    <div :class="$style.description">
      <div :class="$style.title">{{ props.title }}</div>
      <div>
        <div :class="$style.text">
          <div v-html="md.render(props.descriptionDetail)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import MarkdownIt from 'markdown-it'

const props = defineProps<{
  image: string
  title: string
  descriptionDetail: string
}>()

const md = new MarkdownIt({
  breaks: true,
  linkify: true
})
</script>

<style module lang="scss">
.card {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  border: 2px $accent solid;
  padding-bottom: 24px;
  border-radius: 12px;
  width: 80%;
  max-width: calc(1080px * 0.5);
  background-color: $background;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 60%;
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
  padding: 8px 20px;
}
.title {
  margin-bottom: 20px;
  font-size: 1.25rem;
}
.text {
  overflow-wrap: normal;
  font-size: 1rem;
  // font-weight: 400;
}
.skillContainer {
  padding: 0 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
