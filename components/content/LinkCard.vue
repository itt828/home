<template>
    <NuxtLink
        :to="url"
        target="_blank"
        class="not-prose my-4 block overflow-hidden rounded-lg border border-gray-200 bg-white no-underline transition-colors hover:bg-gray-50"
    >
        <div v-if="pending" class="flex h-32 animate-pulse">
            <div class="h-full w-full bg-gray-100 p-4">
                <div class="mb-2 h-4 w-3/4 rounded bg-gray-200" />
                <div class="h-3 w-1/2 rounded bg-gray-200" />
            </div>
        </div>

        <div v-else class="flex h-32">
            <div class="flex flex-1 flex-col justify-between p-4 overflow-hidden">
                <div>
                    <div class="line-clamp-1 text-sm font-bold text-gray-900">
                        {{ data?.title || url }}
                    </div>
                    <div class="mt-1 line-clamp-2 text-xs text-gray-500">
                        {{ data?.description }}
                    </div>
                </div>
                <div class="mt-2 flex items-center text-xs text-gray-400">
                    <div v-if="favicon" class="mr-1 h-4 w-4">
                        <img :src="favicon" alt="" class="h-full w-full object-contain" />
                    </div>
                    <span class="truncate">{{ domain }}</span>
                </div>
            </div>
            <div
                v-if="data?.image"
                class="w-1/3 max-w-[200px] shrink-0 bg-cover bg-center md:w-48"
                :style="{ backgroundImage: `url(${data.image})` }"
            />
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
    url: {
        type: String,
        required: true,
    },
});

const { data, pending } = useFetch("/api/metadata", {
    query: { url: props.url },
    lazy: true,
    server: false, // Client-side fetch to avoid hydration mismatch if server is slow? Or allow server for SEO?
    // Better to allow server side for initial render if possible, but 'server: false' is safer for now if the API might be slow or rate limited from server IP.
    // However, for SEO, server side is better. Let's try default (server: true) but with lazy.
    // Actually, let's stick to lazy: true which implies it might load later.
});

const domain = computed(() => {
    try {
        return new URL(props.url).hostname;
    } catch {
        return "";
    }
});

const favicon = computed(() => {
    if (!domain.value) return "";
    return `https://www.google.com/s2/favicons?domain=${domain.value}&sz=32`;
});
</script>