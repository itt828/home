export default defineNuxtConfig({
	modules: [
		"@nuxt/eslint",
		"@unocss/nuxt",
		"@nuxt/content",
		"@vueuse/nuxt",
		"nuxt-og-image",
	],
	devtools: { enabled: true },
	css: ["@unocss/reset/tailwind.css"],
	compatibilityDate: "2025-12-17",
	eslint: {
		config: {
			stylistic: {
				indent: "tab",
			},
		},
	},
	ogImage: {
		zeroRuntime: true,
		fonts: ["Noto+Sans+JP:700"],
	},
	content: {
		experimental: { nativeSqlite: true },
	},
	nitro: {
		preset: "cloudflare_module",
		cloudflare: {
			deployConfig: true,
			wrangler: {
				d1_databases: [
					{
						binding: "DB",
						database_name: "home-content",
						database_id: "470a1026-cb29-4cb6-98c4-ac2de6372063",
					},
				],
			},
		},
	},
});
