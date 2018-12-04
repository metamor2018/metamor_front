import Vue from 'vue';
import Router from 'vue-router';
// views
import Top from '@/views/Top';
import Creator from '@/views/Creator';
import CreatorProfile from '@/views/creator/Profile';
import CreatorWorld from '@/views/creator/World';
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
          path: 'profile',
          name: 'create-profile',
          component: CreatorProfile,
        },
        {
          // ワールド管理
          path: 'world',
          name: 'create-world',
          component: CreatorWorld,
        },
      ],
    },
  ],
});
