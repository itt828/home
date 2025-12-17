export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@unocss/nuxt', '@nuxt/content', '@vueuse/nuxt'],
	ssr: true,
	devtools: { enabled: true },
	css: ['@unocss/reset/tailwind.css'],
	compatibilityDate: '2025-05-15',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		},
	},
})
