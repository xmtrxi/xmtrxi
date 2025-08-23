<template>
  <footer class="bg-black text-white relative overflow-hidden border-t border-cyan-500/30">
    <!-- Matrix background -->
    <div class="absolute inset-0 matrix-bg opacity-10"></div>
    
    <!-- Animated top border -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
    
    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
      <div class="absolute top-32 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-400 opacity-60"></div>
      <div class="absolute bottom-20 left-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-800 opacity-60"></div>
    </div>
    
    <div class="relative container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Epic Company Info -->
        <div class="md:col-span-2">
          <!-- Logo -->
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center relative">
              <span class="text-black font-black text-xl graffiti-font">X</span>
              <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 class="text-2xl font-black graffiti-font">
                <span class="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  XMTRXI
                </span>
              </h3>
              <p class="text-xs text-gray-400 code-font">// Digital Innovation Lab</p>
            </div>
          </div>
          
          <!-- Description -->
          <div class="mb-6 p-4 bg-black/50 rounded-lg border border-cyan-500/30">
            <p class="text-gray-300 leading-relaxed code-font text-sm">
              <span class="text-green-400">//</span> We don't just build software—we craft digital experiences<br/>
              <span class="text-cyan-400">const</span> mission = <span class="text-purple-400">transformIdeas()</span>.<span class="text-pink-400">intoReality()</span>;
            </p>
          </div>
          
          <!-- Epic Social Links -->
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href"
              class="group w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Icon :name="social.icon" class="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          </div>
        </div>

        <!-- Quick Navigation -->
        <div class="space-y-4">
          <h3 class="font-bold text-white graffiti-font text-lg mb-4">
            <span class="text-green-400">//</span> QUICK_NAV[]
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink 
                :to="link.href"
                class="group flex items-center text-gray-400 hover:text-cyan-300 transition-all duration-300 code-font"
              >
                <span class="text-cyan-500 mr-2 group-hover:text-green-400 transition-colors duration-300">></span>
                {{ link.name.toLowerCase() }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Tech Services -->
        <div class="space-y-4">
          <h3 class="font-bold text-white graffiti-font text-lg mb-4">
            <span class="text-cyan-400">//</span> SERVICES.stack
          </h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service" class="group">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                <span class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm code-font">{{ service }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Epic Newsletter Section -->
      <div class="mt-16 pt-8 border-t border-gray-800">
        <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-gray-700/50">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="mb-6 md:mb-0">
              <h3 class="font-bold text-white graffiti-font text-xl mb-2">
                SUBSCRIBE_TO_UPDATES()
              </h3>
              <p class="text-gray-400 code-font text-sm">
                <span class="text-green-400">//</span> Get notified when we ship something epic
              </p>
            </div>
            <div class="flex w-full md:w-auto max-w-sm">
              <input 
                type="email" 
                placeholder="your.email@domain.com"
                class="flex-1 px-4 py-3 bg-black/50 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white code-font text-sm placeholder:text-gray-500"
              >
              <Button class="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-black rounded-l-none graffiti-font">
                EXEC()
              </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright & Tech Info -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="mb-4 md:mb-0">
            <p class="text-gray-400 text-sm code-font">
              <span class="text-green-400">©</span> {{ currentYear }} XMTRXI. 
              <span class="text-cyan-400">All rights reserved.</span>
            </p>
            <p class="text-gray-500 text-xs code-font mt-1">
              <span class="text-purple-400">Built with</span> Vue.js + Nuxt + ❤️ + ☕
            </p>
            <div class="flex space-x-4 mt-2">
              <NuxtLink to="/privacy" class="text-xs text-gray-500 hover:text-cyan-400 transition-colors code-font">
                privacy_policy()
              </NuxtLink>
              <NuxtLink to="/terms" class="text-xs text-gray-500 hover:text-cyan-400 transition-colors code-font">
                terms_of_service()
              </NuxtLink>
            </div>
          </div>
          
          <!-- Status Indicators -->
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-xs text-gray-400 code-font">System Online</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-200"></div>
              <span class="text-xs text-gray-400 code-font">24/7 Monitoring</span>
            </div>
          </div>
        </div>
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
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
]

const services = [
  'web_development',
  'iot_systems',
  'mobile_apps', 
  'robotics',
  'system_design',
  'devops_cicd',
  'ai_ml_integration'
]
</script>
