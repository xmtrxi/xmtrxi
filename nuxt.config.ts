import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/content",
    "shadcn-nuxt",
    "@nuxtjs/seo",
  ],

  // Enhanced SEO Configuration
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
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "XMTRXI - Transform Your Digital Vision",
      meta: [
        {
          name: "description",
          content:
            "Premium digital agency crafting extraordinary web experiences, mobile apps, and digital solutions that drive business growth and user engagement.",
        },
        {
          name: "keywords",
          content:
            "web development, mobile apps, UI/UX design, digital agency, Nuxt.js, Vue.js, React, digital transformation, e-commerce, enterprise solutions",
        },
        { name: "author", content: "XMTRXI Team" },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "XMTRXI" },
        { property: "og:locale", content: "en_US" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@xmtrxi" },
        { name: "theme-color", content: "#8b5cf6" },
        { name: "msapplication-TileColor", content: "#8b5cf6" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://xmtrxi.com" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "XMTRXI",
            description:
              "Premium digital agency crafting extraordinary web experiences and digital solutions.",
            url: "https://xmtrxi.com",
            logo: "https://xmtrxi.com/logo.png",
            sameAs: [
              "https://twitter.com/xmtrxi",
              "https://linkedin.com/company/xmtrxi",
              "https://github.com/xmtrxi",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Remote",
              addressLocality: "Remote",
              addressRegion: "Remote",
              postalCode: "0000",
              addressCountry: "Kenya",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+254718240819",
              contactType: "customer service",
              email: "hello@xmtrxi.com",
            },
          }),
        },
      ],
    },
  },

  css: ["~/assets/css/tailwind.css"],
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
    componentDir: "./components/ui",
  },

  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
  },

  // Image optimization
  image: {
    format: ["webp", "avif"],
    quality: 80,
  },

  // Font optimization
  fonts: {
    google: {
      families: {
        // Nerdy coding fonts
        "Fira Code": [300, 400, 500, 600, 700],
        "Source Code Pro": [400, 500, 600, 700, 900],
        "Space Mono": [400, 700],
        "JetBrains Mono": [400, 500, 600, 700, 800],
        // Graffiti/Street style fonts
        Orbitron: [400, 500, 600, 700, 800, 900],
        Rajdhani: [300, 400, 500, 600, 700],
        "Exo 2": [300, 400, 500, 600, 700, 800, 900],
        Teko: [300, 400, 500, 600, 700],
      },
    },
  },

  // Content module configuration
  content: {
    highlight: {
      theme: {
        default: "github-dark",
        dark: "github-dark",
      },
      preload: [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini",
      ],
    },
    markdown: {
      anchorLinks: false,
    },
    documentDriven: false,
  },
});
