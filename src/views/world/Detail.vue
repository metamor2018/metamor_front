<template>
  <div>
    <div>
      <h1>{{ world.name }}</h1>
      <a>{{ world.detail }}</a>
    </div>
    <div>
      <router-link v-bind:to="{ name : 'character-select', params : { id: world.id }}" class="btn btn-primary">既存のキャラクターで参加</router-link>
      <button type="button" class="btn btn-primary">新しいキャラクターで参加</button>
    </div>
  </div>
</template>

<script>
import { findWorld } from '../../../utils/apis/world';

export default {
  data() {
    return {
      world: '',
    };
  },
  mounted() {
    findWorld(this.$route.params.id)
      .then((data) => {
        this.world = data.data;
      })
      .catch(() => {
        this.$router.push({ path: '/error' });
      });
  },
};
</script>
