import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
    modules: [
        "@unocss/nuxt",
        "@nuxt/content",
        "@vueuse/nuxt",
        "@nuxt/fonts",
        "nuxt-og-image",
        "@nuxt/icon",
        "@nuxtjs/seo",
    ],
    devtools: { enabled: true },
    css: ["@unocss/reset/tailwind.css"],
    site: {
        url: "https://iitt.dev",
        name: "iitt.dev",
    },
    content: {
        experimental: { nativeSqlite: true },
    },
    compatibilityDate: "2026-02-04",
    nitro: {
        preset: "cloudflare_module",
        cloudflare: {
            deployConfig: true,
            nodeCompat: true,
        },
        prerender: {
            crawlLinks: true,
            routes: ["/"],
        },
        alias: {
            canvas: fileURLToPath(new URL("./mocks/canvas.mjs", import.meta.url)),
        },
    },
    ogImage: {
        zeroRuntime: true,
    },
    fonts: {
        defaults: {
            subsets: ["latin", "latin-ext", "japanese"],
        },
        families: [
            {
                name: "M PLUS 1",
                // name: "Noto Sans JP",
                weights: [400, 500, 700],
                global: true,
            },
        ],
    },
});