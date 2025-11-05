<template>
  <div class="w-full">
    <!-- Page Header -->
    <section class="section-gradient py-16 md:py-24 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="heading-xl mb-4">Careers at xmtrxi</h1>
        <p class="text-xl text-muted-foreground max-w-3xl">
          Join our team of innovators and help us build the future of
          technology.
          <span class="font-mono text-accent">5 open positions</span>.
        </p>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>

    <!-- Culture & Benefits -->
    <section class="py-20 md:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <!-- Add monospace section headers and left border accent -->
          <div
            class="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-accent before:to-transparent"
          >
            <p class="text-xs font-mono text-accent mb-2">// Why Join Us</p>
            <h2 class="heading-md mb-4">Build With Us</h2>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span class="text-muted-foreground"
                  >Work on cutting-edge technology projects that impact
                  millions</span
                >
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span class="text-muted-foreground"
                  >Collaborate with world-class engineers and designers</span
                >
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span class="text-muted-foreground"
                  >Continuous learning and professional development</span
                >
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span class="text-muted-foreground"
                  >Competitive compensation and equity packages</span
                >
              </li>
            </ul>
          </div>

          <div
            class="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-accent before:to-transparent"
          >
            <p class="text-xs font-mono text-accent mb-2">// What We Offer</p>
            <h2 class="heading-md mb-4">Our Commitment</h2>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Zap class="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span class="text-muted-foreground"
                  >Remote-first work culture with flexible arrangements</span
                >
              </li>
              <li class="flex items-start gap-3">
                <Zap class="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span class="text-muted-foreground"
                  >Health insurance, retirement plans, and wellness
                  benefits</span
                >
              </li>
              <li class="flex items-start gap-3">
                <Zap class="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span class="text-muted-foreground"
                  >Professional development budget and training</span
                >
              </li>
              <li class="flex items-start gap-3">
                <Zap class="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span class="text-muted-foreground"
                  >Inclusive and supportive team environment</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="section-gradient py-20 md:py-32 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="heading-lg mb-12 text-center">Open Positions</h2>
        <div class="grid grid-cols-1 gap-4">
          <!-- Add monospace job IDs and industrial styling -->
          <div
            v-for="(position, index) in positions"
            :key="position.id"
            class="p-6 rounded-xl border border-border hover:border-accent/50 transition-all bg-background hover:shadow-lg group cursor-pointer relative"
          >
            <div class="accent-line-top"></div>
            <div
              class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div class="flex-grow">
                <div class="flex items-center gap-3 mb-2">
                  <span class="text-xs font-mono text-accent/60"
                    >// job_0{{ index + 1 }}</span
                  >
                </div>
                <h3
                  class="heading-md group-hover:text-accent transition-colors"
                >
                  {{ position.title }}
                </h3>
                <div
                  class="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground"
                >
                  <span class="flex items-center gap-1">
                    <MapPin class="w-4 h-4" />
                    {{ position.location }}
                  </span>
                  <span class="font-mono">{{ position.type }}</span>
                  <span
                    class="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-mono"
                    >{{ position.department }}</span
                  >
                </div>
              </div>
              <button
                class="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-sm whitespace-nowrap"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div
          class="mt-12 text-center p-8 rounded-xl border border-border bg-card relative"
        >
          <div class="accent-line-top"></div>
          <p class="font-mono text-xs text-accent mb-3">
            // Career Opportunity
          </p>
          <p class="text-muted-foreground mb-4">
            Don't see the right role? We're always looking for talented people.
          </p>
          <a
            href="mailto:careers@xmtrxi.com"
            class="inline-block px-6 py-3 border border-border hover:bg-secondary rounded-lg transition-colors font-semibold"
          >
            Send Your Resume
          </a>
        </div>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CheckCircle2, Zap, MapPin } from "lucide-vue-next";

const positions = ref([
  {
    id: 1,
    title: "Senior Full-Stack Engineer",
    location: "Remote / San Francisco",
    type: "Full-time",
    department: "Engineering",
  },
  {
    id: 2,
    title: "Product Manager",
    location: "Remote / New York",
    type: "Full-time",
    department: "Product",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    location: "Remote / Los Angeles",
    type: "Full-time",
    department: "Design",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Infrastructure",
  },
  {
    id: 5,
    title: "Data Scientist",
    location: "Remote / Austin",
    type: "Full-time",
    department: "Data",
  },
]);
</script>
