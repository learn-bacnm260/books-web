import { createRouter, createWebHistory } from 'vue-router'
import NovelsLayout from '@/layouts/NovelsLayout.vue'
import BooksLayout from '@/layouts/BooksLayout.vue'
import NovelsHomeView from '@/views/NovelsHomeView.vue'
import NovelsDescription from '@/components/novels/NovelsDescription.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BooksLayout,
      children: [],
    },
    {
      path: '/novels',
      name: 'novels-layout',
      components: {
        default: NovelsLayout,
      },
      meta: { requiresRootAdmin: true },
      children: [
        {
          path: '',
          name: 'novels-home',
          components: {
            default: NovelsHomeView,
          },
        },
        {
          path: ':novel_id',
          name: 'novel-information',
          component: () => import('@/views/NovelProfileView.vue'),
        },
      ],
    },
    {
      path: '/test',
      name: 'test-component',
      component: NovelsDescription,
    },
  ],
})

router.beforeEach((to, from, next) => {
  // check for meta requiresRootAdmin
  if (to.meta.requiresRootAdmin) {
    // perform root admin check logic here
    // replace with actual check
    const userIsRootAdmin = true

    // check for RootAdmin permission
    if (userIsRootAdmin) {
      next()
    } else {
      next({ name: 'home' }) // redirect to home if not admin
    }
  }
  // check for meta requiresAdmin
  else if (to.meta.requiresAdmin) {
    next()
  }
  // go to next if no special handling is required
  else {
    next() // always call next() to resolve the hook
  }
})

export default router
