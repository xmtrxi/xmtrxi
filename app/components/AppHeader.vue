<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled
        ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10'
        : 'bg-transparent',
    ]"
  >
    <!-- Glitch Effect Background -->
    <div
      v-if="isScrolled"
      class="absolute inset-0 bg-gradient-to-r from-green-500/5 via-cyan-500/5 to-purple-500/5 animate-pulse"
    ></div>

    <!-- Matrix Rain Effect -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="n in 20"
        :key="n"
        class="absolute w-px bg-gradient-to-b from-green-400/30 to-transparent animate-pulse"
        :style="{
          left: `${n * 5}%`,
          height: '100%',
          animationDelay: `${n * 0.1}s`,
          animationDuration: `${2 + Math.random() * 2}s`,
        }"
      ></div>
    </div>

    <nav class="container mx-auto px-4 py-4 relative z-10">
      <div class="flex items-center justify-between">
        <!-- Epic Logo -->
        <NuxtLink to="/" class="group relative" @mouseenter="playGlitchEffect">
          <div class="relative">
            <!-- Main Logo -->
            <h1
              class="text-3xl font-black graffiti-font tracking-wider transition-all duration-300 group-hover:scale-110"
            >
              <span
                class="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent cyber-glow"
              >
                {'<'}
              </span>
              <span
                class="text-white group-hover:text-cyan-300 transition-colors"
              >
                XMTRXI
              </span>
              <span
                class="bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent cyber-glow"
              >
                {'/>'}
              </span>
            </h1>

            <!-- Glitch Overlay -->
            <div
              v-if="showGlitch"
              class="absolute inset-0 text-3xl font-black graffiti-font tracking-wider animate-glitch"
            >
              <span class="text-red-500">{'<'}XMTRXI{'/>'}</span>
            </div>

            <!-- Subtitle -->
            <p
              class="text-xs code-font text-gray-400 group-hover:text-cyan-400 transition-colors mt-1"
            >
              // System.Design.Execute();
            </p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="item.name"
            :to="item.href"
            class="group cursor-pointer relative text-gray-300 hover:text-cyan-300 transition-all duration-300 code-font font-semibold"
            active-class="text-cyan-300"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Navigation Item -->
            <span class="relative z-10">
              <span class="text-green-400">//</span>
              {{ item.name.toLowerCase() }}
            </span>

            <!-- Hover Effect -->
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500"
            ></span>

            <!-- Glow Effect -->
            <div
              class="absolute inset-0 bg-cyan-400/20 rounded blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            ></div>
          </NuxtLink>
        </div>

        <!-- Epic CTA Button -->
        <div class="hidden md:block">
          <Button
            class="group relative bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-black px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 graffiti-font overflow-hidden"
            @click="initializeProject"
          >
            <!-- Button Content -->
            <div class="relative z-10 flex items-center">
              <Icon
                name="lucide:zap"
                class="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300"
              />
              INIT_PROJECT()
            </div>

            <!-- Animated Background -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
            ></div>

            <!-- Glitch Lines -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div
                class="absolute top-1/4 left-0 w-full h-px bg-white/50 animate-pulse"
              ></div>
              <div
                class="absolute bottom-1/4 left-0 w-full h-px bg-white/50 animate-pulse animation-delay-200"
              ></div>
            </div>
          </Button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden relative group p-2">
          <div class="relative z-10">
            <Icon
              :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
              class="w-6 h-6 text-white group-hover:text-cyan-300 transition-all duration-300"
              :class="{ 'rotate-180': isMobileMenuOpen }"
            />
          </div>
          <div
            class="absolute inset-0 bg-cyan-400/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-cyan-500/30 backdrop-blur-sm bg-black/50 rounded-lg"
      >
        <div class="flex flex-col space-y-4 pt-4 px-4">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="item.name"
            :to="item.href"
            class="group text-gray-300 hover:text-cyan-300 transition-all duration-300 code-font p-2 rounded"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="closeMobileMenu"
          >
            <span class="text-green-400">//</span> {{ item.name.toLowerCase() }}
            <div
              class="w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300 mt-1"
            ></div>
          </NuxtLink>

          <Button
            class="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-black px-6 py-3 mt-4 graffiti-font"
            @click="initializeProject"
          >
            <Icon name="lucide:zap" class="w-4 h-4 mr-2" />
            INIT_PROJECT()
          </Button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);
const showGlitch = ref(false);
const headerRef = ref<HTMLElement>();

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const playGlitchEffect = () => {
  showGlitch.value = true;
  setTimeout(() => {
    showGlitch.value = false;
  }, 200);
};

const initializeProject = () => {
  // Add some cool sound effect or animation here
  console.log("🚀 Project initialized!");
  // Navigate to contact or show modal
  navigateTo("/contact");
};

// Handle scroll effects
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
  };

  const handleClickOutside = (event: Event) => {
    const target = event.target as Element;
    if (!target.closest("header") && isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false;
    }
  };

  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    document.removeEventListener("click", handleClickOutside);
  });
});
</script>

<style scoped>
@keyframes glitch {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-2px);
  }
  40% {
    transform: translateX(2px);
  }
  60% {
    transform: translateX(-2px);
  }
  80% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-glitch {
  animation: glitch 0.3s ease-in-out infinite;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>
