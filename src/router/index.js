import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ChatRoom',
      component: () => import('@/components/chat/PageStructure'),
      meta: {
        title: 'Chat',
      },
    },
    {
      path: '/signin',
      name: 'Authentication',
      component: () => import('@/components/auth/LoginPage'),
      meta: {
        title: 'Auth',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
