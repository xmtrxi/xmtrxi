<template>
  <div class="min-h-screen pt-20 bg-black overflow-hidden">
    <!-- Matrix Background -->
    <div class="fixed inset-0 matrix-bg opacity-10 pointer-events-none"></div>
    
    <!-- Hero Section -->
    <section class="py-20 relative" >
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto" >
          <!-- Epic Badge -->
          <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
            <div class="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span class="text-sm font-medium text-cyan-300 code-font">POSITIONS_ARRAY.open</span>
          </div>
          
          <h1 class="text-6xl md:text-8xl font-black mb-6 graffiti-font">
            <span class="text-white">JOIN_THE</span>
            <span class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent cyber-glow text-4xl md:text-6xl mt-2">
              .revolution()
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed code-font">
            <span class="text-green-400">//</span> Build the future with bleeding-edge tech<br/>
            <span class="text-cyan-400">const</span> career = <span class="text-purple-400">innovate()</span>.<span class="text-pink-400">create()</span>.<span class="text-green-400">deploy()</span>();
          </p>
        </div>
      </div>
    </section>

    <!-- Company Culture Section -->
    <section class="py-20 bg-gradient-to-b from-black to-slate-950 relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-black mb-6 text-white graffiti-font">
            OUR_CULTURE
            <span class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent text-3xl md:text-5xl">
              .workEnvironment
            </span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(culture, index) in companyValues"
            :key="culture.id"
            class="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 hover:border-purple-400/40 backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
            :class="`animate-fade-in-up animation-delay-${(index + 1) * 200}`"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="culture.icon" class="w-8 h-8 text-purple-400" />
            </div>
            
            <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors graffiti-font">
              {{ culture.title }}
            </h3>
            <p class="text-gray-300 leading-relaxed">
              {{ culture.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions Section -->
    <section class="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden matrix-bg">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-black mb-6 text-white graffiti-font">
            OPEN_POSITIONS
            <span class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent text-3xl md:text-5xl">
              .availableRoles[]
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed code-font">
            <span class="text-green-400">//</span> Ready to push code that changes the world?
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="(position, index) in openPositions"
            :key="position.id"
            class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 backdrop-blur-sm"
            :class="`animate-fade-in-up animation-delay-${(index + 1) * 200}`"
          >
            <!-- Position Header -->
            <div class="p-8 pb-0">
              <div class="flex items-center justify-between mb-6">
                <div class="text-sm px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-600 text-cyan-300 rounded-md code-font border border-cyan-500/30">
                  {{ position.department.toLowerCase() }}
                </div>
                <div class="text-sm px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md code-font font-semibold">
                  {{ position.type }}
                </div>
              </div>
              
              <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors graffiti-font">
                {{ position.title }}
              </h3>
              
              <p class="text-gray-300 leading-relaxed mb-6">
                {{ position.description }}
              </p>
            </div>

            <!-- Requirements -->
            <div class="px-8 pb-8">
              <h4 class="font-semibold text-white mb-4 code-font"><span class="text-green-400">//</span> required_skills[]:</h4>
              <ul class="space-y-2">
                <li
                  v-for="skill in position.requirements.slice(0, 4)"
                  :key="skill"
                  class="flex items-center text-gray-300"
                >
                  <Icon name="lucide:check-circle" class="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span class="code-font text-sm">{{ skill }}</span>
                </li>
              </ul>
            </div>

            <!-- Technologies & Salary -->
            <div class="px-8 pb-8">
              <h4 class="font-semibold text-white mb-4 code-font"><span class="text-cyan-400">const</span> tech_stack = [</h4>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in position.technologies"
                  :key="tech"
                  class="text-xs px-2 py-1 bg-black/50 text-cyan-300 rounded border border-cyan-500/30 code-font font-medium"
                >
                  {{ tech }}
                </span>
              </div>
              <p class="text-gray-400 text-sm code-font">];</p>
            </div>

            <!-- Salary & Apply -->
            <div class="p-8 pt-0 border-t border-gray-700/50">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-sm text-gray-400 code-font"><span class="text-purple-400">salary:</span> range</span>
                  <div class="text-2xl font-bold text-green-400 graffiti-font">{{ position.salary }}</div>
                </div>
                <Button class="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-black graffiti-font">
                  <Icon name="lucide:send" class="w-4 h-4 mr-2" />
                  APPLY()
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- No positions message if needed -->
        <div v-if="openPositions.length === 0" class="text-center py-20">
          <div class="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Icon name="lucide:search" class="w-12 h-12 text-purple-400" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-4 graffiti-font">NO_POSITIONS.currently()</h3>
          <p class="text-gray-300 code-font"><span class="text-green-400">//</span> But we're always looking for exceptional talent!</p>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-gradient-to-b from-slate-900 to-black relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-black mb-6 text-white graffiti-font">
            BENEFITS
            <span class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent text-3xl md:text-5xl">
              .package()
            </span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(benefit, index) in benefits"
            :key="benefit.id"
            class="group text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm"
            :class="`animate-fade-in-up animation-delay-${(index + 1) * 100}`"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="benefit.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-white graffiti-font">{{ benefit.title }}</h3>
            <p class="text-gray-300 leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-green-600 to-cyan-600 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-0 left-0 w-full h-full matrix-bg opacity-10"></div>
      
      <div class="relative z-10 container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 graffiti-font">
          READY_TO_JOIN.us()?
        </h2>
        <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto code-font">
          <span class="text-black">if</span> (talent.isExceptional()) { <span class="text-black">apply()</span>.<span class="text-black">then</span>(welcome => future); }
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact">
            <Button size="lg" variant="outline" class="bg-black text-cyan-300 hover:bg-gray-900 border-black text-lg px-8 py-4 graffiti-font">
              <Icon name="lucide:mail" class="w-5 h-5 mr-2" />
              ./send_resume.sh
            </Button>
          </NuxtLink>
          <Button size="lg" class="bg-black/20 hover:bg-black/30 backdrop-blur text-lg px-8 py-4 code-font">
            <Icon name="lucide:phone" class="w-5 h-5 mr-2" />
            schedule_interview()
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Careers - XMTRXI | Join Our Tech Revolution',
  meta: [
    { name: 'description', content: 'Join the XMTRXI team and build the future with cutting-edge technology. Explore open positions in development, design, and innovation.' }
  ]
})

