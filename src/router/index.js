import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/works', name: 'works', component: () => import('../views/WorksView.vue') },
  { path: '/works/:slug', name: 'work-detail', component: () => import('../views/WorkDetailView.vue') },
  { path: '/bookshelf', name: 'bookshelf', component: () => import('../views/BookshelfView.vue') },
  { path: '/cats', name: 'cats', component: () => import('../views/CatsView.vue') },
  { path: '/quotes', name: 'quotes', component: () => import('../views/QuotesView.vue') },
  { path: '/guestbook', name: 'guestbook', component: () => import('../views/GuestbookView.vue') },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})
