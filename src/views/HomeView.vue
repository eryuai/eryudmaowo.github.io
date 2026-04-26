<template>
  <main class="max-w-container-max mx-auto px-6 py-12 space-y-16">

    <!-- Hero -->
    <section class="flex flex-col md:flex-row items-center gap-12 relative">
      <!-- Decorative paw prints -->
      <div class="absolute -top-8 -left-4 text-primary-container/10 -rotate-12 pointer-events-none select-none">
        <span class="material-symbols-outlined" style="font-size:72px">pets</span>
      </div>
      <div class="absolute bottom-0 -right-4 text-primary-container/10 rotate-12 pointer-events-none select-none">
        <span class="material-symbols-outlined" style="font-size:96px">pets</span>
      </div>

      <!-- Avatar -->
      <div class="flex-shrink-0 relative group">
        <div class="absolute inset-0 bg-primary-container rounded-full blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div class="relative z-10 w-44 h-44 md:w-48 md:h-48 rounded-full border-4 border-surface-pure shadow-lg overflow-hidden bg-surface-container flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <span class="material-symbols-outlined fill text-primary-container" style="font-size:96px">pets</span>
        </div>
      </div>

      <!-- Intro -->
      <div class="text-center md:text-left z-10">
        <h1 class="font-display-title text-display-title text-on-surface mb-3">笔名：二鱼</h1>
        <p class="font-h2 text-h2 text-text-secondary mb-6 max-w-md leading-relaxed">
          一位写作者用文字喂养小猫的地方。
        </p>
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <span class="flex items-center gap-2 bg-surface-pure px-4 py-2 rounded-full shadow-sm border border-border-subtle text-helper-text font-helper-text text-on-surface-variant">
            <span class="material-symbols-outlined fill text-primary-container text-xl">pets</span>
            正在养第 2 只猫
          </span>
          <span class="flex items-center gap-2 bg-surface-pure px-4 py-2 rounded-full shadow-sm border border-border-subtle text-helper-text font-helper-text text-on-surface-variant">
            <span class="material-symbols-outlined text-tertiary text-xl">edit_document</span>
            累计写作 8.2 万字
          </span>
        </div>
      </div>
    </section>

    <!-- Current Cat Progress -->
    <section class="max-w-2xl mx-auto">
      <div class="bg-surface-pure rounded-3xl shadow-[0_8px_30px_-10px_rgba(140,79,22,0.1)] p-8 text-center relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
        <div class="absolute inset-0 bg-gradient-to-br from-surface-container-low via-surface-pure to-surface-pure opacity-60 pointer-events-none"></div>
        <div class="relative z-10">
          <div class="w-28 h-28 mx-auto mb-5 bg-surface-container-high rounded-full overflow-hidden border-4 border-white shadow-md flex items-center justify-center">
            <span class="material-symbols-outlined fill text-primary-container" style="font-size:64px">pets</span>
          </div>
          <h2 class="font-h2 text-h2 text-on-surface mb-1">大橘</h2>
          <p class="font-helper-text text-helper-text text-text-secondary mb-6">幼猫期 · 正在茁壮成长</p>
          <div class="max-w-sm mx-auto mb-6">
            <div class="flex justify-between mb-2">
              <span class="font-label-capsule text-label-capsule text-primary-container">进度</span>
              <span class="font-label-capsule text-label-capsule text-text-secondary">32,500 / 50,000 字粮</span>
            </div>
            <div class="h-3 w-full bg-surface-container rounded-full overflow-hidden">
              <div class="h-full bg-primary-container rounded-full transition-all duration-1000" style="width:65%"></div>
            </div>
          </div>
          <RouterLink
            to="/cats"
            class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-7 py-3 rounded-xl font-semibold shadow-md hover:bg-surface-tint hover:-translate-y-0.5 transition-all duration-200"
          >
            <span class="material-symbols-outlined text-lg">ink_pen</span>
            去字房写字
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Monthly Goal -->
    <section>
      <div class="card flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary flex-shrink-0">
            <span class="material-symbols-outlined">flag</span>
          </div>
          <div>
            <h3 class="font-h2 text-[18px] text-on-surface font-semibold mb-1">本月写作目标</h3>
            <p class="font-helper-text text-helper-text text-text-secondary">已完成 6,200 字 · 还差 3,800 字</p>
          </div>
        </div>
        <div class="w-full md:max-w-xs">
          <div class="flex justify-end mb-2">
            <span class="font-label-capsule text-label-capsule text-tertiary">目标 10,000 字</span>
          </div>
          <div class="h-3 w-full bg-surface-container rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-1000" style="width:62%;background:#A8C8A6"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Works -->
    <section>
      <div class="flex items-center justify-between mb-8">
        <h2 class="font-h2 text-h2 text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-primary-container">auto_stories</span>
          最新作品
        </h2>
        <RouterLink to="/works" class="font-helper-text text-helper-text text-primary-container hover:underline decoration-dotted flex items-center gap-1">
          查看全部 <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </RouterLink>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RouterLink
          v-for="work in latestWorks"
          :key="work.slug"
          :to="`/works/${work.slug}`"
          class="card flex flex-col h-full group"
        >
          <div class="mb-3">
            <span :class="work.tagClass" class="tag mb-3 inline-block">{{ work.category }}</span>
            <h3 class="font-h2 text-[18px] text-on-surface leading-snug mb-2 group-hover:text-primary-container transition-colors">{{ work.title }}</h3>
            <p class="font-body-main text-body-main text-text-secondary text-sm line-clamp-3">{{ work.excerpt }}</p>
          </div>
          <div class="mt-auto pt-4 border-t border-border-subtle flex justify-between">
            <span class="font-helper-text text-helper-text text-text-secondary">{{ work.wordCount }}</span>
            <span class="font-helper-text text-helper-text text-text-secondary">{{ work.date }}</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Recently Read -->
    <section>
      <div class="flex items-center justify-between mb-8">
        <h2 class="font-h2 text-h2 text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-secondary">library_books</span>
          最近读完
        </h2>
        <RouterLink to="/bookshelf" class="font-helper-text text-helper-text text-primary-container hover:underline decoration-dotted flex items-center gap-1">
          书架 <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </RouterLink>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="book in recentBooks"
          :key="book.title"
          class="card flex gap-4 hover:cursor-pointer"
        >
          <div class="w-20 h-28 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container flex items-center justify-center shadow-sm">
            <span class="material-symbols-outlined fill text-secondary" style="font-size:40px">menu_book</span>
          </div>
          <div class="flex flex-col min-w-0">
            <h3 class="font-h2 text-[16px] text-on-surface font-semibold mb-1 truncate">{{ book.title }}</h3>
            <p class="font-helper-text text-helper-text text-text-secondary mb-2">{{ book.author }}</p>
            <div class="flex gap-0.5 text-primary-container mb-2">
              <span
                v-for="i in 5"
                :key="i"
                class="material-symbols-outlined text-[16px]"
                :class="i <= book.rating ? 'fill' : 'text-surface-variant'"
              >set_meal</span>
            </div>
            <p class="font-helper-text text-helper-text text-text-secondary text-xs line-clamp-3">{{ book.comment }}</p>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
