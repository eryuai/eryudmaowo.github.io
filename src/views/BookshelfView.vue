<template>
  <main class="max-w-container-max mx-auto px-6 py-12">

    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <div>
        <h1 class="font-display-title text-display-title text-on-surface mb-3 flex items-center gap-3">
          书架
          <span class="material-symbols-outlined fill text-primary-container text-[32px]">menu_book</span>
        </h1>
        <p class="font-body-italic text-body-italic text-text-secondary max-w-md">
          每一本书都是一个安静的角落。这里记录着思维的足迹与片刻的安宁。
        </p>
      </div>
      <div class="inline-flex items-center gap-3 bg-surface-pure rounded-full px-5 py-3 border border-border-subtle shadow-sm flex-shrink-0">
        <span class="material-symbols-outlined fill text-primary-container">auto_graph</span>
        <span class="font-helper-text text-helper-text text-on-surface-variant font-medium">
          2026 年已读 12 本 · 累计 85 万字 · 平均评分 4.2
        </span>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex gap-6 border-b border-border-subtle mb-10">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="pb-3 px-1 flex items-center gap-2 transition-colors duration-200 border-b-2 -mb-px"
        :class="activeTab === tab.id
          ? 'border-primary-container text-primary-container font-semibold font-h2 text-[18px]'
          : 'border-transparent text-text-secondary hover:text-on-surface font-h2 text-[18px]'"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
        <span class="text-xs rounded-full px-2 py-0.5" :class="activeTab === tab.id ? 'bg-surface-variant text-text-secondary' : 'bg-surface-pure border border-border-subtle text-text-secondary'">{{ tab.count }}</span>
      </button>
    </div>

    <!-- Book Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      <article
        v-for="book in filteredBooks"
        :key="book.title"
        class="group bg-surface-pure rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col border border-transparent hover:border-border-subtle cursor-pointer"
        :class="book.status === 'reading' ? 'ring-1 ring-primary-container/20' : ''"
      >
        <!-- Cover -->
        <div class="w-full aspect-[2/3] mb-5 overflow-hidden rounded-lg shadow-sm relative bg-surface-container flex-shrink-0 flex items-center justify-center">
          <span class="material-symbols-outlined fill text-secondary/30 group-hover:scale-110 transition-transform duration-500" style="font-size:48px">menu_book</span>
          <div v-if="book.status === 'reading'" class="absolute top-2 left-2 bg-primary-container/90 text-surface-pure font-label-capsule text-label-capsule px-2 py-1 rounded-md shadow-sm">
            在读
          </div>
        </div>

        <div class="flex-grow flex flex-col justify-between">
          <div>
            <h3 class="font-semibold text-[17px] text-on-surface line-clamp-1 mb-1">{{ book.title }}</h3>
            <p class="font-helper-text text-helper-text text-text-secondary line-clamp-1 mb-3">{{ book.author }}</p>
          </div>

          <!-- Rating or Progress -->
          <div v-if="book.status === 'reading'">
            <div class="flex justify-between font-label-capsule text-label-capsule text-text-secondary mb-1">
              <span>进度</span><span>{{ book.progress }}%</span>
            </div>
            <div class="w-full h-2.5 bg-surface-variant rounded-full overflow-hidden">
              <div class="bg-primary-container h-full rounded-full transition-all duration-1000" :style="`width:${book.progress}%`"></div>
            </div>
          </div>
          <div v-else class="flex gap-0.5 text-primary-container">
            <span
              v-for="i in 5"
              :key="i"
              class="material-symbols-outlined text-[18px]"
              :class="i <= (book.rating || 0) ? 'fill' : 'text-surface-variant'"
            >set_meal</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Load more -->
    <div class="mt-16 text-center">
      <button class="inline-flex items-center gap-2 font-body-main text-body-main text-primary-container border-b border-primary-container pb-0.5 hover:text-secondary hover:border-secondary transition-colors group">
        翻开下一页
        <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
    </div>

  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const tabs = [
  { id: 'read', label: '已读', count: 85 },
  { id: 'reading', label: '在读', count: 3 },
  { id: 'want', label: '想读', count: 14 },
]
const activeTab = ref('read')

const books = [
  { title: '悉达多', author: '赫尔曼·黑塞', status: 'read', rating: 5 },
  { title: '秋园', author: '杨本芬', status: 'read', rating: 4 },
  { title: '百年孤独', author: '加西亚·马尔克斯', status: 'reading', progress: 42 },
  { title: '猫鼠游戏', author: '弗兰克·阿巴内尔', status: 'read', rating: 3 },
  { title: '包法利夫人', author: '福楼拜', status: 'read', rating: 5 },
  { title: '冬牧场', author: '李娟', status: 'read', rating: 4 },
  { title: '夜晚的潜水艇', author: '陈春成', status: 'read', rating: 5 },
  { title: '我与地坛', author: '史铁生', status: 'read', rating: 5 },
  { title: '挪威的森林', author: '村上春树', status: 'reading', progress: 75 },
  { title: '霍乱时期的爱情', author: '马尔克斯', status: 'want' },
  { title: '繁花', author: '金宇澄', status: 'want' },
  { title: '呼兰河传', author: '萧红', status: 'reading', progress: 20 },
]

const filteredBooks = computed(() => books.filter(b => b.status === activeTab.value))
</script>
