<script setup lang="ts">
import { jaModel, Parser } from 'budoux';

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

const parser = new Parser(jaModel)
const parsedTitle = computed(() => parser.parse(props.title));
const parsedDescription = computed(() => props.description ? parser.parse(props.description) : "");
</script>

<template>
    <div class="h-full w-full flex flex-col justify-between bg-white p-16 pt-20 pb-20">
        <div class="flex flex-col gap-6">
            <div class="text-3xl font-bold text-gray-400">
                iitt.dev
            </div>
            <h1 class="text-[70px] font-bold text-gray-900 leading-tight">
                <span v-for="(s, i) in parsedTitle" :key="i">
                    {{ s }}
                </span>
            </h1>
            <p v-if="description" class="text-[32px] text-gray-600 leading-normal line-clamp-2">
                <span v-for="(s, i) in parsedDescription" :key="i">
                    {{ s }}
                </span>
            </p>
        </div>

        <div v-if="date" class="flex items-baseline gap-2 text-3xl text-gray-500 font-medium">
             <Icon name="mdi:calendar" mode="svg" />
             {{ date }}
        </div>
    </div>
</template>
