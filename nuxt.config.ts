// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],

    app: {
        head: {
            charset: "utf-8",
            title: "3D Dark Mode",
            meta: [
                { name: "description", content: "다크모드를 3D로 만나보세요!" },
                { name: "author", content: "ju-nong" },
            ],
        },
    },
});
