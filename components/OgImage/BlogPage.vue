<script setup lang="ts">
import { loadDefaultJapaneseParser } from 'budoux';

const props = withDefaults(
    defineProps<{
        title?: string;
        description?: string;
        date?: string;
    }>(),
    {
        title: "Post Title",
        description: "",
        date: "",
    },
);

const parser = loadDefaultJapaneseParser();
const parsedTitle = computed(() => parser.parse(props.title).join('<wbr>'));
const parsedDescription = computed(() => props.description ? parser.parse(props.description).join('<wbr>') : "");
</script>

<template>
    <div class="h-full w-full flex flex-col justify-between bg-white p-16 pt-20 pb-20">
        <div class="flex flex-col gap-6">
            <div class="text-3xl font-bold text-gray-400">
                iitt.dev
            </div>
            <h1 
                class="text-[70px] font-bold text-gray-900 leading-tight" 
                style="word-break: keep-all; overflow-wrap: anywhere;"
                v-html="parsedTitle"
            />
            <p
                v-if="description"
                class="text-[32px] text-gray-600 leading-normal line-clamp-2"
                style="word-break: keep-all; overflow-wrap: anywhere;"
                v-html="parsedDescription"
            />
        </div>
        
        <div v-if="date" class="flex items-center gap-2 text-3xl text-gray-500 font-medium">
             <div class="i-carbon-calendar" />
             {{ date }}
        </div>
    </div>
</template>
