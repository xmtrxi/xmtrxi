<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-8 animate-fade-in-up">
            <Icon name="lucide:heart" class="w-4 h-4 mr-2 text-purple-600" />
            <span class="text-sm font-medium text-purple-600 dark:text-purple-400">About Us</span>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
            We Are XMTRXI
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 animate-fade-in-up animation-delay-400">
            A passionate team of digital innovators dedicated to transforming ideas into extraordinary digital experiences that drive business success.
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-fade-in-up animation-delay-600">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div class="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Founded in 2019, XMTRXI began as a vision to bridge the gap between innovative technology and meaningful business solutions. What started as a small team of passionate developers has grown into a full-service digital agency.
              </p>
              <p>
                We believe that great digital experiences are born from the perfect blend of cutting-edge technology, creative design, and deep understanding of business objectives. Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to excellence.
              </p>
              <p>
                Today, we're proud to have helped over 100 businesses transform their digital presence and achieve their goals through innovative solutions that make a real difference.
              </p>
            </div>
          </div>
          
          <div class="animate-fade-in-up animation-delay-800">
            <div class="relative">
              <div class="w-full h-96 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                <div class="absolute top-8 left-8">
                  <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Icon name="lucide:rocket" class="w-10 h-10 text-white" />
                  </div>
                </div>
                <div class="absolute bottom-8 right-8 text-right">
                  <div class="text-4xl font-bold text-gray-800 dark:text-gray-200">5+</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Years of Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-purple-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Values
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These core values guide everything we do and shape how we work with our clients and each other.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(value, index) in values"
            :key="value.id"
            class="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            :class="`animation-delay-${(index + 1) * 200}`"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon :name="value.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">{{ value.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The talented individuals who bring creativity, expertise, and passion to every project.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(member, index) in teamMembers"
            :key="member.id"
            class="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
            :class="`animation-delay-${(index + 1) * 150}`"
          >
            <!-- Avatar -->
            <div class="relative mx-auto mb-6 w-32 h-32">
              <div class="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold group-hover:scale-105 transition-transform duration-300">
                {{ member.name.split(' ').map(n => n[0]).join('') }}
              </div>
              <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
            </div>
            
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ member.name }}</h3>
            <p class="text-purple-600 dark:text-purple-400 font-medium mb-4">{{ member.role }}</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{{ member.bio }}</p>
            
            <!-- Skills -->
            <div class="flex flex-wrap justify-center gap-2 mb-6">
              <span
                v-for="skill in member.skills"
                :key="skill"
                class="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
              >
                {{ skill }}
              </span>
            </div>
            
            <!-- Social Links -->
            <div class="flex justify-center space-x-4">
              <a
                v-for="social in member.social"
                :key="social.platform"
                :href="social.url"
                class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors duration-300"
              >
                <Icon :name="social.icon" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Our Impact in Numbers
          </h2>
          <p class="text-xl opacity-90 max-w-3xl mx-auto">
            These numbers represent our commitment to delivering exceptional results for our clients.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="text-center animate-fade-in-up"
            :class="`animation-delay-${(index + 1) * 200}`"
          >
            <div class="text-4xl md:text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-lg opacity-80">{{ stat.label }}</div>
            <div class="text-sm opacity-60 mt-1">{{ stat.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <div class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              To empower businesses of all sizes with innovative digital solutions that drive growth, enhance user experiences, and create lasting competitive advantages in an ever-evolving digital landscape.
            </p>
            <p>
              We believe that technology should serve humanity, and every project we undertake is an opportunity to make a positive impact on businesses and the communities they serve.
            </p>
          </div>
          
          <div class="mt-12">
            <NuxtLink to="/contact">
              <Button size="lg" class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4">
                <Icon name="lucide:users" class="w-5 h-5 mr-2" />
                Join Our Journey
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us - XMTRXI | Our Story & Team',
  meta: [
    { name: 'description', content: 'Learn about XMTRXI\'s story, mission, values, and the passionate team behind our innovative digital solutions.' }
  ]
})

