<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="detail-col col-md-3">
          <div class="card">
            <div class="card-header">
              {{ world.name }}
            </div>
            <div class="card-body">
              <label>ワールド詳細</label>
              <p class="card-text">{{ world.detail }}</p>
            </div>
          </div>
        </div>
        <div class="timeline-col col-md-6">
          <time-line></time-line>
        </div>
        <div class="entry-col col-md-3">
          <div class="card">
            <div class="card-header">
              ワールド参加
            </div>
            <div class="card-body">
              <router-link v-bind:to="{ name : 'character-select', params : { worldId: world.id }}" class="btn btn-primary">既存のキャラクターで参加</router-link>
              <button type="button" class="btn btn-primary">新しいキャラクターで参加</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeLine from './Timeline';
import { findWorld } from '../../../utils/apis/world';

export default {
  components: { TimeLine },
  data() {
    return {
      world: '',
    };
  },
  mounted() {
    console.log(this.$route.params);
    findWorld(this.$route.params.worldId)
      .then((data) => {
        this.world = data.data;
      })
      .catch(() => {
        this.$router.push({ path: '/error' });
      });
  },
};
</script>

<style lang="scss" scoped>
.card{
  .card-header{
    font-weight: bold;
  }
}
.detail-col{
  margin: 10px 0;
  label{
    display: block;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    color: #a0a0a0;
  }
  @media (max-width: 750px) {
    display: none;
  }
}
.timeline-col{
  margin: 10px 0;
}
.entry-col{
  margin: 10px 0;
  .btn{
    margin: 10px 0;
  }
}

</style>

