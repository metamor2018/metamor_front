import Vue from 'vue';
import Router from 'vue-router';
// views
import Top from '@/views/Top';
import Signup from '@/views/Signup';
import Creator from '@/views/Creator';
import CreatorProfile from '@/views/creator/Profile';
import CreatorWorld from '@/views/creator/World';
import Worlds from '@/views/world/Worlds';
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
      name: 'checkSignUp',
      component: CheckSignUp,
    },
    // 創作者新規作成
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
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
    {
      path: '/world',
      name: 'worlds',
      component: Worlds,
    },
  ],
});
