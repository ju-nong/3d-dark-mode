// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],

    app: {
        head: {
            charset: "utf-8",
            title: "3D Dark Mode",
            meta: [
                { name: "description", content: "다크모드를 3D로 만나보세요!" },
                { name: "author", content: "이준용" },
                { name: "theme-color", content: "#000" },
                { name: "keywords", content: "Darkmode, 3D, Cute" },
                { property: "og:title", content: "3D Dark Mode" },
                { property: "og:type", content: "website" },
                {
                    property: "og:site:name",
                    content: "3d-dark-mode.vercel.app",
                },
                {
                    property: "og:url",
                    content: "https://3d-dark-mode.vercel.app/",
                },
                { property: "og:image", content: "/favicon.png" },
            ],
            link: [{ rel: "icon", href: "/favicon.png", type: "image/png" }],
        },
    },
});
