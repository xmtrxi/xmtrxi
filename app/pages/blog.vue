<template>
  <div class="min-h-screen pt-20 bg-black overflow-hidden">
    <!-- Matrix Background -->
    <div class="fixed inset-0 matrix-bg opacity-10 pointer-events-none"></div>
    
    <!-- Hero Section -->
    <section class="py-20 relative" data-animate="fade-up">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto" data-animate="scale">
          <!-- Epic Badge -->
          <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
            <div class="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span class="text-sm font-medium text-cyan-300 code-font">BLOG_POSTS.latest</span>
          </div>
          
          <h1 class="text-6xl md:text-8xl font-black mb-6 graffiti-font">
            <span class="text-white">DEV_BLOG</span>
            <span class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent cyber-glow text-4xl md:text-6xl mt-2">
              .insights()
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed code-font">
            <span class="text-green-400">//</span> Deep dives into tech, tutorials, and digital revolution<br/>
            <span class="text-cyan-400">const</span> knowledge = <span class="text-purple-400">share()</span>.<span class="text-pink-400">learn()</span>.<span class="text-green-400">grow()</span>();
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-20 bg-gradient-to-b from-black to-slate-950 relative">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(post, index) in blogPosts"
            :key="post.slug"
            class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 backdrop-blur-sm"
            :class="`animate-fade-in-up animation-delay-${(index + 1) * 200}`"
          >
            <!-- Post Image -->
            <div class="relative h-48 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
              <div class="absolute inset-0 matrix-bg opacity-20"></div>
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs rounded-md code-font font-semibold">
                  {{ post.category }}
                </span>
              </div>
            </div>

            <!-- Post Content -->
            <div class="p-6">
              <div class="flex items-center mb-4 text-sm text-gray-400 code-font">
                <Icon name="lucide:calendar" class="w-4 h-4 mr-2" />
                {{ formatDate(post.publishedAt) }}
                <Icon name="lucide:clock" class="w-4 h-4 ml-4 mr-2" />
                {{ calculateReadTime(post.description + ' ' + (post.excerpt || '')) }} min read
              </div>
              
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors graffiti-font line-clamp-2">
                {{ post.title }}
              </h3>
              
              <p class="text-gray-300 mb-4 line-clamp-3">
                {{ post.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in post.tags.slice(0, 3)"
                  :key="tag"
                  class="text-xs px-2 py-1 bg-black/50 text-cyan-300 rounded border border-cyan-500/30 code-font"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Read More Button -->
              <NuxtLink :to="`/blog/${post.slug}`" class="inline-flex items-center text-green-400 hover:text-green-300 transition-colors code-font font-semibold">
                <span>read_post()</span>
                <Icon name="lucide:arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>

            <!-- Hover effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </article>
        </div>

        <!-- Load More / Pagination -->
        <div class="text-center mt-16">
          <Button class="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-black graffiti-font px-8 py-4">
            <Icon name="lucide:download" class="w-4 h-4 mr-2" />
            LOAD_MORE()
          </Button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 bg-gradient-to-r from-green-600 to-cyan-600 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-0 left-0 w-full h-full matrix-bg opacity-10"></div>
      
      <div class="relative z-10 container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 graffiti-font">
          SUBSCRIBE.newsletter()
        </h2>
        <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto code-font">
          <span class="text-black">if</span> (developer.wantsUpdates) { <span class="text-black">subscribe()</span>.<span class="text-black">then</span>(knowledge => power); }
        </p>
        
        <div class="max-w-lg mx-auto">
          <div class="flex gap-3">
            <input
              type="email"
              placeholder="your.email@domain.com"
              class="flex-1 px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none code-font"
            />
            <Button class="bg-black text-cyan-300 hover:bg-gray-900 border-black px-6 py-3 graffiti-font">
              EXEC
            </Button>
          </div>
          <p class="text-sm mt-2 opacity-80 code-font">
            // Get weekly insights on tech trends and development
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog - XMTRXI | Tech Insights & Tutorials',
  meta: [
    { name: 'description', content: 'Explore cutting-edge tech insights, development tutorials, and digital innovation stories from the XMTRXI team.' }
  ]
})

// Fetch blog posts from Nuxt Content
const { data: blogPosts } = await useAsyncData('blog-posts', () => 
  queryContent('/blog')
    .sort({ publishedAt: -1 })
    .find()
)

// Calculate read time based on content length (rough estimate)
const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200
  const wordCount = content.split(' ').length
  return Math.ceil(wordCount / wordsPerMinute)
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
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

.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-800 { animation-delay: 0.8s; }

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
