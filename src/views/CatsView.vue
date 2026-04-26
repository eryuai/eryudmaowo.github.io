<template>
  <main class="max-w-container-max mx-auto px-6 py-12">

    <!-- Header -->
    <header class="text-center mb-16 relative">
      <span class="material-symbols-outlined text-primary-container/15 absolute top-0 right-1/4 -z-10 rotate-12 select-none" style="font-size:72px">pets</span>
      <span class="material-symbols-outlined text-accent-yellow/15 absolute bottom-0 left-1/4 -z-10 -rotate-12 select-none" style="font-size:60px">cruelty_free</span>
      <h1 class="font-display-title text-display-title text-on-surface mb-3">字粮 · 猫咪养成日记</h1>
      <p class="font-body-main text-body-main text-text-secondary">每一个字，都是喂给小猫的一颗粮</p>
    </header>

    <!-- Current Cat (Big Card) -->
    <section class="mb-16">
      <div class="bg-gradient-to-br from-surface-bright to-secondary-container/30 rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_-10px_rgba(140,79,22,0.1)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 border border-border-subtle">
        <!-- Decorative blobs -->
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <!-- Cat illustration -->
          <div class="w-56 h-56 md:w-72 md:h-72 rounded-full bg-surface-pure flex items-center justify-center shadow-inner border-4 border-surface-pure flex-shrink-0 relative">
            <span class="material-symbols-outlined fill text-primary-container" style="font-size:128px">pets</span>
            <!-- Stage badge -->
            <div class="absolute bottom-3 right-3 bg-surface-pure px-3 py-1.5 rounded-full shadow-md border border-border-subtle flex items-center gap-1.5">
              <span class="material-symbols-outlined fill text-primary-container text-sm">star</span>
              <span class="font-label-capsule text-label-capsule text-on-surface font-bold">阶段：幼猫</span>
            </div>
          </div>

          <!-- Details -->
          <div class="flex-1 text-center md:text-left space-y-5">
            <div>
              <h2 class="font-h1 text-h1 text-on-surface mb-1">大橘</h2>
              <p class="font-body-main text-body-main text-text-secondary">大橘今天也吃得很饱，正在努力长成少年猫呢。</p>
            </div>
            <div class="space-y-2 pt-2">
              <div class="flex justify-between items-end">
                <span class="font-helper-text text-helper-text text-text-secondary flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">edit_document</span> 写作喂食进度
                </span>
                <span class="font-h2 text-primary-container font-bold">32,500 <span class="text-sm text-text-secondary font-normal">/ 50,000 字</span></span>
              </div>
              <div class="h-4 bg-surface-dim rounded-full overflow-hidden relative">
                <div
                  class="absolute top-0 left-0 h-full bg-primary-container rounded-full transition-all duration-1000 ease-out"
                  style="width:65%;background-image:repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,255,255,0.2) 10px,rgba(255,255,255,0.2) 20px)"
                ></div>
              </div>
            </div>
            <RouterLink
              to="/works"
              class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-surface-tint hover:-translate-y-0.5 transition-all duration-200"
            >
              <span class="material-symbols-outlined text-lg">edit</span>
              去写字赚猫粮
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Growth Timeline -->
    <section class="mb-16 px-2">
      <h3 class="font-h2 text-h2 text-on-surface mb-8 text-center flex items-center justify-center gap-2">
        <span class="material-symbols-outlined text-text-secondary">timeline</span>
        成长轨迹
      </h3>
      <div class="relative max-w-2xl mx-auto">
        <!-- Background track -->
        <div class="absolute top-5 left-0 right-0 h-1 bg-surface-dim rounded-full -translate-y-px"></div>
        <!-- Active track -->
        <div class="absolute top-5 left-0 h-1 bg-primary-container rounded-full -translate-y-px transition-all duration-1000" style="width:65%"></div>

        <div class="flex justify-between relative z-10">
          <div
            v-for="(stage, i) in stages"
            :key="i"
            class="flex flex-col items-center gap-2"
            :class="i === 2 ? '-mt-2' : ''"
          >
            <div
              class="flex items-center justify-center rounded-full shadow-md ring-4 ring-background transition-all duration-300"
              :class="stage.active
                ? 'w-14 h-14 bg-surface-pure text-primary-container ring-primary-container shadow-[0_4px_15px_-3px_rgba(232,155,92,0.3)]'
                : stage.done
                  ? 'w-10 h-10 bg-primary-container text-on-primary'
                  : 'w-10 h-10 bg-surface-pure text-text-secondary border border-border-subtle opacity-60'"
            >
              <span class="material-symbols-outlined" :class="stage.active ? 'text-xl fill' : 'text-sm'" :style="stage.done && !stage.active ? 'font-variation-settings: FILL 1' : ''">{{ stage.icon }}</span>
            </div>
            <div class="text-center">
              <span class="block font-label-capsule text-label-capsule font-bold" :class="stage.active ? 'text-primary-container text-sm' : stage.done ? 'text-on-surface' : 'text-text-secondary'">{{ stage.label }}</span>
              <span class="block text-[10px] font-helper-text" :class="stage.active ? 'text-primary-container' : 'text-text-secondary'">{{ stage.words }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Completed Cats -->
    <section class="mb-16">
      <div class="flex items-center justify-between mb-8">
        <h3 class="font-h2 text-h2 text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-primary-container">home</span>
          猫窝 · 已养成的猫
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Completed cat card -->
        <article
          v-for="cat in completedCats"
          :key="cat.name"
          class="card group"
        >
          <div class="aspect-square rounded-2xl bg-surface-container overflow-hidden mb-5 relative flex items-center justify-center">
            <span class="material-symbols-outlined fill text-secondary/40 group-hover:scale-105 transition-transform duration-500" style="font-size:80px">pets</span>
            <div class="absolute top-3 right-3 bg-surface-pure/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-text-secondary flex items-center gap-1 shadow-sm">
              <span class="material-symbols-outlined text-[14px]">check_circle</span> 养成于 {{ cat.year }}
            </div>
          </div>
          <h4 class="font-h2 text-lg text-on-surface mb-2">{{ cat.name }}</h4>
          <div class="space-y-1.5 mb-5">
            <p class="font-helper-text text-helper-text text-text-secondary flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-outline">menu_book</span>
              陪我写完了《{{ cat.work }}》
            </p>
            <p class="font-helper-text text-helper-text text-text-secondary flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-outline">history_edu</span>
              累计陪伴 {{ cat.words }} 万字
            </p>
          </div>
          <button
            class="w-full bg-surface-pure border border-outline-variant text-on-surface-variant px-4 py-2.5 rounded-xl font-semibold hover:bg-surface-bright hover:border-primary-container hover:text-primary-container transition-colors flex items-center justify-center gap-2"
            @click="petCat(cat)"
          >
            <span class="material-symbols-outlined text-lg">front_hand</span>
            撸猫 <span v-if="cat.pets > 0" class="text-xs text-text-secondary">({{ cat.pets }})</span>
          </button>
        </article>

        <!-- Empty slot -->
        <div class="bg-surface-pure/50 rounded-[20px] p-6 border-2 border-dashed border-border-subtle flex flex-col items-center justify-center text-center min-h-[360px] opacity-60">
          <span class="material-symbols-outlined text-4xl text-outline-variant mb-4">add_circle</span>
          <h4 class="font-h2 text-lg text-text-secondary mb-2">空置的猫窝</h4>
          <p class="font-helper-text text-helper-text text-outline">继续写作，孵化下一只小猫吧</p>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="bg-surface-pure rounded-3xl p-6 md:p-8 shadow-sm border border-border-subtle">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start py-4 md:py-0 md:px-8 first:pt-0 last:pb-0"
        >
          <div class="w-12 h-12 rounded-full flex items-center justify-center" :class="stat.bgClass">
            <span class="material-symbols-outlined fill" :class="stat.iconClass">{{ stat.icon }}</span>
          </div>
          <div>
            <h4 class="font-semibold text-on-surface text-sm">{{ stat.label }}</h4>
            <p class="font-h2 text-h2 font-bold" :class="stat.valueClass">{{ stat.value }} <span class="text-sm font-normal text-text-secondary">{{ stat.unit }}</span></p>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { reactive } from 'vue'

const stages = [
  { icon: 'egg', label: '胚胎', words: '0', done: true, active: false },
  { icon: 'child_care', label: '奶猫', words: '5,000', done: true, active: false },
  { icon: 'pets', label: '幼猫', words: '20,000', done: false, active: true },
  { icon: 'cruelty_free', label: '少年猫', words: '40,000', done: false, active: false },
  { icon: 'workspace_premium', label: '成年猫', words: '50,000', done: false, active: false },
]

const completedCats = reactive([
  { name: '小黑（奶牛猫）', year: '2025 年', work: '碎碎念', words: '5.2', pets: 0 },
])

function petCat(cat) {
  cat.pets++
}

const stats = [
  { label: '累计养成', value: '1', unit: '只猫', icon: 'bar_chart', bgClass: 'bg-surface-container-high', iconClass: 'text-primary-container' },
  { label: '累计字数', value: '8.2', unit: '万字', icon: 'edit_note', bgClass: 'bg-surface-container-high', iconClass: 'text-secondary', valueClass: 'text-secondary' },
  { label: '写作天数', value: '128', unit: '天', icon: 'calendar_today', bgClass: 'bg-surface-container-high', iconClass: 'text-tertiary', valueClass: 'text-tertiary' },
  { label: '最长连续', value: '15', unit: '天', icon: 'local_fire_department', bgClass: 'bg-surface-container-high', iconClass: 'text-tertiary', valueClass: 'text-tertiary' },
]
</script>
