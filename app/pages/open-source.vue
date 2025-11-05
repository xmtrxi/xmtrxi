<template>
  <div class="w-full">
    <!-- Page Header -->
    <section class="section-gradient py-16 md:py-24 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="heading-xl mb-4">Open Source</h1>
        <p class="text-xl text-muted-foreground max-w-3xl">
          Contributing to the community with innovative open-source projects and
          tools. <span class="font-mono text-accent">4 active projects</span>.
        </p>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>

    <!-- Projects -->
    <section class="py-20 md:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Add monospace styling and industrial elements -->
          <div
            v-for="project in projects"
            :key="project.id"
            class="p-6 rounded-xl border border-border hover:border-accent/50 transition-all bg-card hover:shadow-lg relative group"
          >
            <div class="accent-line-top"></div>
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3
                  class="heading-md group-hover:text-accent transition-colors"
                >
                  {{ project.name }}
                </h3>
                <p class="text-xs font-mono text-accent/60 mt-1">
                  // {{ project.language }}
                </p>
              </div>
              <a
                :href="project.github"
                target="_blank"
                class="text-accent hover:text-accent/80 transition-colors"
              >
                <Github class="w-6 h-6" />
              </a>
            </div>
            <p class="text-muted-foreground text-sm mb-4">
              {{ project.description }}
            </p>
            <div
              class="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border"
            >
              <div class="flex items-center gap-1 font-mono">
                <Star class="w-4 h-4" />
                {{ project.stars }}
              </div>
              <div class="flex items-center gap-1 font-mono">
                <GitFork class="w-4 h-4" />
                {{ project.forks }}
              </div>
              <div
                v-if="project.license"
                class="px-2 py-1 bg-accent/10 text-accent rounded font-mono text-xs"
              >
                {{ project.license }}
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 p-8 rounded-xl border border-border bg-card relative">
          <div class="accent-line-top"></div>
          <p class="font-mono text-xs text-accent mb-3">// Contribute</p>
          <h3 class="heading-md mb-4">Contributing to xmtrxi</h3>
          <p class="text-muted-foreground mb-4">
            We welcome contributions from developers of all levels. Check our
            projects on GitHub, open issues for bugs, suggest features, and
            submit pull requests. Your feedback and contributions help us build
            better tools for everyone.
          </p>
          <a
            href="#"
            class="inline-flex px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors font-semibold text-sm font-mono"
          >
            → View Contributing Guidelines
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Github, Star, GitFork } from "lucide-vue-next";

const projects = ref([
  {
    id: 1,
    name: "Vue Query Builder",
    language: "Vue.js",
    description:
      "A flexible, composable query builder component for Vue.js applications.",
    github: "#",
    stars: 2400,
    forks: 350,
    license: "MIT",
  },
  {
    id: 2,
    name: "AI-Toolkit",
    language: "Python",
    description:
      "Utilities and helpers for integrating AI models into your applications.",
    github: "#",
    stars: 1800,
    forks: 280,
    license: "Apache 2.0",
  },
  {
    id: 3,
    name: "Data Pipeline Framework",
    language: "TypeScript",
    description:
      "Modern framework for building scalable data processing pipelines.",
    github: "#",
    stars: 3200,
    forks: 510,
    license: "MIT",
  },
  {
    id: 4,
    name: "Design System Kit",
    language: "Vue.js",
    description:
      "Comprehensive UI component library built with Vue 3 and Tailwind CSS.",
    github: "#",
    stars: 1600,
    forks: 220,
    license: "MIT",
  },
]);
</script>
