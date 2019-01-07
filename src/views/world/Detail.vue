<template>
  <div>
    <h1>{{ world.name }}</h1>
    <a>{{ world.detail }}</a>
    <button type="button" class="btn btn-primary">Primary</button>
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
