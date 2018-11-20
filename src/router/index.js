import Vue from 'vue';
import Router from 'vue-router';
// views
import Top from '@/views/Top';
import Creator from '@/views/Creator';
import CreatorProfile from '@/views/creator/Profile';
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
    // 創作者
    {
      path: '/creator/:id',
      component: Creator,
      children: [
        {
          // 創作者プロフィール
          path: '',
          name: 'create-profile',
          component: CreatorProfile,
        },
      ],
    },
  ],
});
