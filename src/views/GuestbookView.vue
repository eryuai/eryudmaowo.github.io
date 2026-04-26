<template>
  <main class="max-w-container-max mx-auto px-6 py-16">

    <!-- Header -->
    <div class="text-center mb-12">
      <div class="w-24 h-24 mx-auto mb-6 bg-surface-container rounded-full flex items-center justify-center">
        <span class="material-symbols-outlined fill text-primary-container" style="font-size:56px">front_hand</span>
      </div>
      <h1 class="font-display-title text-display-title text-on-surface mb-3">留言板</h1>
      <p class="font-h2 text-h2 text-text-secondary mb-2">欢迎在猫窝门口留个爪印 🐾</p>
      <p class="font-body-main text-body-main text-text-secondary max-w-md mx-auto">
        说点什么都好——读后感、问候、推荐书……或者只是路过打个招呼。
      </p>
    </div>

    <!-- Comment area placeholder (Giscus) -->
    <div class="max-w-2xl mx-auto">
      <div class="bg-surface-pure rounded-2xl border border-border-subtle shadow-sm p-10 text-center">
        <span class="material-symbols-outlined text-5xl text-outline-variant mb-4 block">comment</span>
        <p class="font-h2 text-h2 text-text-secondary mb-3">评论区由 Giscus 驱动</p>
        <p class="font-helper-text text-helper-text text-text-secondary">
          请在此处嵌入 <a href="https://giscus.app" target="_blank" class="text-primary-container underline decoration-dotted hover:no-underline">Giscus</a> 组件，与 GitHub Discussions 打通。
        </p>
      </div>

      <!-- Simple message form as preview -->
      <div class="mt-8 bg-surface-pure rounded-2xl border border-border-subtle shadow-sm p-6">
        <h3 class="font-h2 text-[18px] text-on-surface mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined text-primary-container">edit</span>
          快速留言（演示）
        </h3>
        <textarea
          v-model="message"
          rows="4"
          placeholder="留下你的爪印……"
          class="w-full rounded-xl border border-border-subtle bg-background-warm px-4 py-3 font-body-main text-body-main text-on-surface placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container resize-none transition-all duration-200"
        ></textarea>
        <div class="flex justify-end mt-3">
          <button
            class="bg-primary-container text-on-primary px-6 py-2.5 rounded-xl font-semibold hover:bg-surface-tint hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            @click="submitMessage"
          >
            <span class="material-symbols-outlined text-lg">send</span>
            留下爪印
          </button>
        </div>
      </div>

      <!-- Messages list preview -->
      <div v-if="messages.length" class="mt-6 space-y-4">
        <div
          v-for="(msg, i) in messages"
          :key="i"
          class="card flex gap-4"
        >
          <div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined fill text-primary-container text-lg">account_circle</span>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="font-semibold text-on-surface font-helper-text text-helper-text">匿名访客</span>
              <span class="font-helper-text text-helper-text text-text-secondary text-xs">刚刚</span>
            </div>
            <p class="font-body-main text-body-main text-on-surface-variant">{{ msg }}</p>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')
const messages = ref([])

function submitMessage() {
  if (!message.value.trim()) return
  messages.value.unshift(message.value.trim())
  message.value = ''
}
</script>
