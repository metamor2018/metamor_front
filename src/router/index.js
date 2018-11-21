import Vue from 'vue';
import Router from 'vue-router';
// views
import Top from '@/views/Top';
// components
import Callback from '@/components/callback';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // Topページ
    {
      path: '/',
      name: 'top',
      component: Top,
    },
    // ログインコールバック
    {
      path: '/callback',
      component: Callback,
    },
  ],
});
