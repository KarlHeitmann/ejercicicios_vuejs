import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalsView from '../views/ModalsView.vue'
import PostsView from '../views/PostsView.vue'
// import PostDetailView from '../views/PostDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modals',
      name: 'modals',
      // component: () => import('../views/ModalsView.vue') // lazy loading, no necesita importar arriba
      component: ModalsView
    },
    {
      path: '/posts',
      name: 'posts',
      // component: () => import('../views/PostsView.vue') // lazy loading, no necesita importar arriba
      component: PostsView
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: () => import('../views/PostDetailView.vue') // lazy loading, no necesita importar arriba
      // component: PostDetailView
    }
  ]
})

export default router
