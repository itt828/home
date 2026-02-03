<template>
    <NuxtLayout name="default">
        <template #top>
            <div class="relative h-svh w-svw grid items-center">
                <div class="w-full h-full absolute">
                    <img
                        class="w-full h-full object-cover object-[0%_10%] transition-all duration-500"
                        :class="showOverlay ? 'blur-sm' : ''"
                        src="/public/illust.webp"
                    />
                </div>
                <div
                    class="relative grid gap-4 justify-center justify-items-center transition-opacity duration-500"
                    :class="showOverlay ? '' : 'opacity-0'"
                >
                    <img
                        class="w-32 h-32 rounded-full border-4 border-gray-700 shadow-lg"
                        src="/public/itt828.png"
                    />
                    <h1 class="h1">itt828</h1>
                    <div class="grid grid-flow-col gap-4">
                        <a
                            v-for="account in shortenAccounts"
                            :id="account.service"
                            :href="account.link"
                            target="_blank"
                            class="text-gray-800 hover:text-gray-600 transition-colors flex justify-center items-center"
                        >
                            <div class="text-2xl" :class="account.icon" />
                        </a>
                    </div>
                </div>
                <div
                    class="absolute bottom-0 w-full z-5 bg-gray-700 py-2 flex justify-center transition-opacity duration-500"
                    :class="showOverlay ? '' : 'opacity-0'"
                >
                    <div class="flex items-center gap-1">
                        <span class="h-6 text-white i-mdi-chevron-double-down" />
                        <span class="text-md text-white">プロフィール</span>
                    </div>
                </div>
                <button
                    class="absolute bottom-12 right-4 z-10 p-2 rounded-2 bg-stone-800/50 hover:bg-stone-800/80 backdrop-blur-md text-white transition-colors"
                    @click="showOverlay = !showOverlay"
                >
                    <div :class="showOverlay ? 'i-mdi-blur' : 'i-mdi-blur-off'" class="text-2xl" />
                </button>
            </div>
        </template>
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
                        :id="account.service"
                        class="bg-white shadow-sm grid"
                    >
                        <a v-if="account.link" :href="account.link" target="_blank" class="p-3">
                            <h4 class="h4">{{ account.service }}</h4>
                            <p>{{ account.name }}</p>
                        </a>
                        <div v-else class="p-3 text-gray-700">
                            <h4 class="h4">
                                {{ account.service }}
                            </h4>
                            <p>{{ account.name }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="grid gap-4">
                <h2 class="h2">経歴</h2>
                <Timeline :items="history" />
            </section>

            <section class="grid gap-4">
                <h2 class="h2">制作物</h2>
                <a
                    class="bg-white p-4 rounded-md shadow-md"
                    v-for="work in works"
                    :href="work.link"
                    target="_blank"
                >
                    <div>
                        <h3 class="h3 mb-2">{{ work.name }}</h3>
                        <p class="text-gray-700">
                            {{ work.description }}
                        </p>
                    </div>
                </a>
            </section>
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

defineOgImageComponent("HomePage", {
    title: "iitt.dev",
    description: "home page",
});

const showOverlay = ref(true);

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
        icon: "i-mdi-github",
    },
    {
        service: "X (Twitter)",
        name: "itt828",
        link: "https://x.com/itt828",
        icon: "i-carbon-logo-x",
    },
    {
        service: "AtCoder",
        name: "itt828",
        link: "https://atcoder.jp/users/itt828",
    },
    {
        service: "discord",
        name: ".itt.",
    },
    {
        service: "mixi2",
        name: "iitt",
        link: "https://mixi.social/@iitt",
    },
] as const;
const shortenAccounts: { service: string; link: string; icon: string }[] = [
    accounts[0],
    accounts[1],
];
const works = [
    {
        name: "knoQ",
        description: "サークル内のイベント管理ツール。",
        link: "https://github.com/traPtitech/knoQ-UI",
    },
];
</script>