<template>
	<div class="mt-4">
		<article v-if="page" class="max-w-none">
			<div class="mb-8 border-b border-gray-200 pb-8">
				<NuxtLink
					to="/blog"
					class="text-gray-500 hover:text-gray-900 mb-4 inline-flex items-center text-sm"
				>
					<div class="i-carbon-arrow-left mr-1" /> Back to Blog
				</NuxtLink>
				<h1 class="text-4xl font-bold text-gray-900 mb-4 mt-2">
					{{ page.title }}
				</h1>
				<div class="text-gray-500">
					{{ new Date(page.date).toLocaleDateString() }}
				</div>
			</div>

			<div class="prose prose-gray max-w-none">
				<ContentRenderer :value="page" />
			</div>
		</article>
        <div v-else class="py-20 text-center">
            <h1 class="text-2xl font-bold text-gray-700">Post not found</h1>
            <NuxtLink to="/blog" class="text-blue-600 hover:underline mt-4 inline-block">
                Back to Blog list
            </NuxtLink>
        </div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})
</script>

<style>
/*
  Since we don't have @unocss/preset-typography installed explicitly yet (it might be needed),
  we can just add some basic styles or rely on global CSS.
  For now, I'll assume standard HTML tags will be rendered and might need some spacing.
*/
.prose h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
}
.prose h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
}
.prose p {
    margin-bottom: 1.25rem;
    line-height: 1.75;
}
.prose ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1.25rem;
}
.prose code {
    background-color: #f3f4f6;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: monospace;
}
.prose pre {
    background-color: #1f2937;
    color: #f3f4f6;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
}
</style>
