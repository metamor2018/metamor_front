<template>
  <div>
    <ul id="example-2">
      <li v-for="(world, index) in worlds" :key="index" >
        <div class="media">
          <div class="media-body">
            <h5 class="mt-0">{{ world.name }}</h5>
            {{ world.detail }}
            <button type="button" class="btn btn-secondary">詳細</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import getWorlds from '../../../utils/apis/world';

export default {
  data() {
    return {
      worlds: [],
    };
  },
  mounted() {
    getWorlds()
      .then((data) => {
        this.worlds = data.data;
      })
      .catch(() => {
        this.$router.push({ path: '/error' });
      });
  },
};
</script>
