<template>
  <div :class="$style.bar">
    <span> 検索バー: 🏗️実装中 </span>
    <span> 🔍 </span>
  </div>
</template>
<script setup lang="ts"></script>

<style module lang="scss">
.bar {
  height: 48px;
  @include borderedFrame;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}
</style>
