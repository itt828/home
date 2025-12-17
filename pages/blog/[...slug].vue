<template>
	<div class="py-8 pt-20 max-w-4xl mx-auto px-4">
		<article class="max-w-none">
			<ContentDoc v-slot="{ doc }">
				<div class="mb-8 border-b border-gray-200 pb-8">
					<NuxtLink
						to="/blog"
						class="text-gray-500 hover:text-gray-900 mb-4 inline-flex items-center text-sm"
					>
						<div class="i-carbon-arrow-left mr-1" /> Back to Blog
					</NuxtLink>
					<h1 class="text-4xl font-bold text-gray-900 mb-4 mt-2">
						{{ doc.title }}
					</h1>
					<div class="text-gray-500">
						{{ new Date(doc.date).toLocaleDateString() }}
					</div>
				</div>

				<div class="prose prose-gray max-w-none">
					<ContentRenderer :value="doc" />
				</div>
			</ContentDoc>
		</article>
	</div>
</template>

<script setup>
// No script needed usually, ContentDoc handles fetching
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
