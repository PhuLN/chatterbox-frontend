import Vue from 'vue';
import Router from 'vue-router';

import store from './../store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ChatRoom',
      component: () => import('@/components/chat/structure/PageStructure'),
      meta: {
        title: 'Chatterbox',
      },
    },
    {
      path: '/login',
      name: 'Authentication',
      component: () => import('@/components/auth/LoginPage'),
      meta: {
        title: 'Chatterbox - Auth',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (!store.getters.isAuthenticated && to.name !== 'Authentication') {
    next('/login');
  } else if (store.getters.isAuthenticated && to.name === 'Authentication') {
    next('/');
  } else {
    next();
  }
});

export default router;
