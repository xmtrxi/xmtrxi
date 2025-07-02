<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-8 animate-fade-in-up">
            <Icon name="lucide:settings" class="w-4 h-4 mr-2 text-purple-600" />
            <span class="text-sm font-medium text-purple-600 dark:text-purple-400">Our Services</span>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
            Comprehensive Digital Solutions
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 animate-fade-in-up animation-delay-400">
            From concept to deployment, we offer end-to-end digital services that transform your business and drive growth in the digital landscape.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            v-for="(service, index) in services"
            :key="service.id"
            class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
            :class="`animation-delay-${(index + 1) * 200}`"
          >
            <!-- Service Header -->
            <div class="p-8 pb-0">
              <div class="flex items-center justify-between mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon :name="service.icon" class="w-8 h-8 text-white" />
                </div>
                <div class="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                  {{ service.category }}
                </div>
              </div>
              
              <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {{ service.title }}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {{ service.description }}
              </p>
            </div>

            <!-- Features List -->
            <div class="px-8 pb-8">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-4">What's Included:</h4>
              <ul class="space-y-3">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <Icon name="lucide:check-circle" class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Technologies -->
            <div class="px-8 pb-8">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Technologies We Use:</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in service.technologies"
                  :key="tech"
                  class="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Pricing & CTA -->
            <div class="p-8 pt-0 border-t border-gray-200 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Starting from</span>
                  <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">{{ service.startingPrice }}</div>
                </div>
                <Button class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Icon name="lucide:arrow-right" class="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-purple-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in processSteps"
            :key="step.id"
            class="relative text-center animate-fade-in-up"
            :class="`animation-delay-${(index + 1) * 200}`"
          >
            <!-- Step Number -->
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
              {{ step.step }}
            </div>
            
            <!-- Connector Line (except for last item) -->
            <div
              v-if="index < processSteps.length - 1"
              class="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 dark:from-purple-700 dark:to-blue-700"
              style="transform: translateX(50%); z-index: -1;"
            ></div>
            
            <div class="relative z-10">
              <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ step.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Why Choose XMTRXI?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're not just another digital agency. Here's what sets us apart from the competition.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(benefit, index) in benefits"
            :key="benefit.id"
            class="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            :class="`animation-delay-${(index + 1) * 100}`"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon :name="benefit.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">{{ benefit.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Let's discuss your project and find the perfect solution for your business needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact">
            <Button size="lg" variant="outline" class="bg-white text-purple-600 hover:bg-gray-100 border-white text-lg px-8 py-4">
              <Icon name="lucide:calendar" class="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </NuxtLink>
          <Button size="lg" class="bg-black/20 hover:bg-black/30 backdrop-blur text-lg px-8 py-4">
            <Icon name="lucide:phone" class="w-5 h-5 mr-2" />
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Services - XMTRXI | Digital Solutions & Development',
  meta: [
    { name: 'description', content: 'Explore our comprehensive digital services including web development, mobile apps, UI/UX design, e-commerce solutions, and more.' }
  ]
})

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance, security, and user experience.',
    category: 'Development',
    icon: 'lucide:code',
    features: [
      'Responsive design for all devices',
      'SEO optimization and performance',
      'Custom CMS development',
      'API integration and development',
      'Security implementation',
      'Performance optimization'
    ],
    technologies: ['Vue.js', 'React', 'Node.js', 'Python', 'PHP', 'PostgreSQL', 'MongoDB'],
    startingPrice: '$2,500'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.',
    category: 'Development',
    icon: 'lucide:smartphone',
    features: [
      'iOS and Android development',
      'Cross-platform solutions',
      'App Store optimization',
      'Push notifications',
      'Offline functionality',
      'Backend integration'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    startingPrice: '$5,000'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that create meaningful connections between your brand and your audience.',
    category: 'Design',
    icon: 'lucide:palette',
    features: [
      'User research and analysis',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Usability testing',
      'Design systems',
      'Accessibility compliance'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Miro'],
    startingPrice: '$1,500'
  },
  {
    id: 4,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with advanced features like AI recommendations, analytics, and seamless payment integration.',
    category: 'E-commerce',
    icon: 'lucide:shopping-cart',
    features: [
      'Custom e-commerce development',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking system',
      'Multi-vendor support',
      'Analytics and reporting'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'Square'],
    startingPrice: '$3,500'
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that increase visibility, engagement, and conversions across all digital channels.',
    category: 'Marketing',
    icon: 'lucide:trending-up',
    features: [
      'SEO and content marketing',
      'Social media management',
      'PPC advertising campaigns',
      'Email marketing automation',
      'Analytics and reporting',
      'Conversion optimization'
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'Mailchimp', 'HubSpot', 'SEMrush'],
    startingPrice: '$1,000'
  },
  {
    id: 6,
    title: 'Enterprise Solutions',
    description: 'Scalable enterprise applications and systems that streamline operations and drive digital transformation.',
    category: 'Enterprise',
    icon: 'lucide:building',
    features: [
      'Custom ERP development',
      'CRM system integration',
      'Workflow automation',
      'Data analytics and BI',
      'Cloud migration',
      'System integration'
    ],
    technologies: ['Salesforce', '.NET', 'Java', 'Oracle', 'SAP', 'Microsoft Azure', 'AWS'],
    startingPrice: '$10,000'
  }
]

const processSteps = [
  {
    id: 1,
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultation.'
  },
  {
    id: 2,
    step: '02',
    title: 'Strategy',
    description: 'Based on our discovery, we create a comprehensive strategy and project plan tailored to your specific needs.'
  },
  {
    id: 3,
    step: '03',
    title: 'Design & Development',
    description: 'Our team brings your vision to life with beautiful designs and robust development using best practices.'
  },
  {
    id: 4,
    step: '04',
    title: 'Launch & Support',
    description: 'We ensure a smooth launch and provide ongoing support to keep your solution running optimally.'
  }
]

const benefits = [
  {
    id: 1,
    title: 'Expert Team',
    description: 'Our skilled professionals have years of experience and stay updated with the latest technologies and trends.',
    icon: 'lucide:users'
  },
  {
    id: 2,
    title: 'Quality Assurance',
    description: 'We follow rigorous testing procedures to ensure your project meets the highest quality standards.',
    icon: 'lucide:shield-check'
  },
  {
    id: 3,
    title: 'On-Time Delivery',
    description: 'We understand the importance of deadlines and consistently deliver projects on time and within budget.',
    icon: 'lucide:clock'
  },
  {
    id: 4,
    title: 'Ongoing Support',
    description: 'Our relationship doesn\'t end at launch. We provide continuous support and maintenance for your solution.',
    icon: 'lucide:headphones'
  },
  {
    id: 5,
    title: 'Scalable Solutions',
    description: 'We build solutions that grow with your business, ensuring long-term success and adaptability.',
    icon: 'lucide:trending-up'
  },
  {
    id: 6,
    title: 'Transparent Process',
    description: 'We maintain clear communication throughout the project with regular updates and milestone reviews.',
    icon: 'lucide:eye'
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