const latestWorks = [
  {
    slug: 'spring-afternoon-orange-cat',
    category: '散文',
    tagClass: 'bg-surface-container-high text-on-surface-variant',
    title: '《春日的午后与一只橘猫》',
    excerpt: '阳光透过书房的百叶窗，在木地板上切割出整齐的几何图形。橘猫安静地趴在最温暖的那一块光斑里，呼吸均匀。这大概是这一周里最平和的时刻。',
    wordCount: '3,200 字',
    date: '3 天前',
  },
  {
    slug: 'cat-food-at-three',
    category: '散文',
    tagClass: 'bg-secondary-container text-on-secondary-container',
    title: '《下午三点的猫粮》',
    excerpt: '阳光正好打在地板的纹理上，大橘伸了个长长的懒腰。倒猫粮的声音是这个屋子里最清脆的音符，它连接着两个孤独灵魂的日常共鸣……',
    wordCount: '1,800 字',
    date: '1 周前',
  },
  {
    slug: 'silent-narrative-after-rain',
    category: '评论',
    tagClass: 'bg-surface-dim text-on-surface',
    title: '《雨后的无声叙事》',
    excerpt: '看完那部关于离别的独立电影，窗外正好下了一场阵雨。导演用大段的留白代替了哭泣，这种隐忍的表达方式反而让悲伤更具穿透力……',
    wordCount: '2,500 字',
    date: '2 周前',
  },
]

const recentBooks = [
  {
    title: '《包法利夫人》',
    author: '福楼拜',
    rating: 5,
    comment: '福楼拜的手术刀般精准的描写，把欲望的虚妄解剖得淋漓尽致。浪漫主义的悲歌。',
  },
  {
    title: '《冬牧场》',
    author: '李娟',
    rating: 4,
    comment: '李娟的文字总能带来极大的抚慰，在严酷的自然环境中，人的坚韧和温情闪闪发光。',
  },
  {
    title: '《夜晚的潜水艇》',
    author: '陈春成',
    rating: 5,
    comment: '想象力在陈春成的笔下肆意流淌，像是在梦境与现实的边界游走，文字精妙绝伦。',
  },
]
</script>
