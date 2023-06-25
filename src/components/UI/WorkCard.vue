<template>
  <div :class="$style.card">
    <div :class="$style.image" />
    <div :class="$style.description">
      <div :class="$style.title">hoge</div>
      <div>
        <span :class="$style.text">
          「ではみなさんは、そういうふうに川だと言われたり、乳の流れたあとだと言われたりしていた、このぼんやりと白いものがほんとうは何かご承知ですか」先生は、黒板につるした大きな黒い星座の
        </span>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.card {
  // height: 423px;
  // width: 338px;
  border: 2px $accent solid;
  border-radius: 16px;
  overflow: hidden;
}
.image {
  width: 100%;
  height: 50%;
  background-color: #444;
}
.description {
  padding: 0 12px;
}
.title {
  margin-bottom: 12px;
  font-size: 2rem;
}
.text {
  overflow-wrap: normal;
  font-size: 1rem;
}
</style>
