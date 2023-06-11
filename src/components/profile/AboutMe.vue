<template>
  <div :class="$style.container">
    <div :class="$style.icon">
      <img src="https://q.trap.jp/api/v3/public/icon/itt" />
    </div>
    <div :class="$style.profile">
      <div :class="$style.name">itt</div>
      所属
      <ul>
        <li>東京工業大学 学士3年</li>
        <li>東京工業大学デジタル創作同好会traP所属</li>
      </ul>
      <div>traPで主にフロントエンドを書いています。</div>
      リンク
      <ul>
        <li>github:</li>
        <li>twitter:</li>
        <li>ブログ(traP)</li>
        <li>ブログ(個人)</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
