<template>
  <main class="max-w-container-max mx-auto px-6 py-12">

    <!-- Header -->
    <header class="text-center mb-10">
      <h1 class="font-display-title text-display-title text-on-surface mb-3">字房 · 文字栖居之所</h1>
      <p class="font-helper-text text-helper-text text-text-secondary flex items-center justify-center gap-2">
        <span class="material-symbols-outlined text-primary-container text-sm">history_edu</span>
        本站累计 {{ works.length }} 篇作品 · {{ totalWords }} 万字
      </p>
    </header>

    <!-- Category Tabs -->
    <div class="flex flex-wrap justify-center gap-3 mb-10">
      <button
        v-for="cat in categories"
        :key="cat"
        class="px-5 py-2 rounded-full font-label-capsule text-label-capsule transition-all duration-200 shadow-sm"
        :class="activeCategory === cat
          ? 'bg-primary-container text-on-primary'
          : 'bg-surface-pure text-on-surface border border-outline-variant hover:border-primary-container hover:text-primary-container'"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Works Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <template v-if="filteredWorks.length">
        <RouterLink
          v-for="work in filteredWorks"
          :key="work.slug"
          :to="`/works/${work.slug}`"
          class="card flex flex-col gap-4 group cursor-pointer relative overflow-hidden"
        >
          <div class="absolute -right-6 -top-6 text-surface-container opacity-40 rotate-12 pointer-events-none select-none">
            <span class="material-symbols-outlined" style="font-size:120px">format_quote</span>
          </div>
          <div class="flex justify-between items-start relative z-10">
            <span class="tag" :class="tagClass(work.category)">{{ work.category }}</span>
            <span class="material-symbols-outlined text-outline-variant group-hover:text-primary-container transition-colors">bookmark_border</span>
          </div>
          <h2 class="font-h2 text-h2 text-on-surface group-hover:text-primary transition-colors relative z-10">{{ work.title }}</h2>
          <p class="font-body-main text-body-main text-on-surface-variant line-clamp-2 relative z-10">{{ work.excerpt }}</p>
          <div class="mt-auto pt-4 flex items-center justify-between border-t border-border-subtle relative z-10">
            <span class="font-helper-text text-helper-text text-text-secondary flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px]">calendar_today</span> {{ work.date }}
            </span>
            <span class="font-helper-text text-helper-text text-text-secondary flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px]">menu_book</span> {{ work.wordCount }}
            </span>
          </div>
        </RouterLink>
      </template>

      <!-- Empty state -->
      <div v-else class="col-span-full flex flex-col items-center justify-center py-24 gap-4 text-center">
        <span class="material-symbols-outlined text-5xl text-outline-variant">edit_off</span>
        <p class="font-h2 text-h2 text-text-secondary">这里还空空的，正在酝酿……</p>
      </div>
    </div>

    <!-- Load more -->
    <div v-if="filteredWorks.length >= 4" class="flex justify-center mt-10">
      <button class="px-8 py-3 bg-surface-pure border border-primary text-primary font-body-main rounded-xl hover:bg-surface-container-low transition-colors flex items-center gap-2 group">
        加载更多作品
        <span class="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">expand_more</span>
      </button>
    </div>

  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['全部', '小说', '散文', '评论']
const activeCategory = ref('全部')

const works = [
  { slug: 'spring-afternoon-orange-cat', category: '散文', title: '春日的午后与一只橘猫', excerpt: '阳光透过书房的百叶窗，在木地板上切割出整齐的几何图形。橘猫安静地趴在最温暖的那一块光斑里，呼吸均匀。这大概是这一周里最平和的时刻。', date: '2024.03.15', wordCount: '3.2k 字' },
  { slug: 'cat-lost-notice', category: '小说', title: '寻猫启事：那只不存在的黑猫', excerpt: '巷口那张褪色的寻猫启事已经贴了三个月。照片上的黑猫眼睛闪着诡异的绿光。老林每天路过都会看一眼，直到那天晚上，他在自己的床头看到了那双一模一样的眼睛。', date: '2023.09.15', wordCount: '12.5k 字' },
  { slug: 'i-am-a-cat-review', category: '评论', title: '重读《我是猫》：百年后的讽刺与自省', excerpt: '夏目漱石借猫之口对人类社会的辛辣嘲讽，在今天看来依然刺骨。或许我们每个人心中，都住着那样一只冷眼旁观的猫，只是我们刻意忽略了它的叫声。', date: '2023.08.02', wordCount: '4.8k 字' },
  { slug: 'coffee-and-draft', category: '散文', title: '雨夜的咖啡与未完成的稿件', excerpt: '雨滴打在窗玻璃上，发出细碎而规律的声响。桌上的咖啡已经冷透，屏幕上的光标依然停留在同一个位置闪烁。写作，有时就是一场与自己的漫长对峙。', date: '2023.07.11', wordCount: '2.1k 字' },
  { slug: 'behind-the-hill', category: '小说', title: '在那座山丘后面', excerpt: '童年的记忆总是在夏日午后最清晰，那座被荒草覆盖的山丘，埋藏着太多不为人知的秘密。当我们再次攀登时，风依然是咸的……', date: '2024.01.20', wordCount: '4.2k 字' },
  { slug: 'silent-narrative-after-rain', category: '评论', title: '雨后的无声叙事', excerpt: '看完那部关于离别的独立电影，窗外正好下了一场阵雨。导演用大段的留白代替了哭泣，这种隐忍的表达方式反而让悲伤更具穿透力……', date: '2024.02.10', wordCount: '2.5k 字' },
]

const filteredWorks = computed(() =>
  activeCategory.value === '全部' ? works : works.filter(w => w.category === activeCategory.value)
)

const totalWords = computed(() => (works.reduce((acc, w) => acc + parseFloat(w.wordCount), 0) / 10).toFixed(1))

function tagClass(cat) {
  const map = {
    '小说': 'bg-secondary-container text-on-secondary-container',
    '散文': 'bg-surface-container-high text-on-surface-variant',
    '评论': 'bg-surface-dim text-on-surface',
  }
  return map[cat] || 'bg-surface-container text-on-surface'
}
</script>
