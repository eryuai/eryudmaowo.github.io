<template>
  <nav class="bg-[#fdfaf6] sticky top-0 z-50 border-b border-stone-200/60 shadow-[0_4px_20px_-4px_rgba(232,155,92,0.08)]">
    <div class="flex justify-between items-center px-6 py-4 max-w-container-max mx-auto">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 text-xl font-bold font-display-title text-on-surface hover:text-primary-container transition-colors duration-300">
        <span class="material-symbols-outlined fill text-primary-container text-2xl">pets</span>
        二鱼的猫窝
      </RouterLink>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-7">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="font-body-main text-[15px] text-on-surface-variant hover:text-primary-container transition-colors duration-200 relative pb-0.5"
          active-class="text-primary-container font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-container after:rounded-full"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <!-- Right icons -->
      <div class="flex items-center gap-3 text-primary-container">
        <button class="hover:scale-110 transition-transform duration-200">
          <span class="material-symbols-outlined text-[22px]">rss_feed</span>
        </button>
        <!-- Mobile menu button -->
        <button
          class="md:hidden hover:scale-110 transition-transform duration-200"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span class="material-symbols-outlined text-[22px]">{{ mobileMenuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-border-subtle bg-[#fdfaf6] px-6 pb-4">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block py-3 font-body-main text-on-surface-variant hover:text-primary-container transition-colors border-b border-border-subtle last:border-0"
          active-class="text-primary-container font-semibold"
          @click="mobileMenuOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: '猫窝' },
  { to: '/works', label: '字房' },
  { to: '/bookshelf', label: '书架' },
  { to: '/cats', label: '字粮' },
  { to: '/quotes', label: '金句墙' },
  { to: '/guestbook', label: '留言' },
  { to: '/about', label: '关于' },
]
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
