<template>
  <NuxtLayout name="default">
    <template #top>
      <div class="relative h-screen w-screen self-center grid items-center">
        <div class="w-full h-full absolute">
          <img
            class="w-full h-full bg-stone-400 blr-sm object-cover object-[0%_10%]"
          />
          <!-- <img -->
          <!-- class="w-full h-full bg-stone-400 blur-sm object-cover object-[0%_10%]" -->
          <!-- src="/public/illust.webp" -->
          <!-- /> -->
        </div>
        <div class="relative grid gap-4 justify-center justify-items-center">
          <img
            class="w-32 h-32 rounded-full border-4 border-gray-700 shadow-lg"
            src="/public/itt828.png"
          />
          <h1 class="h1">itt828</h1>
        <div class="grid grid-cols-2 gap-4">
          <a
            target="_blank"
            href="https://github.com/itt828"
            class="text-gray-800 hover:text-gray-600 transition-colors flex justify-center items-center"
          >
            <div class="i-mdi-github text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://x.com/itt828"
            class="text-gray-800 hover:text-gray-600 transition-colors flex justify-center items-center"
          >
            <div class="i-carbon-logo-x text-2xl" />
          </a>
        </div>
        </div>

        <div
          class="absolute bottom-0 w-full z-5 bg-gray-700 py-2 flex justify-center"
        >
          <div class="flex items-center">
            <div class="text-xl i-mdi-chevron-double-down text-white" />
            <span class="text-sm text-white font-medium">プロフィール</span>
          </div>
        </div>
      </div>
    </template>

    <div class="flex gap-4 flex-col items-stretch">
      <div class="grid gap-8">
        <section class="grid gap-4">
          <h2 class="h2">私について</h2>
          <p>
            東京科学大学
            物質理工学院の修士1年生です。材料について、シミュレーションや数値計算による研究を行っています。
            <br />
            サークル(
            <a class="nav-link" href="https://trap.jp" target="_blank"
              >デジタル創作同好会traP</a
            >
            )ではフロントエンド中心でweb開発を行っています。
            その他趣味開発でLinuxデスクトップのカスタム(盆栽)などをしています。
            <br />
            大学進学に伴い上京してきたので、散歩が趣味です。
            <br />
            最近は板タブを買って、たまにイラストの練習をしています。
          </p>
        </section>

        <section class="grid gap-4">
          <h2 class="h2">連絡先・アカウント</h2>
          <div class="grid gap-2 grid-cols-3">
            <div
              v-for="account in accounts"
              :id="account.name"
              class="bg-white shadow-sm grid"
            >
              <a
                v-if="account.link"
                :href="account.link"
                target="_blank"
                class="p-3"
              >
                <h4 class="h4">{{ account.service }}</h4>
                <p>{{ account.name }}</p>
              </a>
              <div v-else class="p-3 text-gray-700">
                <h4 class="h4">{{ account.service }}</h4>
                <p>{{ account.name }}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <h2 class="h2">経歴</h2>
          <Timeline :items="history" />
        </section>

        <!-- <section class="grid gap-4"> -->
        <!-- <h2 class="h2">制作物</h2> -->
        <!-- </section> -->
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "iitt.dev",
});

definePageMeta({
  layout: false,
});

const history = [
  {
    period: ["2025年4月", null],
    title: "東京科学大学 物質理工学院 修士課程",
    description: "",
  },
  {
    period: ["2021年4月", "2025年3月"],
    title: "東京工業大学 物質理工学院 学士課程",
    description: "2024年9月から東京科学大学に大学名が変更されました。",
  },
  {
    period: ["2018年4月", "2021年3月"],
    title: "***高校",
    description: "",
  },
];

const accounts = [
  {
    service: "GitHub",
    name: "itt828",
    link: "https://github.com/itt828",
  },
  {
    service: "X (Twitter)",
    name: "itt828",
    link: "https://x.com/itt828",
  },
  {
    service: "AtCoder",
    name: "itt828",
    link: "https://atcoder.jp/users/itt828",
  },
  {
    service: "discord",
    name: ".itt.",
    link: null,
  },
  {
    service: "mixi2",
    name: "iitt",
    link: "https://mixi.social/@iitt",
  },
];
//const works = [
//
//]
</script>