const companyValues = [
  {
    id: 1,
    title: 'INNOVATION_FIRST',
    description: 'We push boundaries and challenge the status quo. Every line of code we write aims to revolutionize how technology serves humanity.',
    icon: 'lucide:lightbulb'
  },
  {
    id: 2,
    title: 'REMOTE_FREEDOM',
    description: 'Work from anywhere in the world. We believe great code can be written from a beach in Bali or a coffee shop in Berlin.',
    icon: 'lucide:globe'
  },
  {
    id: 3,
    title: 'LEARN_CONSTANTLY',
    description: 'Technology evolves rapidly, and so do we. We provide resources, time, and support for continuous learning and growth.',
    icon: 'lucide:brain'
  }
]

const openPositions = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    description: 'Lead the development of cutting-edge web applications using modern frameworks and cloud technologies.',
    department: 'Engineering',
    type: 'Full-time',
    requirements: [
      '5+ years experience with Vue.js/React',
      'Expert knowledge of Node.js and Python',
      'Experience with cloud platforms (AWS/GCP)',
      'Strong understanding of microservices architecture',
      'Experience with CI/CD pipelines',
      'Knowledge of containerization (Docker/Kubernetes)'
    ],
    technologies: ['Vue.js', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL'],
    salary: '$80k - $120k'
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    description: 'Design and maintain robust infrastructure that scales with our revolutionary applications.',
    department: 'Infrastructure',
    type: 'Full-time',
    requirements: [
      'Experience with Kubernetes and Docker',
      'Strong knowledge of AWS/GCP',
      'Proficiency in Infrastructure as Code',
      'Experience with monitoring and observability',
      'Knowledge of CI/CD best practices',
      'Security-first mindset'
    ],
    technologies: ['Kubernetes', 'AWS', 'Terraform', 'Prometheus', 'GitLab CI', 'Ansible'],
    salary: '$75k - $110k'
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    description: 'Create intuitive and revolutionary user experiences that set new standards in digital design.',
    department: 'Design',
    type: 'Full-time',
    requirements: [
      'Strong portfolio showcasing modern design',
      'Proficiency in Figma and design systems',
      'Understanding of user research methodologies',
      'Experience with prototyping tools',
      'Knowledge of accessibility standards',
      'Collaborative mindset'
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Principle', 'Miro', 'Webflow'],
    salary: '$60k - $90k'
  },
  {
    id: 4,
    title: 'Blockchain Developer',
    description: 'Build the future of decentralized applications and smart contracts that will revolutionize industries.',
    department: 'Blockchain',
    type: 'Contract',
    requirements: [
      'Experience with Solidity and smart contracts',
      'Knowledge of Ethereum and Layer 2 solutions',
      'Understanding of DeFi protocols',
      'Experience with Web3 libraries',
      'Security-focused development',
      'Passion for decentralization'
    ],
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Hardhat', 'IPFS', 'React'],
    salary: '$70k - $100k'
  }
]

const benefits = [
  {
    id: 1,
    title: 'Competitive Salary',
    description: 'Above market rates with performance bonuses and equity options for exceptional contributors.',
    icon: 'lucide:dollar-sign'
  },
  {
    id: 2,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness stipends.',
    icon: 'lucide:heart'
  },
  {
    id: 3,
    title: 'Learning Budget',
    description: '$2000 annual learning budget for courses, conferences, and certifications.',
    icon: 'lucide:graduation-cap'
  },
  {
    id: 4,
    title: 'Flexible Schedule',
    description: 'Work when you\'re most productive. Core collaboration hours with flexible start/end times.',
    icon: 'lucide:clock'
  },
  {
    id: 5,
    title: 'Latest Equipment',
    description: 'Top-tier MacBook Pro, external monitors, and any tools you need to excel.',
    icon: 'lucide:laptop'
  },
  {
    id: 6,
    title: 'Team Retreats',
    description: 'Annual team retreats to amazing destinations for collaboration and team building.',
    icon: 'lucide:plane'
  }
]
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
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-700 { animation-delay: 0.7s; }
.animation-delay-800 { animation-delay: 0.8s; }
</style>
