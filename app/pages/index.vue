<template>
  <div class="w-full">
    <!-- Hero Section with Industrial Design -->
    <section class="section-gradient py-20 md:py-32 relative">
      <div class="divider-line-accent mb-8 md:mb-12"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              class="inline-block mb-4 px-3 py-1 bg-accent/10 dark:bg-accent/20 rounded border border-accent/30"
            >
              <p class="text-sm font-mono text-accent">// Welcome to xmtrxi</p>
            </div>
            <h1 class="heading-xl mb-6 dark:text-foreground">
              Transform Your Vision Into
              <span class="text-accent">Reality</span>
            </h1>
            <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
              xmtrxi delivers cutting-edge technology solutions and innovative
              services that empower businesses to succeed in the digital age.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <Button
                as-child
                size="lg"
                class="dark:bg-accent dark:text-accent-foreground"
              >
                <NuxtLink to="/contact">Get Started</NuxtLink>
              </Button>
              <Button
                variant="outline"
                as-child
                size="lg"
                class="dark:border-accent/50 dark:hover:bg-accent/10"
              >
                <NuxtLink to="/about">Learn More</NuxtLink>
              </Button>
            </div>
          </div>
          <div class="relative h-96 md:h-full">
            <div class="accent-line-top"></div>
            <div class="accent-line-bottom"></div>
            <div
              class="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl dark:from-accent/10"
            ></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-technology-abstract-Ebz3aghgu3D3jTH5vmXZFyBAjAJArx.png"
              alt="Hero illustration"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div class="divider-line-accent mt-8 md:mt-12"></div>
    </section>

    <!-- Stats Section -->
    <section
      class="py-20 md:py-32 relative border-y border-border dark:border-border"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="p-6 dark:bg-secondary/5 rounded-lg"
          >
            <div class="text-4xl md:text-5xl font-bold text-accent mb-2">
              {{ stat.value }}
            </div>
            <p class="text-muted-foreground font-mono text-sm">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 md:py-32 relative">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="heading-lg mb-4 dark:text-foreground">
            Why Choose xmtrxi
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver
            exceptional results.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            v-for="feature in features"
            :key="feature.id"
            class="industrial-card hover:shadow-lg transition-all hover:border-accent/50 group dark:bg-card/50"
          >
            <CardContent class="pt-6">
              <div class="relative mb-4">
                <component
                  :is="feature.icon"
                  class="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 class="heading-md mb-2 dark:text-foreground">
                {{ feature.title }}
              </h3>
              <p class="text-muted-foreground">
                {{ feature.description }}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="section-gradient py-20 md:py-32 relative">
      <div class="divider-line-accent mb-8"></div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="heading-lg mb-4 dark:text-foreground">Our Services</h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            From strategy to implementation, we provide comprehensive solutions
            tailored to your needs.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in services"
            :key="service.id"
            class="p-6 border border-border rounded-lg hover:border-accent/50 transition-colors dark:border-border dark:hover:border-accent/50 dark:bg-card/30"
          >
            <h3 class="font-mono text-accent text-sm mb-2">
              {{ service.icon }}
            </h3>
            <h4 class="text-lg font-semibold mb-2 dark:text-foreground">
              {{ service.name }}
            </h4>
            <p class="text-sm text-muted-foreground">
              {{ service.description }}
            </p>
          </div>
        </div>
        <div class="text-center mt-12">
          <Button
            as-child
            size="lg"
            class="dark:bg-accent dark:text-accent-foreground"
          >
            <NuxtLink to="/services">View All Services</NuxtLink>
          </Button>
        </div>
      </div>
      <div class="divider-line-accent mt-8"></div>
    </section>

    <!-- Recent Projects Section -->
    <section class="py-20 md:py-32 relative">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="heading-lg mb-4 dark:text-foreground">Recent Projects</h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the innovative solutions we've built for our clients.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card
            v-for="project in recentProjects"
            :key="project.id"
            class="group overflow-hidden dark:bg-card/50"
          >
            <div
              class="relative h-48 overflow-hidden bg-secondary dark:bg-secondary/50"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <CardContent class="pt-6">
              <h3
                class="heading-md mb-2 group-hover:text-accent transition-colors dark:text-foreground"
              >
                {{ project.title }}
              </h3>
              <p class="text-muted-foreground text-sm mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <Badge
                  v-for="tech in project.technologies"
                  :key="tech"
                  variant="secondary"
                  class="font-mono text-xs dark:bg-accent/10 dark:text-accent"
                  >{{ tech }}</Badge
                >
              </div>
            </CardContent>
          </Card>
        </div>
        <div class="text-center">
          <Button
            as-child
            variant="outline"
            size="lg"
            class="dark:border-accent/50 dark:hover:bg-accent/10"
          >
            <NuxtLink to="/projects">View All Projects</NuxtLink>
          </Button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-gradient py-20 md:py-32 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="heading-lg mb-6 dark:text-foreground">
          Ready to Start Your Journey?
        </h2>
        <p class="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's work together to create something extraordinary. Reach out
          today.
        </p>
        <Button
          as-child
          size="lg"
          class="dark:bg-accent dark:text-accent-foreground"
        >
          <NuxtLink to="/contact">Contact Us Now</NuxtLink>
        </Button>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Zap, Shield, Users, Rocket, Code, TrendingUp } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = ref([
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
]);

const features = ref([
  {
    id: 1,
    icon: Zap,
    title: "High Performance",
    description:
      "Optimized solutions that deliver speed, reliability, and scalability for your business needs.",
  },
  {
    id: 2,
    icon: Shield,
    title: "Security First",
    description:
      "Enterprise-grade security protocols to protect your data and ensure peace of mind.",
  },
  {
    id: 3,
    icon: Users,
    title: "Expert Team",
    description:
      "Dedicated professionals committed to your success and continuous innovation.",
  },
]);

const services = ref([
  {
    id: 1,
    icon: "→",
    name: "Web Development",
    description: "Custom web applications built with modern technologies.",
  },
  {
    id: 2,
    icon: "→",
    name: "Mobile Solutions",
    description: "Native and cross-platform mobile applications.",
  },
  {
    id: 3,
    icon: "→",
    name: "Cloud Infrastructure",
    description: "Scalable cloud solutions and DevOps services.",
  },
  {
    id: 4,
    icon: "→",
    name: "AI & Machine Learning",
    description: "Intelligent systems and data-driven solutions.",
  },
  {
    id: 5,
    icon: "→",
    name: "Consulting",
    description: "Strategic technology consulting and planning.",
  },
  {
    id: 6,
    icon: "→",
    name: "Support & Maintenance",
    description: "24/7 technical support and system maintenance.",
  },
]);

const recentProjects = ref([
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-featured marketplace with real-time inventory management.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vue", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Healthcare Management",
    description: "HIPAA-compliant patient management system.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Python", "AWS"],
  },
]);
</script>
