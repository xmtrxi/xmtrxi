<template>
  <section
    class="py-32 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden"
  >
    <!-- Matrix Background -->
    <div class="absolute inset-0 matrix-bg opacity-20"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <h2
          class="text-5xl md:text-7xl font-black mb-6 text-white graffiti-font"
        >
          FEATURED_PROJECTS
          <span
            class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            .showcase()
          </span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto code-font">
          <span class="text-green-400">const</span> projects = await
          <span class="text-cyan-400">getAwesomeWork()</span>.<span
            class="text-purple-400"
            >filter</span
          >(p => p.isEpic);
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
          :class="`animate-fade-in-up animation-delay-${(index + 1) * 200}`"
          @mouseenter="handleProjectHover(project.id)"
          @mouseleave="resetHover"
        >
          <!-- Project Preview Container -->
          <div class="relative h-64 overflow-hidden rounded-t-2xl">
            <!-- Live Preview on Hover -->
            <div
              v-if="hoveredProject === project.id"
              class="absolute inset-0 z-20 transition-all duration-500 transform"
            >
              <!-- Loading State -->
              <div
                v-if="loadingProgress < 100"
                class="absolute inset-0 bg-black/95 flex items-center justify-center backdrop-blur-sm"
              >
                <div class="text-center p-6">
                  <div
                    class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center animate-pulse"
                  >
                    <Icon name="lucide:monitor" class="w-8 h-8 text-white" />
                  </div>
                  <p class="text-green-400 font-mono text-sm mb-2">
                    // Loading website preview...
                  </p>
                  <div class="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <div
                      class="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full transition-all duration-300"
                      :style="`width: ${loadingProgress}%`"
                    ></div>
                  </div>
                  <p class="text-cyan-300 text-xs code-font">
                    Booting: {{ project.tech.join(" + ") }}
                  </p>
                </div>
              </div>

              <!-- Website Preview -->
              <div
                v-else
                class="absolute inset-0 bg-gray-900 rounded-t-2xl overflow-hidden border border-cyan-500/50"
              >
                <!-- Browser Chrome -->
                <div
                  class="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-700"
                >
                  <div class="flex space-x-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div class="flex-1 bg-gray-700 rounded px-3 py-1 ml-4">
                    <p class="text-xs text-gray-300 code-font">
                      {{ project.url }}
                    </p>
                  </div>
                  <Icon
                    name="lucide:external-link"
                    class="w-4 h-4 text-gray-400"
                  />
                </div>

                <!-- Website Content Mockup -->
                <div
                  class="h-48 bg-gradient-to-br"
                  :class="project.gradient + ' relative overflow-hidden'"
                >
                  <!-- Website Preview Content -->
                  <div class="absolute inset-0 p-4 text-white">
                    <div v-if="project.type === 'web'" class="space-y-3">
                      <!-- Header Bar -->
                      <div class="flex items-center justify-between">
                        <div class="w-20 h-4 bg-white/30 rounded"></div>
                        <div class="flex space-x-2">
                          <div class="w-12 h-4 bg-white/20 rounded"></div>
                          <div class="w-12 h-4 bg-white/20 rounded"></div>
                        </div>
                      </div>

                      <!-- Hero Section -->
                      <div class="space-y-2">
                        <div class="w-3/4 h-6 bg-white/40 rounded"></div>
                        <div class="w-1/2 h-4 bg-white/30 rounded"></div>
                      </div>

                      <!-- Content Cards -->
                      <div class="grid grid-cols-3 gap-2">
                        <div class="h-12 bg-white/20 rounded"></div>
                        <div class="h-12 bg-white/20 rounded"></div>
                        <div class="h-12 bg-white/20 rounded"></div>
                      </div>
                    </div>

                    <div
                      v-else-if="project.type === 'dashboard'"
                      class="space-y-2"
                    >
                      <!-- Dashboard Layout -->
                      <div class="flex space-x-2">
                        <div class="w-1/4 h-32 bg-white/20 rounded"></div>
                        <div class="flex-1 space-y-2">
                          <div class="h-8 bg-white/30 rounded"></div>
                          <div class="grid grid-cols-2 gap-2">
                            <div class="h-20 bg-white/20 rounded"></div>
                            <div class="h-20 bg-white/20 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div v-else class="space-y-3">
                      <!-- Generic App Layout -->
                      <div class="w-full h-6 bg-white/30 rounded"></div>
                      <div class="space-y-2">
                        <div class="w-4/5 h-4 bg-white/25 rounded"></div>
                        <div class="w-3/5 h-4 bg-white/25 rounded"></div>
                        <div class="w-2/3 h-4 bg-white/25 rounded"></div>
                      </div>
                      <div class="flex space-x-2">
                        <div class="w-16 h-8 bg-white/30 rounded"></div>
                        <div class="w-16 h-8 bg-white/30 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Live Code Preview -->
                  <div class="absolute bottom-2 left-2 right-2">
                    <div class="bg-black/80 rounded p-2 backdrop-blur-sm">
                      <p class="text-green-400 font-mono text-xs leading-tight">
                        {{ project.liveCode }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Thumbnail -->
            <div
              class="absolute inset-0 bg-gradient-to-br transition-all duration-500"
              :class="project.gradient"
            >
              <div class="absolute inset-0 bg-black/40"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex items-center space-x-2 mb-2">
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
            </div>

            <!-- Floating Tech Icons -->
            <div class="absolute inset-0 pointer-events-none">
              <div
                v-for="(tech, techIndex) in project.tech.slice(0, 3)"
                :key="tech"
                class="absolute w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                :style="`top: ${20 + techIndex * 30}%; right: ${10 + techIndex * 15}%; animation-delay: ${techIndex * 100}ms`"
              >
                <Icon :name="getTechIcon(tech)" class="w-4 h-4 text-cyan-400" />
              </div>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3
                class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors graffiti-font"
              >
                {{ project.title }}
              </h3>
              <div class="flex space-x-2">
                <div
                  class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                ></div>
                <div
                  class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-200"
                ></div>
              </div>
            </div>

            <p class="text-gray-300 text-sm mb-4 leading-relaxed code-font">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-2 py-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-md text-xs text-cyan-300 font-mono"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mb-4">
              <div class="text-center">
                <div class="text-lg font-bold text-green-400">
                  {{ project.stats.commits }}
                </div>
                <div class="text-xs text-gray-400">commits</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold text-cyan-400">
                  {{ project.stats.lines }}
                </div>
                <div class="text-xs text-gray-400">lines</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold text-purple-400">
                  {{ project.stats.stars }}
                </div>
                <div class="text-xs text-gray-400">stars</div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-2">
              <Button
                size="sm"
                class="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold"
              >
                <Icon name="lucide:external-link" class="w-4 h-4 mr-1" />
                Live Demo
              </Button>
              <Button
                size="sm"
                variant="outline"
                class="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10"
              >
                <Icon name="lucide:github" class="w-4 h-4" />
              </Button>
            </div>
          </div>

          <!-- Glitch Effect Overlay -->
          <div
            v-if="hoveredProject === project.id"
            class="absolute inset-0 pointer-events-none opacity-20"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transform -skew-x-12 animate-pulse"
            ></div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-16">
        <NuxtLink to="/portfolio">
          <Button
            size="lg"
            class="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 graffiti-font text-lg px-8 py-4"
          >
            <Icon name="lucide:folder-open" class="w-5 h-5 mr-2" />
            EXPLORE_ALL_PROJECTS()
          </Button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const hoveredProject = ref<string | null>(null);
const loadingProgress = ref(0);
let loadingInterval: NodeJS.Timeout | null = null;

const featuredProjects = [
  {
    id: "smart-home-iot",
    title: "SmartHome.IoT",
    type: "dashboard",
    url: "https://smarthome-iot.demo",
    description:
      "Distributed IoT system managing 50+ sensors with real-time analytics and ML-powered automation.",
    tech: ["Arduino", "Python", "MQTT", "InfluxDB", "Vue.js"],
    gradient: "from-green-600 to-blue-600",
    codeSnippet: "sensor.read() -> ml_predict() -> actuate()",
    liveCode:
      "const sensors = await IoT.getAllSensors();\nconst predictions = ML.predict(sensors.data);\nif (predictions.anomaly) { Alert.trigger(); }",
    stats: {
      commits: "420+",
      lines: "15k",
      stars: "89",
    },
  },
  {
    id: "quantum-dashboard",
    title: "QuantumDash",
    type: "dashboard",
    url: "https://quantum-trading.live",
    description:
      "Real-time trading dashboard with WebSocket feeds, custom charting, and algorithmic trading bots.",
    tech: ["React", "Node.js", "WebSocket", "D3.js", "Redis"],
    gradient: "from-purple-600 to-pink-600",
    codeSnippet: 'ws.on("tick", data => chart.update(data))',
    liveCode:
      "websocket.onMessage((tick) => {\n  chart.updatePrice(tick.symbol, tick.price);\n  if (algorithm.shouldTrade(tick)) bot.execute();\n});",
    stats: {
      commits: "650+",
      lines: "22k",
      stars: "156",
    },
  },
  {
    id: "robot-swarm",
    title: "SwarmBot.AI",
    type: "app",
    url: "https://swarmbot-control.ai",
    description:
      "Autonomous robot swarm coordination using distributed consensus algorithms and computer vision.",
    tech: ["ROS", "Python", "OpenCV", "TensorFlow", "C++"],
    gradient: "from-cyan-600 to-purple-600",
    codeSnippet: "swarm.coordinate() && avoid_obstacles()",
    liveCode:
      "class SwarmController {\n  coordinate() { return this.consensus.decide(); }\n  navigate() { return this.vision.detect_obstacles(); }\n}",
    stats: {
      commits: "890+",
      lines: "35k",
      stars: "203",
    },
  },
];

const getTechIcon = (tech: string): string => {
  const icons: Record<string, string> = {
    Arduino: "lucide:cpu",
    Python: "lucide:code",
    MQTT: "lucide:radio",
    InfluxDB: "lucide:database",
    "Vue.js": "lucide:triangle",
    React: "lucide:atom",
    "Node.js": "lucide:server",
    WebSocket: "lucide:wifi",
    "D3.js": "lucide:bar-chart",
    Redis: "lucide:circle",
    ROS: "lucide:cog",
    OpenCV: "lucide:eye",
    TensorFlow: "lucide:brain",
    "C++": "lucide:code-2",
  };
  return icons[tech] || "lucide:code";
};

const handleProjectHover = (projectId: string) => {
  hoveredProject.value = projectId;
  loadingProgress.value = 0;

  // Simulate loading animation
  loadingInterval = setInterval(() => {
    loadingProgress.value += Math.random() * 20;
    if (loadingProgress.value >= 100) {
      loadingProgress.value = 100;
      if (loadingInterval) {
        clearInterval(loadingInterval);
      }
    }
  }, 100);
};

const resetHover = () => {
  hoveredProject.value = null;
  loadingProgress.value = 0;
  if (loadingInterval) {
    clearInterval(loadingInterval);
    loadingInterval = null;
  }
};

onUnmounted(() => {
  if (loadingInterval) {
    clearInterval(loadingInterval);
  }
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
</style>
