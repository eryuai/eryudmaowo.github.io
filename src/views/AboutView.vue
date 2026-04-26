<template>
  <main class="max-w-reading-width mx-auto px-6 py-16 space-y-16">

    <!-- Personal Intro -->
    <section class="text-center">
      <div class="w-28 h-28 mx-auto mb-6 bg-surface-container rounded-full border-4 border-surface-pure shadow-lg flex items-center justify-center">
        <span class="material-symbols-outlined fill text-primary-container" style="font-size:64px">pets</span>
      </div>
      <h1 class="font-display-title text-display-title text-on-surface mb-2">二鱼</h1>
      <p class="font-helper-text text-helper-text text-text-secondary mb-6">写作者 · 养猫人 · 流浪于文字之间</p>
      <div class="bg-surface-pure rounded-2xl p-6 border border-border-subtle shadow-sm text-left">
        <p class="font-body-main text-body-main text-on-surface leading-relaxed">
          你好，我是二鱼。一个正在努力把文字变成猫粮的写作者。<br /><br />
          我写小说，写散文，偶尔写一些不知道算不算文学批评的读书笔记。我喜欢在春日午后让大橘睡在我的稿子旁边，觉得那样写出来的字会更有温度。<br /><br />
          这个网站是我文字的家。所有在投稿里消失的故事，所有没能发表的散文，都会在这里找到一个角落，安静地待着。
        </p>
      </div>
    </section>

    <!-- Writing Philosophy -->
    <section>
      <h2 class="font-h1 text-h1 text-on-surface mb-6 flex items-center gap-2">
        <span class="material-symbols-outlined text-primary-container">format_quote</span>
        写作理念
      </h2>
      <div class="space-y-4">
        <blockquote
          v-for="line in philosophy"
          :key="line"
          class="border-l-2 border-primary-container pl-5 py-2 font-body-italic text-body-italic italic text-on-surface-variant leading-relaxed"
        >
          {{ line }}
        </blockquote>
      </div>
    </section>

    <!-- Achievements (can be empty) -->
    <section>
      <h2 class="font-h1 text-h1 text-on-surface mb-6 flex items-center gap-2">
        <span class="material-symbols-outlined text-secondary">workspace_premium</span>
        作品成绩
      </h2>
      <div class="bg-surface-pure rounded-2xl p-8 border border-dashed border-outline-variant text-center text-text-secondary">
        <span class="material-symbols-outlined text-4xl text-outline-variant mb-3 block">pending</span>
        <p class="font-body-main text-body-main">正在积累中，期待与各位分享……</p>
      </div>
    </section>

    <!-- Contact -->
    <section>
      <h2 class="font-h1 text-h1 text-on-surface mb-6 flex items-center gap-2">
        <span class="material-symbols-outlined text-tertiary">mail</span>
        联系方式
      </h2>
      <div class="flex flex-wrap gap-4">
        <a
          v-for="contact in contacts"
          :key="contact.label"
          :href="contact.href"
          class="flex items-center gap-3 bg-surface-pure border border-border-subtle rounded-xl px-5 py-3 font-body-main text-body-main text-on-surface hover:border-primary-container hover:text-primary-container transition-all duration-200 group"
        >
          <span class="material-symbols-outlined text-xl group-hover:text-primary-container transition-colors">{{ contact.icon }}</span>
          {{ contact.label }}
        </a>
      </div>
    </section>

    <!-- About Site -->
    <section>
      <h2 class="font-h1 text-h1 text-on-surface mb-6 flex items-center gap-2">
        <span class="material-symbols-outlined text-primary-container">info</span>
        关于本站
      </h2>
      <div class="card space-y-3 font-body-main text-body-main text-on-surface-variant">
        <p>🐾 创建于 2024 年春天，一边养猫一边搭建。</p>
        <p>⚙️ 技术栈：<strong class="text-on-surface">Vue 3</strong> + <strong class="text-on-surface">Vite</strong> + <strong class="text-on-surface">Tailwind CSS</strong>，部署于 Vercel。</p>
        <p>🎨 设计系统基于 <strong class="text-on-surface">Material Design 3</strong> 色彩规范，以「橘猫橙」为主色，「暖奶白」为底色。</p>
        <p>💬 评论系统由 <strong class="text-on-surface">Giscus</strong> 驱动，与 GitHub Discussions 打通。</p>
      </div>
    </section>

    <!-- Friends Links -->
    <section>
      <h2 class="font-h1 text-h1 text-on-surface mb-6 flex items-center gap-2">
        <span class="material-symbols-outlined text-accent-yellow">star</span>
        友情链接
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <a
          v-for="friend in friends"
          :key="friend.name"
          :href="friend.url"
          target="_blank"
          class="card text-center group"
        >
          <p class="font-semibold text-on-surface group-hover:text-primary-container transition-colors">{{ friend.name }}</p>
          <p class="font-helper-text text-helper-text text-text-secondary text-xs mt-1">{{ friend.desc }}</p>
        </a>
      </div>
    </section>

  </main>
</template>

<script setup>
const philosophy = [
  '写作是一种漫长的对话，与读者，与世界，也与自己。',
  '每一个被搁置的故事都在等待被重新拾起的那一天。',
  '文字的价值不在于发表，而在于它曾经真实地存在过。',
]

const contacts = [
  { label: 'eryudemaowo@example.com', href: 'mailto:eryudemaowo@example.com', icon: 'mail' },
  { label: 'RSS 订阅', href: '#', icon: 'rss_feed' },
]

const friends = [
  { name: '某写作者的角落', url: '#', desc: '写字 · 摄影 · 流浪' },
  { name: '无名书架', url: '#', desc: '读书笔记与生活碎片' },
  { name: '小镇暮色', url: '#', desc: '地方性写作与乡愁' },
]
</script>
