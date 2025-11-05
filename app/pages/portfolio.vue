<template>
  <div class="min-h-screen pt-24 pb-20 bg-white dark:bg-slate-950">
    <!-- Hero Section -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h1
            class="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white"
          >
            Our Portfolio
          </h1>
          <p
            class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Real projects, real impact, real results. Explore our latest work
            and see what we can do for you.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section
      class="py-8 bg-gray-50 dark:bg-slate-900 sticky top-24 z-40 border-b border-gray-200 dark:border-slate-800"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-lg font-semibold transition-all duration-300',
              selectedCategory === category
                ? 'bg-black dark:bg-white text-white dark:text-black'
                : 'bg-white dark:bg-slate-800 text-black dark:text-white border border-gray-200 dark:border-slate-700 hover:border-black dark:hover:border-white',
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="group bg-gray-50 dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 overflow-hidden hover:border-black dark:hover:border-white hover:shadow-lg transition-all duration-300"
            :class="`animate-fade-in-up animation-delay-${((index % 3) + 1) * 100}`"
          >
            <!-- Project Image -->
            <div
              class="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center overflow-hidden"
            >
              <Icon
                :name="project.icon"
                class="w-16 h-16 text-gray-400 dark:text-gray-600 group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span
                  class="text-xs font-semibold px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full"
                >
                  {{ project.category }}
                </span>
                <div class="flex text-yellow-400">
                  <Icon
                    v-for="i in Math.floor(project.rating)"
                    :key="i"
                    name="lucide:star"
                    class="w-4 h-4 fill-current"
                  />
                </div>
              </div>

              <h3 class="text-xl font-bold mb-2 text-black dark:text-white">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-xs px-2 py-1 bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded"
                >
                  {{ tech }}
                </span>
              </div>

              <div
                class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700"
              >
                <span class="text-sm text-gray-600 dark:text-gray-400">{{
                  project.duration
                }}</span>
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  class="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  <Icon name="lucide:external-link" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-black dark:bg-white text-white dark:text-black">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Let us help you create something amazing.
        </p>
        <NuxtLink to="/contact">
          <button
            class="bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            Get in Touch
          </button>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

definePageMeta({
  title: "Portfolio - XMTRXI Projects",
});

const selectedCategory = ref("All");

const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "E-commerce",
];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A comprehensive e-commerce solution with AI-powered recommendations.",
    category: "E-commerce",
    icon: "lucide:shopping-cart",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    duration: "3 months",
    rating: 4.9,
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    description: "Patient management system with telemedicine capabilities.",
    category: "Mobile Apps",
    icon: "lucide:heart-pulse",
    technologies: ["React Native", "Firebase"],
    duration: "4 months",
    rating: 4.8,
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Corporate Website",
    description: "Modern website redesign with improved UX and performance.",
    category: "Web Development",
    icon: "lucide:globe",
    technologies: ["Nuxt.js", "Tailwind CSS"],
    duration: "2 months",
    rating: 4.9,
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description:
      "Real-time financial analytics dashboard with advanced charting.",
    category: "Web Development",
    icon: "lucide:trending-up",
    technologies: ["React", "D3.js", "Python"],
    duration: "5 months",
    rating: 4.7,
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Brand Identity System",
    description:
      "Complete brand identity design including logo and guidelines.",
    category: "UI/UX Design",
    icon: "lucide:palette",
    technologies: ["Figma", "Adobe Creative Suite"],
    duration: "6 weeks",
    rating: 5.0,
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "Enterprise Resource Planning",
    description:
      "Custom ERP solution for manufacturing with inventory management.",
    category: "Web Development",
    icon: "lucide:factory",
    technologies: ["Angular", ".NET Core", "SQL Server"],
    duration: "8 months",
    rating: 4.8,
    liveUrl: "https://example.com",
  },
];

const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
    return projects;
  }
  return projects.filter((p) => p.category === selectedCategory.value);
});
</script>
