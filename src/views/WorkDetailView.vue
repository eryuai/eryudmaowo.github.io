<template>
  <main class="max-w-reading-width mx-auto px-6 py-16">

    <!-- Article Header -->
    <header class="mb-12 text-center">
      <span class="tag bg-surface-container-high text-on-surface-variant mb-4 inline-block">{{ article.category }}</span>
      <h1 class="font-display-title text-display-title text-on-surface mb-5 leading-tight">《{{ article.title }}》</h1>
      <p v-if="article.subtitle" class="font-body-italic text-body-italic text-text-secondary italic mb-5">{{ article.subtitle }}</p>
      <div class="flex items-center justify-center gap-2 text-text-secondary font-helper-text text-helper-text">
        <span>{{ article.category }}</span>
        <span class="text-xs opacity-50">•</span>
        <span>{{ article.date }}</span>
        <span class="text-xs opacity-50">•</span>
        <span>{{ article.wordCount }}</span>
        <span class="text-xs opacity-50">•</span>
        <span>阅读 {{ article.readTime }}</span>
      </div>
    </header>

    <!-- Featured Image -->
    <div class="mb-12 rounded-2xl overflow-hidden shadow-sm bg-surface-container aspect-video flex items-center justify-center">
      <span class="material-symbols-outlined fill text-primary-container/30" style="font-size:80px">image</span>
    </div>

    <!-- Article Body -->
    <article class="font-body-main text-body-main text-on-surface space-y-7 mb-16 leading-[1.9]">
      <p v-for="(para, i) in article.paragraphs" :key="i">{{ para }}</p>
    </article>

    <!-- Author's Note -->
    <div class="bg-surface-container-low border-2 border-dashed border-outline-variant rounded-2xl p-6 mb-16 relative">
      <div class="absolute -top-4 left-6 bg-surface-pure border border-outline-variant px-4 py-1 rounded-full font-label-capsule text-label-capsule text-on-surface flex items-center gap-1 shadow-sm">
        🐱 写在故事之外
      </div>
      <p class="font-body-italic text-body-italic text-on-surface-variant italic pt-3">
        {{ article.authorNote }}
      </p>
    </div>

    <!-- Like Button -->
    <div class="flex flex-col items-center mb-16 gap-3">
      <button
        class="flex items-center gap-3 bg-primary-container text-on-primary px-8 py-4 rounded-xl font-h2 text-h2 shadow-sm hover:bg-surface-tint hover:-translate-y-1 hover:shadow-md transition-all duration-300"
        @click="like++"
      >
        给二鱼一颗小鱼干 🐟
        <span class="bg-white/20 px-3 py-1 rounded-full text-sm font-normal">{{ like }}</span>
      </button>
      <p class="font-helper-text text-helper-text text-text-secondary">谢谢你的投喂，大橘今晚加餐啦！</p>
    </div>

    <!-- Prev / Next -->
    <div class="flex justify-between items-center border-t border-border-subtle pt-8">
      <RouterLink to="/works/coffee-and-draft" class="group flex flex-col max-w-[45%] text-left">
        <span class="font-helper-text text-helper-text text-text-secondary flex items-center gap-1 mb-1">
          <span class="material-symbols-outlined text-sm">arrow_back</span> 上一篇
        </span>
        <span class="font-h2 text-h2 text-on-surface group-hover:text-primary-container transition-colors truncate">《雨夜与一本旧书》</span>
      </RouterLink>
      <RouterLink to="/works/cat-lost-notice" class="group flex flex-col max-w-[45%] text-right">
        <span class="font-helper-text text-helper-text text-text-secondary flex items-center justify-end gap-1 mb-1">
          下一篇 <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </span>
        <span class="font-h2 text-h2 text-on-surface group-hover:text-primary-container transition-colors truncate">《阳台上的罗勒》</span>
      </RouterLink>
    </div>

    <!-- Comments placeholder -->
    <div class="mt-16 pt-8 border-t border-border-subtle">
      <h3 class="font-h2 text-h2 text-on-surface mb-6 flex items-center gap-2">
        📮 留点什么吧
      </h3>
      <div class="bg-surface-container rounded-2xl p-8 text-center text-text-secondary font-helper-text text-helper-text">
        <span class="material-symbols-outlined text-4xl text-outline-variant mb-3 block">comment</span>
        评论区由 Giscus 驱动，请在此处嵌入 Giscus 组件。
      </div>
    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const like = ref(42)

const article = {
  category: '散文',
  title: '春日的午后与一只橘猫',
  subtitle: '关于时间、阳光与一只不知名的猫',
  date: '2024.03.15',
  wordCount: '3,200 字',
  readTime: '8 分钟',
  paragraphs: [
    '阳光透过半开的百叶窗，在原木色的地板上切割出整齐的光栅。春日的微风带着些许暖意，轻轻拂过窗台上的绿萝。这是一天中最静谧的时刻，连空气中漂浮的尘埃也仿佛放慢了舞步。',
    '就在那片最明亮的光斑里，盘踞着一个毛茸茸的橘色线团。那是我家的猫，它甚至没有一个正经的名字，我们只是简单地叫它"大橘"。此刻，它正以一种极其舒展的姿态侧躺着，腹部随着呼吸均匀地起伏，发出微弱而富有节奏的呼噜声。',
    '它的毛发在阳光下泛着金色的光泽，柔软得如同刚刚梳理过的羊绒。偶尔，它的耳朵会神经质地抖动一下，似乎在梦境中捕捉到了某只不知死活的飞虫。我放轻脚步走近，生怕惊扰了这份宁静。',
    '猫的睡眠是这世上最治愈的画面之一。看着它毫无防备地袒露着肚皮，你会觉得这个世界上的一切烦恼都被按下了暂停键。没有截稿日，没有复杂的社交，只有温度适宜的阳光和规律的呼吸声。',
    '我盘腿在它身边坐下，伸出手指轻轻触碰它温热的肉垫。它并没有醒来，只是下意识地将爪子缩了缩，然后在喉咙里发出了一声含糊不清的呢喃。那一刻，我觉得我和这只猫之间建立了一种奇妙的连接，一种无需言语，只有在这个春日午后才能领会的默契。',
  ],
  authorNote: '那个下午我原本因为工作压力而焦虑万分，但在看到大橘四仰八叉睡在阳光下的那一刻，突然就释怀了。猫的哲学很简单：既然阳光正好，那不如先睡个好觉。这篇短文记录的不仅是猫的日常，也是我久违的内心平静。',
}
</script>
