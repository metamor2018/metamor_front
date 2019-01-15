import Vue from 'vue';
import Router from 'vue-router';
// views
import Top from '@/views/Top';
import Signup from '@/views/Signup';
import Creator from '@/views/Creator';
import CreatorProfile from '@/views/creator/Profile';
import CreatorWorld from '@/views/creator/World';
import World from '@/views/World';
import Worlds from '@/views/world/Worlds';
import WorldDetail from '@/views/world/Detail';
import WorldTimeline from '@/views/world/Timeline';
import Character from '@/views/Character';
import CharacterSelect from '@/views/world/CharacterSelect';
import CharacterCreate from '@/views/character/Create';
import CharacterDetail from '@/views/character/Detail';
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
      path: '/character',
      name: 'character',
      component: Character,
      children: [
        {
          path: 'create',
          name: 'character-create',
          component: CharacterCreate,
        },
        {
          path: ':characterId',
          name: 'character-detail',
          component: CharacterDetail,
        },
        {
          path: ':characterId/world/:worldId',
          name: 'world-timeline',
          component: WorldTimeline,
        },
      ],
    },
    {
      path: '/world',
      name: 'world',
      component: World,
      children: [
        {
          // 一覧ページ
          path: '',
          name: 'worlds',
          component: Worlds,
        },
        {
          // 詳細ページ
          path: ':id',
          name: 'world-detail',
          component: WorldDetail,
        },
        {
          path: ':id/entry',
          name: 'character-select',
          component: CharacterSelect,
        },
      ],
    },
  ],
});
