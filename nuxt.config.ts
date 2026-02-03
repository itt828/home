import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
    modules: [
        "@unocss/nuxt",
        "@nuxt/content",
        "@vueuse/nuxt",
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
            routes: ["/", "/blog/**"],
        },
        alias: {
            canvas: fileURLToPath(new URL("./mocks/canvas.mjs", import.meta.url)),
        },
    },
    ogImage: {
        zeroRuntime: true,
        fonts: ["Noto+Sans+JP:700"],
    },
});