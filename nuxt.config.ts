import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/tailwind.css"],

  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "shadcn-nuxt",
    "@nuxtjs/seo",
    "@nuxtjs/color-mode",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./app/components/ui",
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },
  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
  },
  //
  // // Image optimization
  image: {
    format: ["webp", "avif"],
    quality: 80,
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://xmtrxi.com",
    name: process.env.NUXT_PUBLIC_SITE_NAME || "XMTRXI",
    description:
      process.env.NUXT_PUBLIC_SITE_DESCRIPTION ||
      "Open Source • IoT • Web Apps • System Design • CI/CD • Robotics",
    defaultLocale: "en",
  },

  app: {
    head: {
      title: "xmtrxi - Innovation in Technology",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "xmtrxi: Leading technology solutions and innovation",
        },
        { name: "theme-color", content: "#000000" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
});
