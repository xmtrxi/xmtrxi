<template>
  <footer class="bg-gray-900 text-white relative overflow-hidden">
    <!-- Animated background -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    
    <div class="relative container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">X</span>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              XMTRXI
            </span>
          </div>
          <p class="text-gray-400 mb-6 max-w-md">
            Transforming ideas into digital experiences. We create innovative solutions that drive business growth and user engagement.
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href"
              class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink 
                :to="link.href"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="font-semibold mb-4">Services</h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <span class="text-gray-400">{{ service }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="mb-4 md:mb-0">
            <h3 class="font-semibold mb-2">Stay Updated</h3>
            <p class="text-gray-400 text-sm">Get the latest news and updates delivered to your inbox.</p>
          </div>
          <div class="flex w-full md:w-auto max-w-sm">
            <input 
              type="email" 
              placeholder="Enter your email"
              class="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            >
            <Button class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-l-none">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-gray-800 text-center">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} XMTRXI. All rights reserved. Made with ❤️ by our team.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'Twitter', href: '#', icon: 'lucide:twitter' },
  { name: 'LinkedIn', href: '#', icon: 'lucide:linkedin' },
  { name: 'GitHub', href: '#', icon: 'lucide:github' },
  { name: 'Instagram', href: '#', icon: 'lucide:instagram' }
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' }
]

const services = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Digital Marketing',
  'Brand Strategy'
]
</script>
