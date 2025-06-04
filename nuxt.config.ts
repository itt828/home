// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@unocss/nuxt"],
	ssr: true,
	devtools: { enabled: true },
	compatibilityDate: "2025-05-15",
	eslint: {
		config: {
			stylistic: {
				indent: "tab",
			},
		},
	},
	css: ["@unocss/reset/tailwind.css"],
});
