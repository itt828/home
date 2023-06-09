<template>
  <div :class="$style.card">
    <div :class="$style.icon"></div>
    <div :class="$style.name">hoge</div>
  </div>
</template>
<script setup lang="ts"></script>
<style module lang="scss">
.card {
  height: 32px;
  border: 2px $accent solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 8px 0 0;

  &:hover {
    background-color: $ui;
    cursor: pointer;
  }
}
.icon {
  width: 12px;
  height: 12px;
  margin: 4px 8px;
  border-radius: 50%;
  background-color: #3a7;
}
</style>
