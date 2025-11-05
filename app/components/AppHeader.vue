<template>
  <nav
    class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl">
          <div
            class="w-8 h-8 bg-accent rounded flex items-center justify-center text-white"
          >
            <span class="text-xs font-bold">X</span>
          </div>
          <span class="hidden sm:inline">xmtrxi</span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            to="/"
            class="px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
          >
            Services
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
          >
            Projects
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/open-source"
            class="px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
          >
            Open Source
          </NuxtLink>
          <NuxtLink
            to="/careers"
            class="px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
          >
            Careers
          </NuxtLink>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-2">
          <button
            @click="
              colorMode.preference =
                colorMode.preference === 'dark' ? 'light' : 'dark'
            "
            class="p-2 hover:bg-secondary rounded-lg transition-colors"
            :aria-label="
              colorMode.preference === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            "
          >
            <Sun v-if="colorMode.preference === 'light'" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>
          <NuxtLink
            to="/contact"
            class="hidden sm:inline-flex px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
          >
            Contact
          </NuxtLink>
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
            <X v-else class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-2">
        <NuxtLink
          to="/"
          class="block px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="block px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/services"
          class="block px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
        >
          Services
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="block px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="block px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
        >
          Blog
        </NuxtLink>
        <NuxtLink
          to="/open-source"
          class="block px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
        >
          Open Source
        </NuxtLink>
        <NuxtLink
          to="/careers"
          class="block px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
        >
          Careers
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="block px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Menu, X, Sun, Moon } from "lucide-vue-next";

const colorMode = useColorMode();
const mobileMenuOpen = ref(false);

watch(
  () => colorMode.preference,
  () => {
    mobileMenuOpen.value = false;
  },
);
</script>
