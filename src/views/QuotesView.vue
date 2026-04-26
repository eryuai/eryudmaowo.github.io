<template>
  <main class="max-w-container-max mx-auto px-6 py-12">

    <!-- Header -->
    <header class="text-center mb-10">
      <h1 class="font-display-title text-display-title text-on-surface mb-4">金句墙 · 偷来的星光</h1>
      <p class="font-body-main text-body-main text-text-secondary max-w-reading-width mx-auto">
        在这里，收集那些在阅读与生活中闪闪发光的句子。它们像是在漫长岁月里偷来的星光，照亮偶尔晦暗的角落。
      </p>
    </header>

    <!-- Tag filter -->
    <div class="w-full overflow-x-auto hide-scrollbar mb-10">
      <div class="flex items-center justify-center gap-3 min-w-max pb-2">
        <button
          v-for="tag in tags"
          :key="tag"
          class="px-5 py-2 rounded-full font-label-capsule text-label-capsule transition-all duration-200"
          :class="activeTag === tag
            ? 'bg-primary-container text-on-primary shadow-sm'
            : 'bg-surface-container hover:bg-surface-container-high text-on-surface'"
          @click="activeTag = tag"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- Masonry Grid -->
    <div class="masonry-grid">
      <div
        v-for="quote in filteredQuotes"
        :key="quote.id"
        class="masonry-item rounded-[20px] p-8 shadow-[0_8px_30px_-12px_rgba(140,79,22,0.08)] hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(140,79,22,0.12)] transition-all duration-300 relative group cursor-pointer border border-border-subtle/50"
        :style="{ backgroundColor: quote.bgColor }"
        @click="openModal(quote)"
      >
        <!-- Decorative quote mark -->
        <div class="absolute top-4 left-4 text-6xl leading-none select-none font-serif opacity-10" :style="{ color: quote.accentColor }">"</div>

        <div class="relative z-10">
          <p class="font-body-main text-body-main text-on-surface mb-5 leading-relaxed">{{ quote.text }}</p>

          <div v-if="quote.tags && quote.tags.length" class="flex flex-wrap gap-2 mb-4">
            <span v-for="t in quote.tags" :key="t" class="tag text-[11px] bg-white/60 text-on-surface-variant">{{ t }}</span>
          </div>

          <div class="flex justify-between items-end">
            <span
              class="material-symbols-outlined text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-primary-container"
              title="保存为图片"
            >photo_camera</span>
            <span class="font-helper-text text-helper-text text-text-secondary text-right block">—— {{ quote.source }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Transition name="modal">
      <div
        v-if="selectedQuote"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
        @click.self="selectedQuote = null"
      >
        <div
          class="max-w-lg w-full rounded-3xl p-10 shadow-2xl relative"
          :style="{ backgroundColor: selectedQuote.bgColor }"
        >
          <button
            class="absolute top-4 right-4 text-text-secondary hover:text-on-surface transition-colors"
            @click="selectedQuote = null"
          >
            <span class="material-symbols-outlined">close</span>
          </button>
          <div class="text-6xl leading-none select-none font-serif opacity-10 mb-2" :style="{ color: selectedQuote.accentColor }">"</div>
          <p class="font-h2 text-h2 text-on-surface leading-relaxed mb-6">{{ selectedQuote.text }}</p>
          <p class="font-body-main text-body-main text-text-secondary mb-6">—— {{ selectedQuote.source }}</p>
          <button class="w-full bg-primary-container text-on-primary py-3 rounded-xl font-semibold hover:bg-surface-tint transition-colors flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-lg">download</span>
            另存为图片
          </button>
        </div>
      </div>
    </Transition>

  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const tags = ['全部', '孤独', '爱情', '生死', '时间', '写作', '自然', '猫']
const activeTag = ref('全部')

const quotes = [
  {
    id: 1, text: '哪里会有人喜欢孤独，不过是不喜欢失望罢了。',
    source: '村上春树《挪威的森林》', tags: ['孤独'], bgColor: '#FFFFFF', accentColor: '#8c4f16',
  },
  {
    id: 2, text: '岁月不饶人，我亦未曾饶过岁月。',
    source: '木心《云雀叫了一整天》', tags: ['时间'], bgColor: '#fff1e9', accentColor: '#705b3e',
  },
  {
    id: 3, text: '草在结它的种子，风在摇它的叶子。我们站着，不说话，就十分美好。',
    source: '顾城《门前》', tags: ['自然'], bgColor: '#f4f9f4', accentColor: '#496549',
  },
  {
    id: 4, text: '我有一只猫，它叫二鱼。它不明白什么是文学，但它懂得如何在我的稿纸上留下最温暖的印记。',
    source: '窝主日常碎碎念', tags: ['猫', '写作'], bgColor: '#FFFFFF', accentColor: '#8c4f16',
  },
  {
    id: 5, text: '万物皆有裂痕，那是光照进来的地方。',
    source: '莱昂纳德·科恩', tags: ['生死'], bgColor: '#fff1e9', accentColor: '#705b3e',
  },
  {
    id: 6, text: '我们都在阴沟里，但仍有人仰望星空。',
    source: '奥斯卡·王尔德', tags: ['生死', '孤独'], bgColor: '#f4f9f4', accentColor: '#496549',
  },
  {
    id: 7, text: '写作是一种孤独的劳动，是最长的孤独，是不可分享的孤独。',
    source: '卡夫卡', tags: ['写作', '孤独'], bgColor: '#FFFFFF', accentColor: '#8c4f16',
  },
  {
    id: 8, text: '爱是一种双向奔赴，而孤独则是单行道上最美的风景。',
    source: '二鱼日记', tags: ['爱情', '孤独'], bgColor: '#fff1e9', accentColor: '#705b3e',
  },
  {
    id: 9, text: '时间不是流走的，是我们走过了时间。',
    source: '博尔赫斯', tags: ['时间'], bgColor: '#f4f9f4', accentColor: '#496549',
  },
]

const filteredQuotes = computed(() =>
  activeTag.value === '全部' ? quotes : quotes.filter(q => q.tags?.includes(activeTag.value))
)

const selectedQuote = ref(null)
function openModal(quote) {
  selectedQuote.value = quote
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .rounded-3xl,
.modal-leave-active .rounded-3xl {
  transition: transform 0.2s ease;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
.modal-enter-from .rounded-3xl {
  transform: scale(0.95);
}
</style>
