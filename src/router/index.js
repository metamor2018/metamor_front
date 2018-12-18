import Vue from 'vue';
import Router from 'vue-router';
// views
import Top from '@/views/Top';
// components
import Callback from '@/components/callback';
import CheckSignUp from '@/components/checkSignup';

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
    // 創作者が作成されているか確認
    {
      path: '/check/signup',
      component: CheckSignUp,
    },
  ],
});
