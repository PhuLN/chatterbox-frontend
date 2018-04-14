import Vue from 'vue';
import Router from 'vue-router';
import Auth from '@/components/auth/LoginPage';
import ChatRoom from '@/components/chat/PageStructure';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ChatRoom',
      component: ChatRoom,
      meta: {
        title: 'Chat',
      },
    },
    {
      path: '/signin',
      name: 'Authentication',
      component: Auth,
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
