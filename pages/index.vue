<template>
  <div class="overflow-hidden">
    <!-- Revolutionary Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center">
      <!-- Animated Grid Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <!-- Grid Pattern -->
        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        <!-- Floating Elements -->
        <div class="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full animate-float"></div>
        <div class="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full animate-float-delay-1"></div>
        <div class="absolute bottom-32 left-16 w-3 h-3 bg-pink-400 rounded-full animate-float-delay-2"></div>
        <div class="absolute bottom-20 right-20 w-6 h-6 bg-cyan-400 rounded-full animate-float-delay-3"></div>
        
        <!-- Gradient Orbs -->
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 container mx-auto px-4 text-center">
        <div class="max-w-5xl mx-auto">
          <!-- Glowing Badge -->
          <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-8 backdrop-blur-sm animate-fade-in-up">
            <div class="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span class="text-sm font-medium text-purple-300">Available for new projects</span>
          </div>

          <!-- Graffiti Tech Title -->
          <h1 class="text-4xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in-up animation-delay-200">
            <span class="block text-white graffiti-font tracking-wider">{'< OPEN_SOURCE />'}</span>
            <span class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent cyber-glow text-3xl sm:text-5xl lg:text-7xl">
              IoT • WEB • ROBOTS
            </span>
            <span class="block text-white text-2xl sm:text-4xl lg:text-5xl font-normal mt-4 code-font">
              System.Design.Execute();
            </span>
          </h1>

          <!-- Tech Subtext -->
          <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 code-font">
            <span class="text-green-400">//</span> We hack together IoT devices, craft web experiences,<br/>
            <span class="text-green-400">//</span> and build robots that actually work. No BS, just code.
            <span class="block mt-2 text-cyan-400 text-lg">console.log('Welcome to the future');</span>
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-600">
            <NuxtLink to="/contact">
              <Button size="lg" class="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-black px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1 graffiti-font">
                <Icon name="lucide:zap" class="w-5 h-5 mr-2" />
                INIT_PROJECT()
              </Button>
            </NuxtLink>
            <NuxtLink to="/portfolio">
              <Button variant="outline" size="lg" class="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm graffiti-border cyber-glow code-font">
                <Icon name="lucide:terminal" class="w-5 h-5 mr-2" />
                ./view_portfolio.sh
              </Button>
            </NuxtLink>
          </div>

          <!-- Impressive Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up animation-delay-800">
            <div v-for="(stat, index) in stats" :key="stat.label" class="group">
              <div class="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{{ stat.value }}</div>
              <div class="text-gray-400 uppercase text-sm font-semibold tracking-wider">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Tech Process Section -->
    <section class="py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden matrix-bg">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-green-500/50 to-transparent"></div>
        <div class="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
      </div>

      <div class="container mx-auto px-4 relative">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-7xl font-black mb-6 text-white graffiti-font">
            OUR_STACK
            <span class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              .METHODOLOGY
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed code-font">
            <span class="text-green-400">if</span> (idea.isAmazing()) { <span class="text-cyan-400">build()</span>; <span class="text-purple-400">deploy()</span>; <span class="text-pink-400">scale()</span>; }
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(step, index) in processSteps" 
            :key="step.title"
            class="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 hover:border-purple-400/40 backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
            :class="`animate-fade-in-up animation-delay-${(index + 1) * 200}`"
          >
            <!-- Step Number -->
            <div class="absolute -top-6 left-8">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-lg shadow-purple-500/50">
                {{ index + 1 }}
              </div>
            </div>

            <!-- Icon -->
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center mb-8 mt-4 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="step.icon" class="w-10 h-10 text-purple-400" />
            </div>

            <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
              {{ step.title }}
            </h3>
            <p class="text-gray-300 leading-relaxed mb-6">
              {{ step.description }}
            </p>

            <!-- Progress Bar -->
            <div class="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Tech Stack Section -->
    <section class="py-32 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden" data-animate="fade-up">
      <!-- Floating tech particles -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
        <div class="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-400 opacity-60"></div>
        <div class="absolute bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-800 opacity-60"></div>
        <div class="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-600 opacity-60"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-20" data-animate="scale">
          <h2 class="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
            <span class="graffiti-font tracking-wider">POWERED_BY</span>
            <span class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent cyber-glow text-4xl md:text-6xl mt-2">
              .cutting_edge_tech
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            <span class="text-green-400 code-font">//</span> We leverage bleeding-edge technologies to build scalable, 
            <br class="hidden md:block" />performant, and future-proof digital solutions.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          <div 
            v-for="(tech, index) in techStack" 
            :key="tech.name"
            class="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 backdrop-blur-sm"
            :class="`animate-fade-in-up animation-delay-${(index + 1) * 100}`"
            data-stagger
          >
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            
            <div class="text-center relative z-10">
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:rotate-6 border border-gray-600/50 group-hover:border-cyan-500/50">
                <Icon :name="tech.icon" class="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <h3 class="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">{{ tech.name }}</h3>
              <p class="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 code-font">{{ tech.category }}</p>
            </div>
            
            <!-- Hover line effect -->
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>

        <!-- Tech description cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20" data-animate="fade-up">
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-green-500/30" data-stagger>
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <Icon name="lucide:code" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white">Frontend Mastery</h3>
            </div>
            <p class="text-gray-300 leading-relaxed">Modern frameworks like Vue.js, React, and Nuxt for lightning-fast, interactive user experiences.</p>
          </div>
          
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-cyan-500/30" data-stagger>
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <Icon name="lucide:server" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white">Backend Power</h3>
            </div>
            <p class="text-gray-300 leading-relaxed">Robust server-side solutions with Node.js, Python, and Rust for maximum performance and reliability.</p>
          </div>
          
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-purple-500/30" data-stagger>
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <Icon name="lucide:cloud" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white">Cloud Native</h3>
            </div>
            <p class="text-gray-300 leading-relaxed">Scalable cloud infrastructure with Docker, Kubernetes, and AWS for enterprise-grade deployment.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Portfolio Projects -->
    <PortfolioPreview />

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-green-600 to-cyan-600 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-0 left-0 w-full h-full matrix-bg opacity-10"></div>
      
      <div class="relative z-10 container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 graffiti-font">
          READY_TO_BUILD.next()?
        </h2>
        <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto code-font">
          <span class="text-black">if</span> (project.hasAwesomeIdea) { <span class="text-black">contact()</span>.<span class="text-black">then</span>(magic => deploy(magic)); }
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact">
            <Button size="lg" variant="outline" class="bg-black text-cyan-300 hover:bg-gray-900 border-black text-lg px-8 py-4 graffiti-font">
              <Icon name="lucide:terminal" class="w-5 h-5 mr-2" />
              ./schedule_call.sh
            </Button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <Button size="lg" class="bg-black/20 hover:bg-black/30 backdrop-blur text-lg px-8 py-4 code-font">
              <Icon name="lucide:zap" class="w-5 h-5 mr-2" />
              start_conversation()
            </Button>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'XMTRXI - Transform Your Ideas Into Digital Excellence',
  meta: [
    { name: 'description', content: 'We craft innovative digital solutions that captivate audiences, drive engagement, and accelerate business growth through cutting-edge technology and creative design.' }
  ]
})

