<template>
  <Card title="itt">
    <div :class="$style.container">
      <div :class="$style.icon">
        <img src="https://q.trap.jp/api/v3/public/icon/itt" />
      </div>
      <div :class="$style.profile">
        <div v-html="md.render(AboutMeMd)" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/UI/Card.vue'
import MarkdownIt from 'markdown-it'
import AboutMeMd from '@/assets/aboutMe.md?raw'

const md = new MarkdownIt({
  breaks: true,
  linkify: true
})
</script>

<style module lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.icon {
  align-self: center;
  justify-self: center;
  width: 200px;
  height: 200px;

  & > img {
    width: 100%;
    height: 100%;
  }
}
.name {
  font-size: 2rem;
  font-weight: 800;
}
.profile {
  margin-left: 20px;
}
</style>
