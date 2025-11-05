<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div
    :class="{ dark: colorMode.value === 'dark' }"
    class="min-h-screen bg-background text-foreground transition-colors duration-300"
  >
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <AppHeader />
    <main class="min-h-screen">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
