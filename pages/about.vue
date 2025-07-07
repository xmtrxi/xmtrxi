<template>
  <div class="min-h-screen pt-20 bg-black overflow-hidden">
    <!-- Matrix Background -->
    <div class="fixed inset-0 matrix-bg opacity-10 pointer-events-none"></div>

    <!-- Hero Section -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="text-6xl md:text-8xl font-black mb-6 graffiti-font">
            <span class="text-white">ABOUT_</span>
            <span
              class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent cyber-glow"
            >
              XMTRXI.origin()
            </span>
          </h1>
          <p
            class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed code-font"
          >
            <span class="text-green-400">//</span> We are digital architects,
            code craftsmen, and innovation hackers<br />
            <span class="text-cyan-400">const</span> mission =
            <span class="text-purple-400">buildTheFuture()</span>.<span
              class="text-pink-400"
              >today()</span
            >;
          </p>
        </div>

        <!-- Epic Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="text-center group cursor-pointer"
          >
            <div
              class="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              <span
                class="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                >{{ stat.value }}</span
              >
            </div>
            <div
              class="text-gray-400 uppercase text-sm font-semibold tracking-wider code-font group-hover:text-cyan-300 transition-colors duration-300"
            >
              {{ stat.label }}
            </div>
          </div>
        </div>

        <!-- Our Origin Story -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2
              class="text-4xl md:text-5xl font-black mb-6 text-white graffiti-font"
            >
              OUR_ORIGIN.story()
            </h2>
            <div class="space-y-6 text-gray-300 leading-relaxed">
              <p class="text-lg">
                <span class="text-green-400 code-font">//</span> Born from
                frustration with boring, cookie-cutter solutions. In 2020, a
                group of rogue developers decided to hack the status quo.
              </p>
              <p class="text-lg">
                <span class="text-cyan-400 code-font">while</span>
                (others.buildGeneric()) {
                <span class="text-purple-400">we.craftEpic()</span>; }
              </p>
              <p class="text-lg">
                Today, we're not just building websites and apps—we're
                architecting digital ecosystems that push boundaries, break
                conventions, and actually <em class="text-pink-400">work</em>.
              </p>
              <div
                class="mt-8 p-4 bg-black/50 rounded-lg border border-cyan-500/30"
              >
                <p class="code-font text-sm text-cyan-300">
                  <span class="text-green-400">const</span> impact = {
                  <br />&nbsp;&nbsp;projects:
                  <span class="text-yellow-400">100</span>+,
                  <br />&nbsp;&nbsp;linesOfCode:
                  <span class="text-yellow-400">500000</span>+,
                  <br />&nbsp;&nbsp;cupsOfCoffee:
                  <span class="text-yellow-400">Infinity</span> <br />}
                </p>
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              class="w-full h-96 bg-gradient-to-br from-green-500 via-cyan-500 to-purple-500 rounded-2xl shadow-2xl relative overflow-hidden group hover:shadow-cyan-500/25 transition-all duration-500"
            >
              <div
                class="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center"
              >
                <!-- Code matrix effect -->
                <div
                  class="absolute inset-0 p-4 font-mono text-xs text-green-400 opacity-30 overflow-hidden"
                >
                  <div class="animate-pulse">
                    function buildTheFuture() {<br />
                    &nbsp;&nbsp;const innovation = true;<br />
                    &nbsp;&nbsp;const creativity = 100;<br />
                    &nbsp;&nbsp;const passion = Infinity;<br />
                    &nbsp;&nbsp;return deploy(innovation);<br />
                    }
                  </div>
                </div>
                <Icon
                  name="lucide:code"
                  class="w-24 h-24 text-white/90 group-hover:rotate-12 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Core Values / Philosophy -->
        <div class="mb-20">
          <h2
            class="text-4xl md:text-5xl font-black text-center mb-12 text-white graffiti-font"
          >
            CORE_VALUES.init()
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(value, index) in values"
              :key="value.title"
              class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div
                class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-600/50 group-hover:border-cyan-500/50"
              >
                <Icon
                  :name="value.icon"
                  class="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
                />
              </div>
              <h3
                class="text-xl font-bold mb-4 text-white text-center group-hover:text-cyan-300 transition-colors duration-300"
              >
                {{ value.title }}
              </h3>
              <p
                class="text-gray-300 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
              >
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- The Squad -->
        <div>
          <h2
            class="text-4xl md:text-5xl font-black text-center mb-4 text-white graffiti-font"
          >
            THE_SQUAD.members[]
          </h2>
          <p class="text-center text-gray-300 mb-12 code-font">
            <span class="text-green-400">//</span> The humans behind the code
            magic
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(member, index) in team"
              :key="member.name"
              class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
            >
              <div class="text-center">
                <div
                  class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                >
                  <span class="text-2xl font-black text-white graffiti-font">{{
                    member.initials
                  }}</span>
                  <!-- Hover effect -->
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <Icon name="lucide:user" class="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3
                  class="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300"
                >
                  {{ member.name }}
                </h3>
                <p class="text-cyan-400 text-sm font-bold mb-3 code-font">
                  {{ member.role }}
                </p>
                <p
                  class="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-4"
                >
                  {{ member.bio }}
                </p>

                <!-- Skills tags -->
                <div class="flex flex-wrap gap-2 justify-center">
                  <span
                    v-for="skill in member.skills"
                    :key="skill"
                    class="px-2 py-1 bg-black/50 rounded text-xs text-cyan-300 border border-cyan-500/30 code-font"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "About XMTRXI - The Squad Behind the Code Magic",
  meta: [
    {
      name: "description",
      content:
        "Meet the team of digital architects, code craftsmen, and innovation hackers behind XMTRXI. Discover our origin story, values, and mission to build the future.",
    },
  ],
});

// Use scroll animations
const { initScrollAnimations } = useScrollAnimations();

const stats = [
  { value: "500K+", label: "LINES_OF_CODE" },
  { value: "100+", label: "PROJECTS_DEPLOYED" },
  { value: "99.9%", label: "SYSTEM_UPTIME" },
  { value: "24/7", label: "CODE_MONITORING" },
];

const values = [
  {
    title: "CODE_EXCELLENCE",
    description:
      "We write code like poets write verses - every line matters, every function tells a story.",
    icon: "lucide:code",
  },
  {
    title: "INNOVATION_FIRST",
    description:
      "While others follow trends, we create them. Breaking boundaries is our default mode.",
    icon: "lucide:zap",
  },
  {
    title: "OPEN_SOURCE",
    description:
      "Knowledge shared is knowledge multiplied. We contribute to the community that built us.",
    icon: "lucide:git-branch",
  },
];

const team = [
  {
    name: 'Kemboi "The Architect" Elvis',
    initials: "KE",
    role: "backend.mastermind && devops.engineer",
    skills: ["APIS", "SurrealDB", "PostgreSQL", "DevOps", "Performance"],
    bio: "Backend developer and opensource enthusiasist",
  },
];

onMounted(() => {
  initScrollAnimations();
});
</script>

<style scoped>
/* Additional animations for the about page */
.code-matrix {
  background:
    linear-gradient(45deg, #001100 25%, transparent 25%),
    linear-gradient(-45deg, #001100 25%, transparent 25%);
  background-size: 20px 20px;
  animation: matrix-flow 10s linear infinite;
}

@keyframes matrix-flow {
  0% {
    background-position:
      0 0,
      0 0;
  }
  100% {
    background-position:
      20px 20px,
      -20px 20px;
  }
}
</style>