const values = [
  {
    id: 1,
    title: 'Innovation',
    description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions that set our clients apart.',
    icon: 'lucide:lightbulb'
  },
  {
    id: 2,
    title: 'Quality',
    description: 'Excellence is not negotiable. We maintain the highest standards in every aspect of our work, from code to client communication.',
    icon: 'lucide:star'
  },
  {
    id: 3,
    title: 'Transparency',
    description: 'Open communication and honest feedback form the foundation of our client relationships and internal collaboration.',
    icon: 'lucide:eye'
  },
  {
    id: 4,
    title: 'Collaboration',
    description: 'Great things happen when talented people work together. We foster a culture of teamwork and knowledge sharing.',
    icon: 'lucide:users'
  },
  {
    id: 5,
    title: 'Growth',
    description: 'We\'re committed to continuous learning and improvement, both for ourselves and our clients\' success.',
    icon: 'lucide:trending-up'
  },
  {
    id: 6,
    title: 'Impact',
    description: 'Every project is an opportunity to make a positive difference in the world through thoughtful technology solutions.',
    icon: 'lucide:heart'
  }
]

const teamMembers = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 8+ years in tech, passionate about transforming businesses through innovative digital solutions.',
    skills: ['Strategy', 'Leadership', 'Product Vision'],
    social: [
      { platform: 'LinkedIn', icon: 'lucide:linkedin', url: '#' },
      { platform: 'Twitter', icon: 'lucide:twitter', url: '#' }
    ]
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'CTO & Co-Founder',
    bio: 'Technical expert specializing in scalable architectures and emerging technologies. Leads our engineering excellence.',
    skills: ['Architecture', 'DevOps', 'Innovation'],
    social: [
      { platform: 'LinkedIn', icon: 'lucide:linkedin', url: '#' },
      { platform: 'GitHub', icon: 'lucide:github', url: '#' }
    ]
  },
  {
    id: 3,
    name: 'Marcus Rodriguez',
    role: 'Head of Design',
    bio: 'Creative director with a passion for user-centered design and creating beautiful, functional digital experiences.',
    skills: ['UI/UX', 'Branding', 'Research'],
    social: [
      { platform: 'Dribbble', icon: 'lucide:dribbble', url: '#' },
      { platform: 'Behance', icon: 'lucide:figma', url: '#' }
    ]
  },
  {
    id: 4,
    name: 'Emily Johnson',
    role: 'Lead Developer',
    bio: 'Full-stack developer with expertise in modern web technologies and a commitment to clean, maintainable code.',
    skills: ['Vue.js', 'Node.js', 'PostgreSQL'],
    social: [
      { platform: 'GitHub', icon: 'lucide:github', url: '#' },
      { platform: 'LinkedIn', icon: 'lucide:linkedin', url: '#' }
    ]
  },
  {
    id: 5,
    name: 'David Park',
    role: 'Mobile Developer',
    bio: 'Mobile app specialist focused on creating seamless cross-platform experiences that users love.',
    skills: ['React Native', 'Flutter', 'iOS'],
    social: [
      { platform: 'GitHub', icon: 'lucide:github', url: '#' },
      { platform: 'Twitter', icon: 'lucide:twitter', url: '#' }
    ]
  },
  {
    id: 6,
    name: 'Lisa Wang',
    role: 'Project Manager',
    bio: 'Experienced project manager ensuring smooth delivery and exceptional client experience on every project.',
    skills: ['Agile', 'Communication', 'Strategy'],
    social: [
      { platform: 'LinkedIn', icon: 'lucide:linkedin', url: '#' },
      { platform: 'Twitter', icon: 'lucide:twitter', url: '#' }
    ]
  }
]

const stats = [
  {
    value: '100+',
    label: 'Projects Delivered',
    description: 'Successfully completed'
  },
  {
    value: '50+',
    label: 'Happy Clients',
    description: 'Across various industries'
  },
  {
    value: '5+',
    label: 'Years Experience',
    description: 'In digital innovation'
  },
  {
    value: '24/7',
    label: 'Support Available',
    description: 'When you need us'
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

.animation-delay-150 { animation-delay: 0.15s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-450 { animation-delay: 0.45s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-800 { animation-delay: 0.8s; }
</style>
