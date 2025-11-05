<template>
  <div class="w-full">
    <!-- Page Header -->
    <section class="section-gradient py-16 md:py-24 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="heading-xl mb-4">About xmtrxi</h1>
        <p class="text-xl text-muted-foreground max-w-3xl">
          Pioneering innovative technology solutions since
          <span class="font-mono text-accent">2018</span>, we're dedicated to
          transforming businesses through cutting-edge digital innovation.
        </p>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 md:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Add industrial styling to mission section -->
          <div
            class="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-accent before:to-transparent"
          >
            <div
              class="inline-block mb-4 px-3 py-1 bg-accent/10 rounded border border-accent/30"
            >
              <p class="text-xs font-mono text-accent">// Our Mission</p>
            </div>
            <h2 class="heading-md mb-4">Transform Your Business</h2>
            <p class="text-muted-foreground leading-relaxed mb-4">
              To empower businesses of all sizes by delivering innovative
              technology solutions that drive growth, improve efficiency, and
              create competitive advantages in an ever-evolving digital
              landscape.
            </p>
            <p class="text-muted-foreground leading-relaxed">
              We believe technology should be accessible, scalable, and
              transformative for everyone.
            </p>
          </div>

          <!-- Add industrial styling to vision section -->
          <div
            class="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-accent before:to-transparent"
          >
            <div
              class="inline-block mb-4 px-3 py-1 bg-accent/10 rounded border border-accent/30"
            >
              <p class="text-xs font-mono text-accent">// Our Vision</p>
            </div>
            <h2 class="heading-md mb-4">Shape the Future</h2>
            <p class="text-muted-foreground leading-relaxed mb-4">
              To be the leading innovation partner, recognized globally for
              creating breakthrough solutions that solve complex challenges and
              shape the future of technology.
            </p>
            <p class="text-muted-foreground leading-relaxed">
              We aspire to build a world where technology enables limitless
              possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-gradient py-20 md:py-32 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="heading-lg text-center mb-16">Our Core Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Lightbulb class="w-8 h-8 text-accent" />
            </div>
            <h3 class="font-semibold mb-2">Innovation</h3>
            <p class="text-sm text-muted-foreground">
              Constantly pushing boundaries and exploring new possibilities.
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Heart class="w-8 h-8 text-accent" />
            </div>
            <h3 class="font-semibold mb-2">Excellence</h3>
            <p class="text-sm text-muted-foreground">
              Committed to delivering quality in everything we do.
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Users class="w-8 h-8 text-accent" />
            </div>
            <h3 class="font-semibold mb-2">Collaboration</h3>
            <p class="text-sm text-muted-foreground">
              Working together to achieve extraordinary results.
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Award class="w-8 h-8 text-accent" />
            </div>
            <h3 class="font-semibold mb-2">Integrity</h3>
            <p class="text-sm text-muted-foreground">
              Building trust through transparency and accountability.
            </p>
          </div>
        </div>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>

    <!-- Team Highlight -->
    <section class="py-20 md:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="heading-lg mb-4">Meet Our Team</h2>
        <p class="text-lg text-muted-foreground mb-12 max-w-2xl">
          Our talented team brings diverse expertise and a shared passion for
          innovation. Learn more about our people and join our careers page.
        </p>
        <NuxtLink
          to="/careers"
          class="inline-flex px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
        >
          Explore Careers
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Lightbulb, Heart, Users, Award } from "lucide-vue-next";
</script>
