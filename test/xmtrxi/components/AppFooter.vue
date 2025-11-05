<template>
  <footer class="bg-black text-white border-t border-gray-800">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span class="text-black font-bold text-lg">X</span>
            </div>
            <h3 class="text-xl font-bold">XMTRXI</h3>
          </div>
          <p class="text-gray-400 mb-6 leading-relaxed">
            We transform ideas into powerful digital solutions. From web applications to IoT systems, we deliver excellence.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Icon name="lucide:twitter" class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Icon name="lucide:linkedin" class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Icon name="lucide:github" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink :to="link.href" class="text-gray-400 hover:text-white transition-colors">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold mb-4">Services</h4>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service" class="text-gray-400 hover:text-white transition-colors cursor-pointer">
              {{ service }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="bg-gray-900 rounded-lg p-6 mb-12">
        <h3 class="font-semibold mb-2">Subscribe to Updates</h3>
        <p class="text-gray-400 text-sm mb-4">Get the latest insights on tech and digital innovation.</p>
        <div class="flex gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            class="flex-1 px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600"
          />
          <button class="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} XMTRXI. All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <NuxtLink to="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/terms" class="text-gray-400 hover:text-white text-sm transition-colors">
            Terms of Service
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Open Source", href: "/open-source" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Web Development",
  "Mobile Apps",
  "IoT Systems",
  "System Design",
  "DevOps & CI/CD",
  "AI/ML Integration",
];
</script>
