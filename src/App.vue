<template>
  <div class="min-h-screen flex flex-col bg-background-warm">
    <NavBar />
    <router-view v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" class="flex-1" />
      </Transition>
    </router-view>
    <AppFooter />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>
