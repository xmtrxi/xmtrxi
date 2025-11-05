<template>
  <div class="w-full">
    <!-- Page Header -->
    <section class="section-gradient py-16 md:py-24 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="heading-xl mb-4 dark:text-foreground">Blog</h1>
        <p class="text-xl text-muted-foreground max-w-3xl">
          Insights, updates, and thoughts from our team on technology,
          innovation, and industry trends.
          <span class="font-mono text-accent">{{ posts.length }} articles</span>
          available.
        </p>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>

    <!-- Blog Posts -->
    <section class="py-20 md:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Using shadcn Vue Card component with proper dark mode classes -->
          <Card
            v-for="post in posts"
            :key="post.id"
            class="group overflow-hidden border border-border hover:border-accent/50 transition-all dark:bg-card/50 dark:border-border hover:shadow-lg hover:shadow-accent/5"
          >
            <div
              class="relative h-48 overflow-hidden bg-secondary dark:bg-secondary/50"
            >
              <img
                :src="`/placeholder.svg?height=300&width=400&query=${post.image}`"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </div>
            <CardContent class="pt-6 flex flex-col h-full">
              <div class="mb-4 flex items-center justify-between">
                <Badge
                  variant="secondary"
                  class="bg-accent/10 text-accent font-mono text-xs dark:bg-accent/20 dark:text-accent"
                  >{{ post.category }}</Badge
                >
                <span
                  class="text-xs font-mono text-muted-foreground dark:text-muted-foreground"
                  >{{ post.readTime }}m read</span
                >
              </div>
              <h3
                class="heading-md mb-2 group-hover:text-accent transition-colors dark:text-foreground"
              >
                {{ post.title }}
              </h3>
              <p class="text-muted-foreground text-sm mb-4 flex-grow">
                {{ post.excerpt }}
              </p>
              <div
                class="flex justify-between items-center text-xs text-muted-foreground pt-4 border-t border-border dark:border-border/50 group-hover:border-accent/30 transition-colors"
              >
                <span class="dark:text-muted-foreground">{{
                  post.author
                }}</span>
                <span class="font-mono dark:text-muted-foreground">{{
                  post.date
                }}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = ref([
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Exploring the emerging technologies and practices that will shape web development in the coming year.",
    category: "Technology",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: 8,
    image: "future web development trends",
  },
  {
    id: 2,
    title: "Building Scalable Applications with Microservices",
    excerpt:
      "A comprehensive guide to designing and implementing microservices architecture for modern applications.",
    category: "Architecture",
    author: "Alex Rodriguez",
    date: "Dec 10, 2024",
    readTime: 12,
    image: "microservices architecture diagram",
  },
  {
    id: 3,
    title: "AI Integration: Practical Use Cases for Your Business",
    excerpt:
      "Real-world examples of how businesses are leveraging AI to drive innovation and competitive advantage.",
    category: "AI/ML",
    author: "Emily Watson",
    date: "Dec 5, 2024",
    readTime: 10,
    image: "artificial intelligence implementation",
  },
  {
    id: 4,
    title: "Security Best Practices for Modern Web Applications",
    excerpt:
      "Essential security measures and best practices to protect your web applications from evolving threats.",
    category: "Security",
    author: "Marcus Johnson",
    date: "Nov 28, 2024",
    readTime: 15,
    image: "cybersecurity protection",
  },
  {
    id: 5,
    title: "Cloud Migration: Planning Your Journey",
    excerpt:
      "Step-by-step guide to successfully migrating your infrastructure to the cloud.",
    category: "Cloud",
    author: "Lisa Park",
    date: "Nov 20, 2024",
    readTime: 11,
    image: "cloud computing infrastructure",
  },
  {
    id: 6,
    title: "DevOps Automation: Streamlining Your Pipeline",
    excerpt:
      "Exploring DevOps tools and practices that automate and optimize your development pipeline.",
    category: "DevOps",
    author: "Tom Bradley",
    date: "Nov 15, 2024",
    readTime: 9,
    image: "devops continuous integration",
  },
]);
</script>
