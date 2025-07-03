<template>
  <div class="min-h-screen pt-20 bg-black overflow-hidden">
    <!-- Matrix Background -->
    <div class="fixed inset-0 matrix-bg opacity-10 pointer-events-none"></div>

    <!-- Hero Section -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Epic Badge -->
          <div
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm"
          >
            <div
              class="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"
            ></div>
            <span class="text-sm font-medium text-cyan-300 code-font"
              >PROJECT_SHOWCASE.active</span
            >
          </div>

          <h1 class="text-6xl md:text-8xl font-black mb-6 graffiti-font">
            <span class="text-white">OUR_PORTFOLIO</span>
            <span
              class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent cyber-glow text-4xl md:text-6xl mt-2"
            >
              .showcase()
            </span>
          </h1>

          <p
            class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed code-font"
          >
            <span class="text-green-400">//</span> Real projects, real impact,
            real results<br />
            <span class="text-cyan-400">const</span> portfolio =
            <span class="text-purple-400">getEpicWork()</span>.<span
              class="text-pink-400"
              >filter</span
            >(p => p.isLegendary);
          </p>
        </div>
      </div>
    </section>

    <!-- Epic Filter Tabs -->
    <section
      class="py-8 bg-black/95 backdrop-blur-xl sticky top-20 z-40 border-b border-cyan-500/30"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 graffiti-font relative overflow-hidden group',
              selectedCategory === category
                ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-gray-300 border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-300',
            ]"
          >
            <span class="relative z-10">{{ category.toUpperCase() }}</span>
            <div
              v-if="selectedCategory !== category"
              class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </button>
        </div>
      </div>
    </section>

    <!-- Epic Portfolio Grid -->
    <section class="py-20 bg-gradient-to-b from-black to-slate-950 relative">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 backdrop-blur-sm"
            :class="`animate-fade-in-up animation-delay-${((index % 3) + 1) * 100}`"
            data-stagger
          >
            <!-- Epic Project Preview -->
            <div class="relative overflow-hidden h-64">
              <div
                class="absolute inset-0 bg-gradient-to-br"
                :class="project.gradient"
              ></div>
              <div class="absolute inset-0 bg-black/40"></div>

              <!-- Terminal Window Effect -->
              <div class="absolute top-4 left-4 right-4">
                <div class="flex items-center space-x-2 mb-4">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div class="bg-black/60 rounded p-2 backdrop-blur-sm">
                  <p class="text-green-400 font-mono text-xs">
                    {{ project.codeSnippet }}
                  </p>
                </div>
              </div>

              <!-- Tech Icons -->
              <div class="absolute top-4 right-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center border border-gray-600/50 group-hover:border-cyan-500/50 transition-colors duration-300"
                >
                  <Icon
                    :name="project.icon"
                    class="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
                  />
                </div>
              </div>

              <!-- Epic Hover Overlay with Website Preview -->
              <div
                class="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col"
              >
                <!-- Website Preview Mockup -->
                <div class="flex-1 p-4 overflow-hidden">
                  <div
                    class="w-full h-full bg-gradient-to-br from-slate-900 to-black rounded-lg border border-cyan-500/30 relative overflow-hidden"
                  >
                    <!-- Browser Window -->
                    <div
                      class="flex items-center space-x-2 p-2 border-b border-gray-700"
                    >
                      <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div class="flex-1 text-center">
                        <div
                          class="bg-gray-800 rounded px-2 py-1 text-xs text-gray-400 code-font"
                        >
                          {{ project.mockupUrl }}
                        </div>
                      </div>
                    </div>

                    <!-- Website Content Preview -->
                    <div class="p-3 space-y-2">
                      <div class="flex items-center space-x-2">
                        <div
                          class="w-6 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded"
                        ></div>
                        <div class="w-16 h-2 bg-gray-600 rounded"></div>
                      </div>
                      <div class="space-y-1">
                        <div class="w-full h-1 bg-gray-700 rounded"></div>
                        <div class="w-3/4 h-1 bg-gray-700 rounded"></div>
                        <div class="w-1/2 h-1 bg-gray-700 rounded"></div>
                      </div>
                      <div class="grid grid-cols-3 gap-1 mt-2">
                        <div
                          class="h-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded"
                        ></div>
                        <div
                          class="h-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded"
                        ></div>
                        <div
                          class="h-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="p-4">
                  <div class="flex space-x-3 justify-center">
                    <button
                      @click="previewProject(project)"
                      class="flex items-center px-4 py-2 bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg hover:scale-105 transition-transform duration-300 text-white font-bold text-sm"
                    >
                      <Icon name="lucide:eye" class="w-4 h-4 mr-2" />
                      PREVIEW
                    </button>
                    <button
                      @click="openProject(project)"
                      class="flex items-center px-4 py-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg hover:scale-105 transition-transform duration-300 text-white font-bold text-sm"
                    >
                      <Icon name="lucide:external-link" class="w-4 h-4 mr-2" />
                      LAUNCH
                    </button>
                  </div>
                  <p class="text-cyan-300 font-mono text-xs mt-2 text-center">
                    hover.preview().click().execute()
                  </p>
                </div>
              </div>
            </div>

            <!-- Epic Project Info -->
            <div class="p-6 relative z-10">
              <div class="flex items-center justify-between mb-3">
                <span
                  class="text-xs font-bold px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-600 text-cyan-300 rounded-md code-font border border-cyan-500/30"
                >
                  {{ project.category.toLowerCase() }}
                </span>
                <div class="flex items-center">
                  <div class="flex text-yellow-400">
                    <Icon
                      v-for="i in Math.floor(project.rating)"
                      :key="i"
                      name="lucide:star"
                      class="w-3 h-3 fill-current"
                    />
                  </div>
                  <span class="text-sm ml-2 text-gray-400 code-font">{{
                    project.rating
                  }}</span>
                </div>
              </div>

              <h3
                class="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300 graffiti-font"
              >
                {{ project.title }}
              </h3>

              <p class="text-gray-300 text-sm leading-relaxed mb-4">
                {{ project.description }}
              </p>

              <!-- Technologies with Better Visibility -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-xs px-2 py-1 bg-black/50 text-cyan-300 rounded border border-cyan-500/30 code-font font-medium"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Project Stats -->
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-400 code-font">
                  <span class="text-green-400">duration:</span>
                  {{ project.duration }}
                </span>
                <span class="text-gray-400 code-font">
                  <span class="text-purple-400">client:</span>
                  {{ project.client }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12" v-if="hasMoreProjects">
          <Button size="lg" variant="outline" class="group">
            Load More Projects
            <Icon
              name="lucide:arrow-down"
              class="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform"
            />
          </Button>
        </div>
      </div>
    </section>

    <!-- Epic Client Testimonials -->
    <section
      class="py-20 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden"
    >
      <div class="absolute inset-0 matrix-bg opacity-5"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-7xl font-black mb-6 graffiti-font">
            <span class="text-white">CLIENT_FEEDBACK</span>
            <span
              class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent cyber-glow text-4xl md:text-6xl mt-2"
            >
              .testimonials()
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto code-font">
            <span class="text-green-400">//</span> Real feedback from real
            clients who've seen real results
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            class="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 hover:border-cyan-500/50 p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 backdrop-blur-sm animate-fade-in-up"
            :class="`animation-delay-${(index + 1) * 200}`"
            data-stagger
          >
            <!-- Terminal Header -->
            <div
              class="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-700"
            >
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
              <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="ml-4 code-font text-xs text-gray-400"
                >~/testimonials/client_${index + 1}.json</span
              >
            </div>

            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <Icon
                  v-for="i in 5"
                  :key="i"
                  name="lucide:star"
                  class="w-4 h-4 fill-current"
                />
              </div>
              <span class="ml-2 text-yellow-400 code-font text-sm font-bold"
                >5.0/5.0</span
              >
            </div>

            <p class="text-gray-300 mb-6 leading-relaxed code-font text-sm">
              <span class="text-gray-500">/*</span><br />
              {{ testimonial.content }}<br />
              <span class="text-gray-500">*/</span>
            </p>

            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
              >
                <span class="text-white font-bold graffiti-font">{{
                  testimonial.author.charAt(0)
                }}</span>
              </div>
              <div>
                <div
                  class="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 graffiti-font"
                >
                  {{ testimonial.author }}
                </div>
                <div class="text-sm text-cyan-400 code-font">
                  {{ testimonial.position }}
                </div>
              </div>
            </div>

            <!-- Hover glow effect -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Epic CTA Section -->
    <section
      class="py-20 bg-gradient-to-r from-green-600 to-cyan-600 text-white relative overflow-hidden"
    >
      <div class="absolute inset-0 bg-black/20"></div>
      <div
        class="absolute top-0 left-0 w-full h-full matrix-bg opacity-10"
      ></div>

      <div class="relative z-10 container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 graffiti-font">
          READY_TO_COLLABORATE.init()?
        </h2>
        <p
          class="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto code-font"
        >
          <span class="text-black">if</span> (project.hasVision) {
          <span class="text-black">contact()</span>.<span class="text-black"
            >then</span
          >(magic => buildEpicStuff(magic)); }
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact">
            <Button
              size="lg"
              variant="outline"
              class="bg-black text-cyan-300 hover:bg-gray-900 border-black text-lg px-8 py-4 graffiti-font"
            >
              <Icon name="lucide:terminal" class="w-5 h-5 mr-2" />
              ./start_project.sh
            </Button>
          </NuxtLink>
          <Button
            size="lg"
            class="bg-black/20 hover:bg-black/30 backdrop-blur text-lg px-8 py-4 code-font"
          >
            <Icon name="lucide:download" class="w-5 h-5 mr-2" />
            download_portfolio.zip
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Portfolio - XMTRXI | Our Work & Projects",
  meta: [
    {
      name: "description",
      content:
        "Explore our portfolio of innovative digital solutions, web applications, mobile apps, and design projects that have transformed businesses.",
    },
  ],
});

