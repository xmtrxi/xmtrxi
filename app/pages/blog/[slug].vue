<script setup lang="ts">
// Define page meta at the top before any async operations
definePageMeta({
  title: "Blog Post - XMTRXI",
});

const route = useRoute();
const slug = route.params.slug as string;

const { data: post } = useAsyncData(`blog-${slug}`, () =>
  queryContent(`/blog/${slug}`).findOne(),
);

const { data: allPosts } = useAsyncData("all-blog-posts", () =>
  queryContent("/blog").sort({ publishedAt: -1 }).find(),
);

const relatedPosts = computed(() => {
  if (!allPosts.value) return [];
  return allPosts.value.filter((p) => p.slug !== slug).slice(0, 3);
});

const readTime = computed(() => {
  if (!post.value?.body) return 5;
  const wordsPerMinute = 200;
  const wordCount = post.value.body.children
    .map((child: any) => extractText(child))
    .join(" ")
    .split(" ").length;
  return Math.ceil(wordCount / wordsPerMinute);
});

const extractText = (node: any): string => {
  if (typeof node === "string") return node;
  if (node.type === "text") return node.value || "";
  if (node.children) {
    return node.children.map((child: any) => extractText(child)).join(" ");
  }
  return "";
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Check if post is not found and throw error
const error = createError({
  statusCode: 404,
  statusMessage: "Blog post not found",
});

if (!post.value) {
  throw error;
}
</script>

<template>
  <div class="min-h-screen pt-32 pb-20 bg-white dark:bg-slate-950">
    <!-- Article Header -->
    <article class="relative">
      <header class="py-16 border-b border-gray-200 dark:border-slate-800">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <!-- Category Badge -->
            <div
              class="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full mb-6"
            >
              <span
                class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                >{{ post.category }}</span
              >
            </div>

            <!-- Title -->
            <h1
              class="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white leading-tight"
            >
              {{ post.title }}
            </h1>

            <!-- Description -->
            <p
              class="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              {{ post.description }}
            </p>

            <!-- Meta Information -->
            <div
              class="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 text-sm"
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
                {{ readTime }} minute read
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-6">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </header>

      <!-- Article Content -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <!-- Content Container -->
            <div class="prose prose-lg dark:prose-invert max-w-none">
              <div
                class="bg-gray-50 dark:bg-slate-900 rounded-xl p-8 md:p-12 border border-gray-200 dark:border-slate-800"
              >
                <!-- Blog Post Content -->
                <div
                  class="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200"
                >
                  <ContentDoc :path="`/blog/${slug}`" class="prose-content" />
                </div>

                <!-- Call to Action -->
                <div class="mt-16 p-8 bg-black dark:bg-white rounded-lg">
                  <h3
                    class="text-2xl font-bold text-white dark:text-black mb-4"
                  >
                    Want to stay updated?
                  </h3>
                  <p class="text-gray-300 dark:text-gray-700 mb-6">
                    Subscribe to our newsletter for insights on web development
                    and technology trends.
                  </p>
                  <div class="flex gap-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      class="flex-1 px-4 py-3 bg-gray-900 dark:bg-gray-100 border border-gray-700 dark:border-gray-300 rounded-lg text-white dark:text-black placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-white dark:focus:border-black"
                    />
                    <button
                      class="bg-white dark:bg-black text-black dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Posts -->
      <section
        class="py-16 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800"
      >
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-12 text-black dark:text-white">
              Related Articles
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article
                v-for="relatedPost in relatedPosts"
                :key="relatedPost.slug"
                class="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden hover:border-black dark:hover:border-white hover:shadow-lg transition-all duration-300"
              >
                <!-- Post Image -->
                <div
                  class="h-40 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center"
                >
                  <Icon
                    name="lucide:image"
                    class="w-12 h-12 text-gray-400 dark:text-slate-500"
                  />
                </div>

                <!-- Post Content -->
                <div class="p-6">
                  <h3
                    class="text-lg font-bold mb-2 text-black dark:text-white line-clamp-2"
                  >
                    {{ relatedPost.title }}
                  </h3>

                  <p
                    class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3"
                  >
                    {{ relatedPost.description }}
                  </p>

                  <NuxtLink
                    :to="`/blog/${relatedPost.slug}`"
                    class="inline-flex items-center text-black dark:text-white font-semibold hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-sm"
                  >
                    Read More
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

<style scoped></style>
