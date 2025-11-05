<template>
  <div class="w-full">
    <!-- Page Header -->
    <section class="section-gradient py-16 md:py-24 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="heading-xl mb-4">Our Services</h1>
        <p class="text-xl text-muted-foreground max-w-3xl">
          Comprehensive technology solutions tailored to your business needs.
          Explore our
          <span class="font-mono text-accent">6 core services</span>.
        </p>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 md:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Add industrial card styling and monospace accents -->
          <Card
            v-for="(service, index) in services"
            :key="service.id"
            class="industrial-card group"
          >
            <CardContent class="pt-6">
              <div class="flex items-start justify-between mb-4">
                <component
                  :is="service.icon"
                  class="w-12 h-12 text-accent group-hover:scale-110 transition-transform"
                />
                <span class="text-xs font-mono text-accent/60"
                  >// 0{{ index + 1 }}</span
                >
              </div>
              <h3 class="heading-md mb-3">{{ service.title }}</h3>
              <p class="text-muted-foreground leading-relaxed mb-4">
                {{ service.description }}
              </p>
              <div class="space-y-2 border-t border-border pt-4">
                <div
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2
                    class="w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                  />
                  <span>{{ feature }}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-gradient py-20 md:py-32 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="heading-lg mb-6">Ready to Transform Your Business?</h2>
        <Button as-child size="lg">
          <NuxtLink to="/contact">Get in Touch</NuxtLink>
        </Button>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Code2,
  Smartphone,
  Rocket,
  Database,
  Lock,
  BarChart3,
  CheckCircle2,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = ref([
  {
    id: 1,
    icon: Code2,
    title: "Custom Development",
    description:
      "Tailored software solutions built from the ground up to meet your unique business requirements.",
    features: [
      "Full-stack development",
      "Cloud-native architecture",
      "API development",
      "System integration",
    ],
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile Solutions",
    description:
      "Cross-platform mobile applications that engage users and drive growth.",
    features: [
      "iOS & Android apps",
      "Progressive web apps",
      "Real-time synchronization",
      "Offline support",
    ],
  },
  {
    id: 3,
    icon: Rocket,
    title: "Digital Transformation",
    description:
      "Modernize your operations and unlock new business opportunities through technology.",
    features: [
      "Process automation",
      "Legacy system migration",
      "Digital strategy",
      "Change management",
    ],
  },
  {
    id: 4,
    icon: Database,
    title: "Data Solutions",
    description:
      "Harness the power of data to make informed decisions and drive business intelligence.",
    features: [
      "Data analytics",
      "Business intelligence",
      "Data warehousing",
      "ML integration",
    ],
  },
  {
    id: 5,
    icon: Lock,
    title: "Security & Compliance",
    description:
      "Protect your assets with enterprise-grade security solutions and compliance frameworks.",
    features: [
      "Security audits",
      "Compliance consulting",
      "Threat assessment",
      "Incident response",
    ],
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Consulting Services",
    description:
      "Strategic guidance from industry experts to optimize your technology investments.",
    features: [
      "Technology strategy",
      "Architecture planning",
      "Performance optimization",
      "Team augmentation",
    ],
  },
]);
</script>