const selectedCategory = ref("All");
const hasMoreProjects = ref(true);

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
    icon: "lucide:shopping-cart",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    duration: "3 months",
    client: "RetailCorp",
    rating: 4.9,
    gradient: "from-green-500/20 to-emerald-600/20",
    codeSnippet: "$ npm run build:production",
    mockupUrl: "retailcorp.shop",
    liveUrl: "https://demo.retailcorp.com",
    previewUrl: "/preview/ecommerce-platform",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    description:
      "Patient management system with telemedicine capabilities and secure health data synchronization.",
    category: "Mobile Apps",
    icon: "lucide:heart-pulse",
    technologies: ["React Native", "Firebase", "HealthKit"],
    duration: "4 months",
    client: "MedTech Solutions",
    rating: 4.8,
    gradient: "from-red-500/20 to-pink-600/20",
    codeSnippet: "const health = await HealthKit.getData()",
    mockupUrl: "medtech.app",
    liveUrl: "https://app.medtechsolutions.com",
    previewUrl: "/preview/healthcare-app",
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    description:
      "Complete website overhaul with modern design, improved UX, and enhanced performance optimization.",
    category: "Web Development",
    icon: "lucide:globe",
    technologies: ["Nuxt.js", "Tailwind CSS", "Headless CMS"],
    duration: "2 months",
    client: "TechCorp Inc.",
    rating: 4.9,
    gradient: "from-blue-500/20 to-cyan-600/20",
    codeSnippet: "nuxt generate --modern=server",
    mockupUrl: "techcorp.com",
    liveUrl: "https://www.techcorp.com",
    previewUrl: "/preview/corporate-website",
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description:
      "Real-time financial analytics dashboard with advanced charting and portfolio management features.",
    category: "Web Development",
    icon: "lucide:trending-up",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    duration: "5 months",
    client: "FinanceFlow",
    rating: 4.7,
    gradient: "from-purple-500/20 to-violet-600/20",
    codeSnippet: "SELECT * FROM portfolio WHERE roi > 0.15",
    mockupUrl: "dashboard.financeflow.io",
    liveUrl: "https://dashboard.financeflow.io",
    previewUrl: "/preview/financial-dashboard",
  },
  {
    id: 5,
    title: "Brand Identity System",
    description:
      "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    category: "UI/UX Design",
    icon: "lucide:palette",
    technologies: ["Figma", "Adobe Creative Suite", "Principle"],
    duration: "6 weeks",
    client: "StartupXYZ",
    rating: 5.0,
    gradient: "from-orange-500/20 to-yellow-600/20",
    codeSnippet: "design.createBrand({ iconic: true })",
    mockupUrl: "startupxyz.com",
    liveUrl: "https://www.startupxyz.com",
    previewUrl: "/preview/brand-identity",
  },
  {
    id: 6,
    title: "Enterprise Resource Planning",
    description:
      "Custom ERP solution for manufacturing company with inventory management and supply chain optimization.",
    category: "Enterprise",
    icon: "lucide:factory",
    technologies: ["Angular", ".NET Core", "SQL Server", "Azure"],
    duration: "8 months",
    client: "ManufacturingCo",
    rating: 4.8,
    gradient: "from-slate-500/20 to-gray-600/20",
    codeSnippet: "dotnet publish -c Release --self-contained",
    mockupUrl: "erp.manufacturingco.com",
    liveUrl: "https://erp.manufacturingco.com",
    previewUrl: "/preview/enterprise-erp",
  },
];

