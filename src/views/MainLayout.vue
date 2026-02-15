<script setup lang="ts">
import SidebarComponent from '@/components/SidebarComponent.vue';
import { SidebarProvider } from '@/components/ui/sidebar';
import { RouterView } from 'vue-router';
</script>

<template>
  <SidebarProvider>
    <SidebarComponent />
    <main class="w-full min-h-screen bg-gray-200/50 flex flex-col">
      <RouterView />
    </main>
  </SidebarProvider>
</template>
