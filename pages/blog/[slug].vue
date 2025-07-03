<template>
  <div class="min-h-screen pt-20 bg-black overflow-hidden">
    <!-- Matrix Background -->
    <div class="fixed inset-0 matrix-bg opacity-10 pointer-events-none"></div>

    <!-- Article Header -->
    <article class="relative">
      <header class="py-20 relative">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <!-- Category Badge -->
            <div
              class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm"
            >
              <Icon
                name="lucide:file-text"
                class="w-4 h-4 mr-2 text-cyan-400"
              />
              <span class="text-sm font-medium text-cyan-300 code-font">{{
                post.category
              }}</span>
            </div>

            <!-- Title -->
            <h1
              class="text-4xl md:text-6xl font-black mb-8 text-white leading-tight graffiti-font"
            >
              {{ post.title }}
            </h1>

            <!-- Description -->
            <p
              class="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              {{ post.description }}
            </p>

            <!-- Meta Information -->
            <div
              class="flex flex-wrap items-center justify-center gap-6 text-gray-400 code-font"
            >
              <div class="flex items-center">
                <Icon name="lucide:user" class="w-4 h-4 mr-2" />
                {{ post.author }}
              </div>
              <div class="flex items-center">
                <Icon name="lucide:calendar" class="w-4 h-4 mr-2" />
                {{ formatDate(post.publishedAt) }}
              </div>
              <div class="flex items-center">
                <Icon name="lucide:clock" class="w-4 h-4 mr-2" />
                {{ readTime }} min read
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap justify-center gap-2 mt-8">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-3 py-1 bg-gradient-to-r from-slate-800 to-slate-700 text-cyan-300 text-sm rounded-md border border-cyan-500/30 code-font"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </header>

      <!-- Article Content -->
      <section class="py-20 bg-gradient-to-b from-black to-slate-950">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <!-- Content Container -->
            <div class="prose prose-lg prose-invert max-w-none">
              <div
                class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 md:p-12 border border-gray-700/50 backdrop-blur-sm"
              >
                <!-- Blog Post Content from Markdown -->
                <div
                  class="prose prose-lg prose-invert max-w-none cyberpunk-prose"
                >
                  <ContentDoc
                    :path="`/blog/${slug}`"
                    class="cyberpunk-content"
                  />
                </div>

                <!-- Call to Action -->
                <div
                  class="mt-16 p-8 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-lg border border-cyan-500/30"
                >
                  <h3 class="text-2xl font-bold text-white mb-4 graffiti-font">
                    Ready to Level Up?
                  </h3>
                  <p class="text-gray-300 mb-6">
                    Join thousands of developers who get our weekly insights on
                    cutting-edge tech and development best practices.
                  </p>
                  <div class="flex gap-3">
                    <input
                      type="email"
                      placeholder="your.email@domain.com"
                      class="flex-1 px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none code-font"
                    />
                    <Button
                      class="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-black graffiti-font px-6"
                    >
                      SUBSCRIBE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Posts -->
      <section class="py-20 bg-gradient-to-b from-slate-950 to-black">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h2
              class="text-4xl font-bold text-center mb-16 text-white graffiti-font"
            >
              RELATED_POSTS
              <span
                class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent text-2xl"
              >
                .suggested()
              </span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article
                v-for="relatedPost in relatedPosts"
                :key="relatedPost.slug"
                class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm"
              >
                <!-- Post Image -->
                <div class="relative h-32 overflow-hidden">
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"
                  ></div>
                  <div class="absolute inset-0 matrix-bg opacity-20"></div>
                </div>

                <!-- Post Content -->
                <div class="p-6">
                  <h3
                    class="text-lg font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors graffiti-font line-clamp-2"
                  >
                    {{ relatedPost.title }}
                  </h3>

                  <p class="text-gray-400 text-sm mb-4 line-clamp-3">
                    {{ relatedPost.description }}
                  </p>

                  <NuxtLink
                    :to="`/blog/${relatedPost.slug}`"
                    class="inline-flex items-center text-green-400 hover:text-green-300 transition-colors code-font font-semibold text-sm"
                  >
                    <span>read_more()</span>
                    <Icon name="lucide:arrow-right" class="w-4 h-4 ml-2" />
                  </NuxtLink>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

