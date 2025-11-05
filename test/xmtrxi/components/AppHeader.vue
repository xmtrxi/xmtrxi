<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
        : 'bg-white border-b border-gray-100',
    ]"
  >
    <nav class="container mx-auto px-4 py-4 relative z-10">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="group flex items-center space-x-2">
          <div class="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">X</span>
          </div>
          <div>
            <h1 class="text-xl font-bold text-black">XMTRXI</h1>
            <p class="text-xs text-gray-500">Digital Solutions</p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.href"
            class="text-gray-700 hover:text-black font-medium transition-colors text-sm"
            active-class="text-black font-semibold"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <NuxtLink to="/contact">
            <button class="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
              Get Started
            </button>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden p-2">
          <Icon
            :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
            class="w-6 h-6 text-black"
          />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-gray-200 space-y-3 pt-4"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.href"
          class="block text-gray-700 hover:text-black font-medium py-2"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </NuxtLink>
        <NuxtLink to="/contact" @click="closeMobileMenu">
          <button class="w-full bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
            Get Started
          </button>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);
const headerRef = ref<HTMLElement>();

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Open Source", href: "/open-source" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
