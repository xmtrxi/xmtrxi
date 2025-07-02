<template>
  <div class="min-h-screen pt-20 bg-black overflow-hidden">
    <!-- Matrix Background -->
    <div class="fixed inset-0 matrix-bg opacity-10 pointer-events-none"></div>
    
    <!-- Hero Section -->
    <section class="py-20 relative" data-animate="fade-up">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-animate="scale">
          <h1 class="text-6xl md:text-8xl font-black mb-6 graffiti-font">
            <span class="text-white">CONNECT_WITH</span>
            <span class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent cyber-glow">
              .US()
            </span>
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto code-font">
            <span class="text-green-400">//</span> Ready to hack together something amazing?<br/>
            <span class="text-cyan-400">const</span> project = await <span class="text-purple-400">startCollaboration()</span>;
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Epic Contact Form -->
          <div 
            class="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 graffiti-border"
            data-animate="fade-right"
          >
            <!-- Terminal Header -->
            <div class="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-700">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <span class="ml-4 code-font text-sm text-gray-400">~/contact/new_project.form</span>
            </div>

            <h2 class="text-2xl font-bold mb-6 text-white graffiti-font">
              INIT_PROJECT.form()
            </h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div data-stagger>
                  <label for="firstName" class="block text-sm font-medium text-cyan-300 mb-2 code-font">
                    <span class="text-green-400">//</span> first_name
                  </label>
                  <input 
                    v-model="form.firstName"
                    type="text" 
                    id="firstName" 
                    required
                    class="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 code-font"
                    placeholder="String firstName = ..."
                  >
                </div>
                <div data-stagger>
                  <label for="lastName" class="block text-sm font-medium text-cyan-300 mb-2 code-font">
                    <span class="text-green-400">//</span> last_name
                  </label>
                  <input 
                    v-model="form.lastName"
                    type="text" 
                    id="lastName" 
                    required
                    class="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 code-font"
                    placeholder="String lastName = ..."
                  >
                </div>
              </div>

              <div data-stagger>
                <label for="email" class="block text-sm font-medium text-cyan-300 mb-2 code-font">
                  <span class="text-green-400">//</span> email_address
                </label>
                <input 
                  v-model="form.email"
                  type="email" 
                  id="email" 
                  required
                  class="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 code-font"
                  placeholder="your.email@domain.com"
                >
              </div>

              <div data-stagger>
                <label for="company" class="block text-sm font-medium text-cyan-300 mb-2 code-font">
                  <span class="text-green-400">//</span> company_name (optional)
                </label>
                <input 
                  v-model="form.company"
                  type="text" 
                  id="company"
                  class="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 code-font"
                  placeholder="YourCompany Inc."
                >
              </div>

              <div data-stagger>
                <label for="budget" class="block text-sm font-medium text-cyan-300 mb-2 code-font">
                  <span class="text-green-400">//</span> project_budget
                </label>
                <select 
                  v-model="form.budget"
                  id="budget"
                  class="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 code-font"
                >
                  <option value="">SELECT budget_range FROM options</option>
                  <option value="under-5k">< $5,000 // Startup</option>
                  <option value="5k-15k">$5,000 - $15,000 // Growth</option>
                  <option value="15k-50k">$15,000 - $50,000 // Scale</option>
                  <option value="50k-plus">$50,000+ // Enterprise</option>
                </select>
              </div>

              <div data-stagger>
                <label for="services" class="block text-sm font-medium text-cyan-300 mb-2 code-font">
                  <span class="text-green-400">//</span> services_array[]
                </label>
                <div class="grid grid-cols-2 gap-4">
                  <label v-for="service in services" :key="service" class="flex items-center group">
                    <input 
                      v-model="form.services"
                      :value="service"
                      type="checkbox"
                      class="rounded border-gray-600 bg-black/50 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0"
                    >
                    <span class="ml-2 text-sm text-gray-300 group-hover:text-cyan-300 transition-colors code-font">{{ service }}</span>
                  </label>
                </div>
              </div>

              <div data-stagger>
                <label for="message" class="block text-sm font-medium text-cyan-300 mb-2 code-font">
                  <span class="text-green-400">//</span> project_description
                </label>
                <textarea 
                  v-model="form.message"
                  id="message" 
                  rows="5"
                  required
                  placeholder="/* Tell us about your project vision...
   What problems are you solving?
   What's your timeline?
   Any specific tech requirements? */"
                  class="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 resize-none code-font"
                ></textarea>
              </div>

              <Button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-black py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/50 graffiti-font relative overflow-hidden group"
                data-stagger
              >
                <div class="relative z-10 flex items-center justify-center">
                  <Icon v-if="!isSubmitting" name="lucide:zap" class="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <Icon v-else name="lucide:loader-2" class="w-5 h-5 mr-2 animate-spin" />
                  {{ isSubmitting ? 'TRANSMITTING...' : 'EXECUTE_CONTACT()' }}
                </div>
                <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Button>
            </form>

            <!-- Success/Error Messages -->
            <div v-if="submitStatus" class="mt-6 p-4 rounded-lg" :class="{
              'bg-green-500/20 border border-green-500/50 text-green-300': submitStatus === 'success',
              'bg-red-500/20 border border-red-500/50 text-red-300': submitStatus === 'error'
            }">
              <div class="flex items-center space-x-2">
                <Icon :name="submitStatus === 'success' ? 'lucide:check-circle' : 'lucide:x-circle'" class="w-5 h-5" />
                <span class="code-font">{{ submitMessage }}</span>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8" data-animate="fade-left">
            <!-- Company Info -->
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30" data-stagger>
              <h3 class="text-xl font-bold mb-6 text-white graffiti-font">CONTACT_INFO.json</h3>
              
              <div class="space-y-6">
                <div class="flex items-start space-x-4 group">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="lucide:mail" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-white mb-1 code-font">email: "contact@xmtrxi.com"</h4>
                    <p class="text-gray-300 code-font">response_time: "< 24 hours"</p>
                    <p class="text-sm text-gray-400 code-font">status: "always_monitoring"</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 group">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="lucide:github" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-white mb-1 code-font">github: "@xmtrxi"</h4>
                    <p class="text-gray-300 code-font">repos: "open_source++"</p>
                    <p class="text-sm text-gray-400 code-font">activity: "daily_commits"</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 group">
                  <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="lucide:globe" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-white mb-1 code-font">location: "global_remote"</h4>
                    <p class="text-gray-300 code-font">timezone: "your_preference"</p>
                    <p class="text-sm text-gray-400 code-font">availability: "24/7_async"</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30" data-stagger>
              <h3 class="text-xl font-bold mb-6 text-white graffiti-font">QUICK_STATS.db</h3>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-black/30 rounded-lg">
                  <div class="text-2xl font-black text-green-400 mb-1">100+</div>
                  <div class="text-xs text-gray-400 code-font">projects_deployed</div>
                </div>
                <div class="text-center p-4 bg-black/30 rounded-lg">
                  <div class="text-2xl font-black text-cyan-400 mb-1">24h</div>
                  <div class="text-xs text-gray-400 code-font">avg_response_time</div>
                </div>
                <div class="text-center p-4 bg-black/30 rounded-lg">
                  <div class="text-2xl font-black text-purple-400 mb-1">99.9%</div>
                  <div class="text-xs text-gray-400 code-font">client_satisfaction</div>
                </div>
                <div class="text-center p-4 bg-black/30 rounded-lg">
                  <div class="text-2xl font-black text-pink-400 mb-1">∞</div>
                  <div class="text-xs text-gray-400 code-font">innovation_level</div>
                </div>
              </div>
            </div>

            <!-- Tech Stack Preview -->
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30" data-stagger>
              <h3 class="text-xl font-bold mb-6 text-white graffiti-font">TECH_STACK.yml</h3>
              
              <div class="space-y-3 code-font text-sm">
                <div class="text-green-400">frontend:</div>
                <div class="pl-4 text-gray-300">- Vue.js, React, Nuxt</div>
                <div class="text-cyan-400">backend:</div>
                <div class="pl-4 text-gray-300">- Node.js, Python, Rust</div>
                <div class="text-purple-400">database:</div>
                <div class="pl-4 text-gray-300">- PostgreSQL, Redis, MongoDB</div>
                <div class="text-pink-400">iot_robotics:</div>
                <div class="pl-4 text-gray-300">- Arduino, ROS, TensorFlow</div>
                <div class="text-yellow-400">devops:</div>
                <div class="pl-4 text-gray-300">- Docker, K8s, AWS, CI/CD</div>
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
  title: 'Contact XMTRXI - Let\'s Build Something Epic Together',
  meta: [
    { name: 'description', content: 'Ready to hack together something amazing? Contact XMTRXI for IoT, web development, robotics, and system design projects. We respond within 24 hours.' }
  ]
})

