<template>
  <div class="w-full">
    <!-- Page Header -->
    <section class="section-gradient py-16 md:py-24 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="heading-xl mb-4">Our Projects</h1>
        <p class="text-xl text-muted-foreground max-w-3xl">
          Showcase of our innovative work and successful client partnerships.
          Over
          <span class="font-mono text-accent">50+ projects</span> delivered.
        </p>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>

    <!-- Projects Grid -->
    <section class="py-20 md:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Add monospace year labels and industrial styling -->
          <div
            v-for="project in projects"
            :key="project.id"
            class="group rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all bg-card hover:shadow-lg relative"
          >
            <div class="accent-line-top"></div>
            <div class="relative h-48 overflow-hidden bg-secondary">
              <img
                :src="`/placeholder.svg?height=300&width=500&query=${project.image}`"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div
                class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"
              ></div>
              <div
                class="absolute top-4 right-4 px-3 py-1 bg-black/60 rounded font-mono text-xs text-white backdrop-blur"
              >
                {{ project.year }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="heading-md mb-2">{{ project.title }}</h3>
              <p class="text-muted-foreground mb-4 text-sm">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-mono"
                >
                  {{ tech }}
                </span>
              </div>
              <div
                class="flex justify-between items-center text-xs text-muted-foreground pt-4 border-t border-border"
              >
                <span>View Project</span>
                <a
                  href="#"
                  class="text-accent hover:text-accent/80 transition-colors"
                >
                  <ArrowRight class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-gradient py-20 md:py-32 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="heading-lg mb-6">Ready to Start Your Next Project?</h2>
        <NuxtLink
          to="/contact"
          class="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
        >
          Let's Build Together
        </NuxtLink>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ArrowRight } from "lucide-vue-next";

const projects = ref([
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce solution handling millions of transactions daily with real-time inventory management.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Stripe"],
    image: "ecommerce platform dashboard",
    year: "2024",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description:
      "HIPAA-compliant platform for patient management and telemedicine services.",
    technologies: ["React", "Python", "AWS", "MongoDB"],
    image: "healthcare management interface",
    year: "2023",
  },
  {
    id: 3,
    title: "FinTech Application",
    description:
      "Secure financial management app with real-time analytics and blockchain integration.",
    technologies: ["React Native", "Go", "PostgreSQL", "Blockchain"],
    image: "financial dashboard analytics",
    year: "2023",
  },
  {
    id: 4,
    title: "Real Estate Portal",
    description:
      "Interactive property marketplace with AR visualization and virtual tours.",
    technologies: ["Next.js", "Three.js", "Firebase", "TypeScript"],
    image: "real estate property listing",
    year: "2024",
  },
  {
    id: 5,
    title: "AI-Powered Analytics Tool",
    description:
      "Machine learning platform providing predictive insights and data visualization.",
    technologies: ["Python", "TensorFlow", "React", "BigQuery"],
    image: "machine learning analytics dashboard",
    year: "2024",
  },
  {
    id: 6,
    title: "Social Collaboration Platform",
    description:
      "Real-time team collaboration tool with video conferencing and file sharing.",
    technologies: ["Vue.js", "WebRTC", "Node.js", "Redis"],
    image: "collaboration platform interface",
    year: "2023",
  },
]);
</script>
