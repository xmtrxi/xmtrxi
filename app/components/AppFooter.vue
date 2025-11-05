<template>
  <footer class="border-t border-border bg-secondary/30 mt-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <h3 class="font-bold text-lg mb-4">xmtrxi</h3>
          <p class="text-sm text-muted-foreground">
            Pioneering innovative technology solutions for the future.
          </p>
          <div class="flex gap-4 mt-4">
            <a
              href="#"
              class="text-muted-foreground hover:text-accent transition-colors"
            >
              <span class="sr-only">GitHub</span>
              <Github class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="text-muted-foreground hover:text-accent transition-colors"
            >
              <span class="sr-only">Twitter</span>
              <Twitter class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="text-muted-foreground hover:text-accent transition-colors"
            >
              <span class="sr-only">LinkedIn</span>
              <Linkedin class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Product -->
        <div>
          <h4 class="font-semibold text-sm mb-4">Product</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                to="/services"
                class="text-muted-foreground hover:text-accent transition-colors"
                >Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/projects"
                class="text-muted-foreground hover:text-accent transition-colors"
                >Projects</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/open-source"
                class="text-muted-foreground hover:text-accent transition-colors"
                >Open Source</NuxtLink
              >
            </li>
            <li>
              <a
                href="#"
                class="text-muted-foreground hover:text-accent transition-colors"
                >Pricing</a
              >
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-semibold text-sm mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                to="/about"
                class="text-muted-foreground hover:text-accent transition-colors"
                >About</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/blog"
                class="text-muted-foreground hover:text-accent transition-colors"
                >Blog</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/careers"
                class="text-muted-foreground hover:text-accent transition-colors"
                >Careers</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="text-muted-foreground hover:text-accent transition-colors"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="font-semibold text-sm mb-4">Legal</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                to="/privacy"
                class="text-muted-foreground hover:text-accent transition-colors"
                >Privacy Policy</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/terms"
                class="text-muted-foreground hover:text-accent transition-colors"
                >Terms of Service</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/faq"
                class="text-muted-foreground hover:text-accent transition-colors"
                >FAQ</NuxtLink
              >
            </li>
            <li>
              <a
                href="#"
                class="text-muted-foreground hover:text-accent transition-colors"
                >Support</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
      >
        <p>&copy; 2025 xmtrxi. All rights reserved.</p>
        <p>Crafted with precision and innovation.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github, Twitter, Linkedin } from "lucide-vue-next";
</script>
