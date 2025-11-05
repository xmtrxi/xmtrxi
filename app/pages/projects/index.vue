<template>
  <div class="min-h-screen pt-32 pb-20 bg-white">
    <!-- Hero Section -->
    <section class="py-20 border-b border-gray-200">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <div
            class="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6 animate-fade-in-up"
          >
            <div
              class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"
            ></div>
            <span class="text-sm font-medium text-gray-700">Featured Work</span>
          </div>
          <h1
            class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-100"
          >
            Our Projects
          </h1>
          <p
            class="text-xl text-gray-600 animate-fade-in-up animation-delay-200"
          >
            Innovative solutions that drive real business results. Explore our
            portfolio of successful projects across web, mobile, and enterprise
            solutions.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section
      class="py-8 bg-gray-50 sticky top-20 z-40 border-b border-gray-200"
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
                ? 'bg-black text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-black',
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300 hover-lift"
            :class="`animate-fade-in-up animation-delay-${((index % 3) + 1) * 100}`"
          >
            <!-- Project Image -->
            <div
              class="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden relative"
            >
              <div
                class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
              ></div>
              <Icon name="lucide:image" class="w-12 h-12 text-gray-400" />
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-semibold text-gray-600 uppercase">{{
                  project.category
                }}</span>
                <div class="flex text-yellow-400">
                  <Icon
                    v-for="i in Math.floor(project.rating)"
                    :key="i"
                    name="lucide:star"
                    class="w-3 h-3 fill-current"
                  />
                </div>
              </div>

              <h3
                class="text-lg font-bold mb-3 group-hover:text-black transition-colors"
              >
                {{ project.title }}
              </h3>

              <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  class="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Project Stats -->
              <div
                class="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-t border-gray-200"
              >
                <span>{{ project.duration }}</span>
                <span>{{ project.client }}</span>
              </div>

              <!-- Action Buttons -->
              <div class="flex gap-2">
                <button
                  @click="previewProject(project)"
                  class="flex-1 px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <Icon name="lucide:eye" class="w-4 h-4" />
                  Preview
                </button>
                <button
                  @click="openProject(project)"
                  class="flex-1 px-4 py-2 border border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <Icon name="lucide:external-link" class="w-4 h-4" />
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div class="text-center mt-12">
          <button
            class="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
          >
            Load More Projects
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-black text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss your vision and create something amazing together.
        </p>
        <NuxtLink to="/contact">
          <button
            class="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
import { definePageMeta, navigateTo } from "#imports";

definePageMeta({
  title: "Projects - XMTRXI | Our Work",
});

const selectedCategory = ref("All");

const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "E-commerce",
  "Enterprise",
];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A comprehensive e-commerce solution with advanced features like AI-powered recommendations and real-time analytics.",
    category: "E-commerce",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    duration: "3 months",
    client: "RetailCorp",
    rating: 4.9,
    liveUrl: "https://demo.retailcorp.com",
    previewUrl: "/preview/ecommerce-platform",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    description:
      "Patient management system with telemedicine capabilities and secure health data synchronization.",
    category: "Mobile Apps",
    technologies: ["React Native", "Firebase", "HealthKit"],
    duration: "4 months",
    client: "MedTech Solutions",
    rating: 4.8,
    liveUrl: "https://app.medtechsolutions.com",
    previewUrl: "/preview/healthcare-app",
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    description:
      "Complete website overhaul with modern design, improved UX, and enhanced performance optimization.",
    category: "Web Development",
    technologies: ["Nuxt.js", "Tailwind CSS", "Headless CMS"],
    duration: "2 months",
    client: "TechCorp Inc.",
    rating: 4.9,
    liveUrl: "https://www.techcorp.com",
    previewUrl: "/preview/corporate-website",
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description:
      "Real-time financial analytics dashboard with advanced charting and portfolio management features.",
    category: "Web Development",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    duration: "5 months",
    client: "FinanceFlow",
    rating: 4.7,
    liveUrl: "https://dashboard.financeflow.io",
    previewUrl: "/preview/financial-dashboard",
  },
  {
    id: 5,
    title: "Brand Identity System",
    description:
      "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    category: "UI/UX Design",
    technologies: ["Figma", "Adobe Creative Suite", "Principle"],
    duration: "6 weeks",
    client: "StartupXYZ",
    rating: 5.0,
    liveUrl: "https://www.startupxyz.com",
    previewUrl: "/preview/brand-identity",
  },
  {
    id: 6,
    title: "Enterprise Resource Planning",
    description:
      "Custom ERP solution for manufacturing company with inventory management and supply chain optimization.",
    category: "Enterprise",
    technologies: ["Angular", ".NET Core", "SQL Server", "Azure"],
    duration: "8 months",
    client: "ManufacturingCo",
    rating: 4.8,
    liveUrl: "https://erp.manufacturingco.com",
    previewUrl: "/preview/enterprise-erp",
  },
];

const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
    return projects;
  }
  return projects.filter(
    (project) => project.category === selectedCategory.value,
  );
});

const previewProject = (project: any) => {
  navigateTo(project.previewUrl);
};

const openProject = (project: any) => {
  window.open(project.liveUrl, "_blank");
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
}
</style>