// Use scroll animations
const { initScrollAnimations } = useScrollAnimations()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  budget: '',
  services: [] as string[],
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | null>(null)
const submitMessage = ref('')

const services = [
  'Web Development',
  'Mobile Apps', 
  'IoT Systems',
  'Robotics',
  'System Design',
  'DevOps/CI-CD',
  'AI/ML Integration',
  'E-commerce'
]

const submitForm = async () => {
  isSubmitting.value = true
  submitStatus.value = null
  
  try {
    // Using Formspree for form handling (free service)
    const response = await $fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${form.value.firstName} ${form.value.lastName}`,
        email: form.value.email,
        company: form.value.company,
        budget: form.value.budget,
        services: form.value.services.join(', '),
        message: form.value.message,
        _subject: `New project inquiry from ${form.value.firstName} ${form.value.lastName}`
      })
    })
    
    submitStatus.value = 'success'
    submitMessage.value = 'SUCCESS: Message transmitted successfully! We\'ll be in touch within 24 hours.'
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      budget: '',
      services: [],
      message: ''
    }
    
    // Send confirmation email to user using EmailJS or similar
    await sendConfirmationEmail(form.value.email, form.value.firstName)
    
  } catch (error) {
    console.error('Form submission error:', error)
    submitStatus.value = 'error'
    submitMessage.value = 'ERROR: Transmission failed. Please try again or email us directly.'
  } finally {
    isSubmitting.value = false
  }
}

const sendConfirmationEmail = async (email: string, firstName: string) => {
  // This would use EmailJS or similar service
  // For now, just log it
  console.log(`Sending confirmation email to ${email} for ${firstName}`)
}

onMounted(() => {
  initScrollAnimations()
})
</script>

<style scoped>
/* Additional styles for form elements */
input:focus, textarea:focus, select:focus {
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
}

.graffiti-border:hover {
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.2);
}
</style>
