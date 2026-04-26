<template>
  <footer class="bg-stone-100 border-t border-stone-200 mt-20">
    <div class="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-container-max mx-auto gap-4">
      <div class="text-base font-semibold font-display-title text-primary-container">
        © 二鱼的猫窝 · 书写与养猫的平和岁时记
      </div>
      <div class="flex flex-wrap justify-center gap-6">
        <a
          v-for="link in footerLinks"
          :key="link.label"
          :href="link.href"
          class="font-helper-text text-helper-text text-on-surface-variant hover:text-on-surface underline decoration-dotted opacity-70 hover:opacity-100 transition-all"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerLinks = [
  { label: 'RSS 订阅', href: '#' },
  { label: '邮件联系', href: 'mailto:eryudemaowo@example.com' },
  { label: '友情链接', href: '#' },
  { label: '版权说明', href: '#' },
]
</script>