const testimonials = [
  {
    id: 1,
    content:
      "XMTRXI delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and innovative features have significantly boosted our online sales.",
    author: "Sarah Johnson",
    position: "CEO, RetailCorp",
  },
  {
    id: 2,
    content:
      "The mobile app they developed for our healthcare practice has revolutionized how we interact with patients. The user experience is seamless and intuitive.",
    author: "Dr. Michael Chen",
    position: "Medical Director, MedTech Solutions",
  },
  {
    id: 3,
    content:
      "Working with XMTRXI was a game-changer for our business. Their expertise in modern web technologies and design thinking helped us achieve our digital transformation goals.",
    author: "David Rodriguez",
    position: "CTO, TechCorp Inc.",
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

// Portfolio interaction functions
const previewProject = (project: any) => {
  // Show project preview modal or navigate to preview page
  console.log(`Previewing project: ${project.title}`);
  // You could implement a modal here or navigate to a detailed preview page
  navigateTo(project.previewUrl);
};

const openProject = (project: any) => {
  // Open live project in new tab
  console.log(`Opening live project: ${project.title}`);
  window.open(project.liveUrl, "_blank");
};
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.animation-delay-100 {
  animation-delay: 0.1s;
}
.animation-delay-200 {
  animation-delay: 0.2s;
}
.animation-delay-300 {
  animation-delay: 0.3s;
}
.animation-delay-400 {
  animation-delay: 0.4s;
}
</style>
