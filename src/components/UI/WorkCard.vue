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
  </div>
</template>
<script setup lang="ts"></script>

<style module lang="scss">
.card {
  border: 2px $accent solid;
  border-radius: 12px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.image {
  height: 60%;
  display: flex;
  justify-content: center;
  // max-height: 200px;
  // max-height: min(60%, 200px);
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
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