const stats = [
  { value: '100+', label: 'REPOS DEPLOYED' },
  { value: '500K+', label: 'LINES OF CODE' },
  { value: '99.9%', label: 'UPTIME ACHIEVED' },
  { value: '24/7', label: 'DEVOPS MONITORING' }
]

const features = [
  {
    icon: 'lucide:lightbulb',
    title: 'Innovation First',
    description: 'We leverage cutting-edge technologies and creative approaches to deliver solutions that set you apart from the competition.'
  },
  {
    icon: 'lucide:users',
    title: 'Expert Team',
    description: 'Our skilled professionals bring years of experience and passion to every project, ensuring exceptional results.'
  },
  {
    icon: 'lucide:zap',
    title: 'Fast Delivery',
    description: 'We understand the importance of time-to-market and deliver high-quality solutions within agreed timelines.'
  }
]

const processSteps = [
  {
    icon: 'lucide:search',
    title: 'ANALYZE() && ARCHITECT',
    description: 'We reverse-engineer your requirements, analyze system dependencies, and architect solutions that scale from zero to production.'
  },
  {
    icon: 'lucide:cpu',
    title: 'PROTOTYPE.BUILD()',
    description: 'Rapid prototyping with CI/CD pipelines, containerized environments, and real-time collaboration tools for maximum velocity.'
  },
  {
    icon: 'lucide:rocket',
    title: 'DEPLOY && MONITOR',
    description: 'Automated deployments, infrastructure as code, monitoring dashboards, and 24/7 observability for bulletproof systems.'
  }
]

const techStack = [
  { name: 'Vue.js', icon: 'lucide:triangle', category: 'Frontend' },
  { name: 'React', icon: 'lucide:atom', category: 'Frontend' },
  { name: 'Nuxt', icon: 'lucide:layers', category: 'SSR/SSG' },
  { name: 'Node.js', icon: 'lucide:server', category: 'Backend' },
  { name: 'Python', icon: 'lucide:code', category: 'AI/ML' },
  { name: 'Rust', icon: 'lucide:zap', category: 'Systems' },
  { name: 'PostgreSQL', icon: 'lucide:database', category: 'Database' },
  { name: 'Redis', icon: 'lucide:circle', category: 'Cache' },
  { name: 'AWS', icon: 'lucide:cloud', category: 'Cloud' },
  { name: 'Docker', icon: 'lucide:box', category: 'DevOps' },
  { name: 'Kubernetes', icon: 'lucide:globe', category: 'Orchestration' },
  { name: 'Arduino', icon: 'lucide:cpu', category: 'IoT' }
]

const services = [
  {
    icon: 'lucide:code',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.'
  },
  {
    icon: 'lucide:smartphone',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that engage users and drive business growth.'
  },
  {
    icon: 'lucide:palette',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that create meaningful connections between your brand and your audience.'
  },
  {
    icon: 'lucide:trending-up',
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that increase visibility, engagement, and conversions across digital channels.'
  },
  {
    icon: 'lucide:shield-check',
    title: 'Security Solutions',
    description: 'Comprehensive security measures to protect your digital assets and ensure data privacy compliance.'
  },
  {
    icon: 'lucide:settings',
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance services to keep your digital solutions running smoothly and up-to-date.'
  }
]
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

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

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-6000 {
  animation-delay: 6s;
}

.animation-delay-100 {
  animation-delay: 0.1s;
}

/* Add initial hidden state for animated elements */
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
}
</style>
