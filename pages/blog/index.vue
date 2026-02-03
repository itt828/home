<template>
    <div class="mt-4 flex flex-col gap-4">
        <h1 class="h1">ブログ</h1>

        <div class="grid gap-6">
            <div
                v-for="article in posts"
                :key="article.path"
                class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
                <NuxtLink :to="article.path" class="block">
                    <h2
                        class="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors"
                    >
                        {{ article.title }}
                    </h2>
                    <div class="text-sm text-gray-500 mb-4">
                        {{ new Date(article.date).toLocaleDateString() }}
                    </div>
                    <p class="text-gray-600 line-clamp-3">
                        {{ article.description }}
                    </p>
                </NuxtLink>
            </div>
            <div v-if="!posts?.length" class="text-gray-600">No articles found.</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () => {
    return queryCollection("blog").order("date", "DESC").all();
});

useHead({
    title: "ブログ - iitt.dev",
    meta: [],
});
</script>