// Fetch the current blog post from Nuxt Content
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryContent(`/blog/${slug}`).findOne(),
);

// If post not found, show 404
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog post not found",
  });
}

// Fetch related posts (excluding current post)
const { data: allPosts } = await useAsyncData("all-blog-posts", () =>
  queryContent("/blog").sort({ publishedAt: -1 }).find(),
);

const relatedPosts = computed(() => {
  if (!allPosts.value) return [];
  return allPosts.value.filter((p) => p.slug !== slug).slice(0, 3);
});

// Calculate read time based on content length
const readTime = computed(() => {
  if (!post.value?.body) return 5;
  const wordsPerMinute = 200;
  const wordCount = post.value.body.children
    .map((child: any) => extractText(child))
    .join(" ")
    .split(" ").length;
  return Math.ceil(wordCount / wordsPerMinute);
});

// Extract text from content body for read time calculation
const extractText = (node: any): string => {
  if (typeof node === "string") return node;
  if (node.type === "text") return node.value || "";
  if (node.children) {
    return node.children.map((child: any) => extractText(child)).join(" ");
  }
  return "";
};

// Set page meta
useHead({
  title: `${post.value?.title} - XMTRXI Blog`,
  meta: [
    { name: "description", content: post.value?.description },
    { property: "og:title", content: post.value?.title },
    { property: "og:description", content: post.value?.description },
    { property: "og:type", content: "article" },
    { property: "article:author", content: post.value?.author },
    { property: "article:published_time", content: post.value?.publishedAt },
    { property: "article:tag", content: post.value?.tags?.join(", ") },
  ],
});

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped>
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

.prose h2,
.prose h3,
.prose h4 {
  color: white;
  font-weight: bold;
}

.prose h2 {
  font-size: 2rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.prose h3 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.prose code {
  background-color: rgba(15, 23, 42, 0.8);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.prose pre {
  background-color: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 0.5rem;
  overflow-x: auto;
}

/* Custom styling for cyberpunk content */
.cyberpunk-content h1 {
  font-size: 2.25rem;
  font-weight: bold;
  color: white;
  font-family: "Teko", "Orbitron", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.cyberpunk-content h2 {
  font-size: 1.875rem;
  font-weight: bold;
  color: white;
  font-family: "Teko", "Orbitron", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.cyberpunk-content h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  font-family: "Teko", "Orbitron", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;
}

.cyberpunk-content p {
  color: rgb(209 213 219);
  margin-bottom: 1rem;
  line-height: 1.7;
}

.cyberpunk-content code {
  background-color: rgba(15, 23, 42, 0.8);
  color: rgb(74 222 128);
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-family: monospace;
  font-size: 0.875rem;
}

.cyberpunk-content pre {
  background-color: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.cyberpunk-content pre code {
  color: rgb(74 222 128);
  font-family: monospace;
  font-size: 0.875rem;
  background: none;
  padding: 0;
}

.cyberpunk-content ul {
  list-style-type: disc;
  list-style-position: inside;
  color: rgb(209 213 219);
  margin-bottom: 1rem;
}

.cyberpunk-content li {
  margin-bottom: 0.5rem;
}

.cyberpunk-content ol {
  list-style-type: decimal;
  list-style-position: inside;
  color: rgb(209 213 219);
  margin-bottom: 1rem;
}

.cyberpunk-content blockquote {
  border-left: 4px solid rgb(6 182 212);
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(15, 23, 42, 0.5);
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  margin-bottom: 1rem;
}

.cyberpunk-content a {
  color: rgb(34 211 238);
  text-decoration: underline;
  transition: color 0.2s ease;
}

.cyberpunk-content a:hover {
  color: rgb(103 232 249);
}
</style>
