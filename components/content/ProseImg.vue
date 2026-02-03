<template>
    <div class="prose-img-container">
        <img
            :src="src"
            :alt="alt"
            :width="width"
            :height="height"
            class="cursor-zoom-in rounded-lg transition-transform duration-200 hover:scale-[1.01]"
            @click="isZoomed = true"
        />

        <Teleport to="body">
            <div
                v-if="isZoomed"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity"
                @click="isZoomed = false"
            >
                <img
                    :src="src"
                    :alt="alt"
                    class="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl transition-transform duration-300"
                />
                <button
                    class="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                    @click="isZoomed = false"
                >
                    <div class="i-carbon-close text-2xl" />
                </button>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
defineProps({
    src: {
        type: String,
        default: "",
    },
    alt: {
        type: String,
        default: "",
    },
    width: {
        type: [String, Number],
        default: undefined,
    },
    height: {
        type: [String, Number],
        default: undefined,
    },
});

const isZoomed = ref(false);

// Close on escape key
onMounted(() => {
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") isZoomed.value = false;
    });
});

watch(isZoomed, (val) => {
    if (val) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
});
</script>

<style scoped>
/* Optional: prevent body scroll when zoomed */
:global(body.overflow-hidden) {
    overflow: hidden;
}
</style>