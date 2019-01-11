<template>
  <div>
    <ul id="example-2">
      <li v-for="(status, index) in statuses" :key="index" >
        <div class="media">
          <div class="media-body">
            {{ status.character.name }}
            <h5 class="mt-0">{{ status.text }}</h5>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getStatusByWorldId } from '../../../utils/apis/status';

export default {
  data() {
    return {
      statuses: [],
    };
  },
  mounted() {
    const worldId = this.$route.params.worldId;
    getStatusByWorldId(worldId)
      .then((data) => {
        this.statuses = data.data;
      })
      .catch(() => {
        this.$router.push({ path: '/error' });
      });
  },
};
</script>
