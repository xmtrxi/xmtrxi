<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-8 animate-fade-in-up">
            <Icon name="lucide:folder" class="w-4 h-4 mr-2 text-purple-600" />
            <span class="text-sm font-medium text-purple-600 dark:text-purple-400">Our Work</span>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
            Our Portfolio
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 animate-fade-in-up animation-delay-400">
            Discover the innovative solutions we've crafted for clients across various industries. Each project tells a story of transformation and success.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="py-8 bg-white dark:bg-gray-900 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105',
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
            :class="`animation-delay-${(index % 3 + 1) * 100}`"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 h-64">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
              <div class="absolute top-4 left-4">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Icon :name="project.icon" class="w-6 h-6 text-white" />
                </div>
              </div>
              
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="flex space-x-4">
                  <button class="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Icon name="lucide:eye" class="w-5 h-5 text-white" />
                  </button>
                  <button class="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Icon name="lucide:external-link" class="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-medium px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                  {{ project.category }}
                </span>
                <div class="flex items-center text-yellow-500">
                  <Icon name="lucide:star" class="w-4 h-4 fill-current" />
                  <span class="text-sm ml-1">{{ project.rating }}</span>
                </div>
              </div>
              
              <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {{ project.title }}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {{ project.description }}
              </p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                >
                  {{ tech }}
                </span>
              </div>
              
              <!-- Project Stats -->
              <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{{ project.duration }}</span>
                <span>{{ project.client }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12" v-if="hasMoreProjects">
          <Button size="lg" variant="outline" class="group">
            Load More Projects
            <Icon name="lucide:arrow-down" class="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-purple-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
            :class="`animation-delay-${(index + 1) * 200}`"
          >
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-500">
                <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-4 h-4 fill-current" />
              </div>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              "{{ testimonial.content }}"
            </p>
            
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">{{ testimonial.author.charAt(0) }}</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">{{ testimonial.author }}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">{{ testimonial.position }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Let's create something amazing together. Our team is ready to bring your vision to life.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact">
            <Button size="lg" variant="outline" class="bg-white text-purple-600 hover:bg-gray-100 border-white text-lg px-8 py-4">
              <Icon name="lucide:message-circle" class="w-5 h-5 mr-2" />
              Start a Project
            </Button>
          </NuxtLink>
          <Button size="lg" class="bg-black/20 hover:bg-black/30 backdrop-blur text-lg px-8 py-4">
            <Icon name="lucide:download" class="w-5 h-5 mr-2" />
            Download Portfolio
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Portfolio - XMTRXI | Our Work & Projects',
  meta: [
    { name: 'description', content: 'Explore our portfolio of innovative digital solutions, web applications, mobile apps, and design projects that have transformed businesses.' }
  ]
})

const selectedCategory = ref('All')
const hasMoreProjects = ref(true)

const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce', 'Enterprise']

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A comprehensive e-commerce solution with advanced features like AI-powered recommendations and real-time analytics.',
    category: 'E-commerce',
    icon: 'lucide:shopping-cart',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    duration: '3 months',
    client: 'RetailCorp',
    rating: 4.9
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    description: 'Patient management system with telemedicine capabilities and secure health data synchronization.',
    category: 'Mobile Apps',
    icon: 'lucide:heart-pulse',
    technologies: ['React Native', 'Firebase', 'HealthKit'],
    duration: '4 months',
    client: 'MedTech Solutions',
    rating: 4.8
  },
  {
    id: 3,
    title: 'Corporate Website Redesign',
    description: 'Complete website overhaul with modern design, improved UX, and enhanced performance optimization.',
    category: 'Web Development',
    icon: 'lucide:globe',
    technologies: ['Nuxt.js', 'Tailwind CSS', 'Headless CMS'],
    duration: '2 months',
    client: 'TechCorp Inc.',
    rating: 4.9
  },
  {
    id: 4,
    title: 'Financial Dashboard',
    description: 'Real-time financial analytics dashboard with advanced charting and portfolio management features.',
    category: 'Web Development',
    icon: 'lucide:trending-up',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    duration: '5 months',
    client: 'FinanceFlow',
    rating: 4.7
  },
  {
    id: 5,
    title: 'Brand Identity System',
    description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
    category: 'UI/UX Design',
    icon: 'lucide:palette',
    technologies: ['Figma', 'Adobe Creative Suite', 'Principle'],
    duration: '6 weeks',
    client: 'StartupXYZ',
    rating: 5.0
  },
  {
    id: 6,
    title: 'Enterprise Resource Planning',
    description: 'Custom ERP solution for manufacturing company with inventory management and supply chain optimization.',
    category: 'Enterprise',
    icon: 'lucide:factory',
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure'],
    duration: '8 months',
    client: 'ManufacturingCo',
    rating: 4.8
  }
]

const testimonials = [
  {
    id: 1,
    content: 'XMTRXI delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and innovative features have significantly boosted our online sales.',
    author: 'Sarah Johnson',
    position: 'CEO, RetailCorp'
  },
  {
    id: 2,
    content: 'The mobile app they developed for our healthcare practice has revolutionized how we interact with patients. The user experience is seamless and intuitive.',
    author: 'Dr. Michael Chen',
    position: 'Medical Director, MedTech Solutions'
  },
  {
    id: 3,
    content: 'Working with XMTRXI was a game-changer for our business. Their expertise in modern web technologies and design thinking helped us achieve our digital transformation goals.',
    author: 'David Rodriguez',
    position: 'CTO, TechCorp Inc.'
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})
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

.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
</style>
