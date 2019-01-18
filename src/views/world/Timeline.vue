<template>
  <div>
    <div class="card">
      <div class="card-header">
        <status-form :statuses="statuses"></status-form>
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="(status) in statuses" :key="status.id" class="list-group-item">
          <div class="media">
            <div class="media-body">
              {{ status.character.name }}
              {{ status.createdAt }}
              <h5 class="mt-0">{{ status.text }}</h5>
            </div>
          </div>
        </li>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </ul>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import StatusForm from '@/components/status/statusForm';
import { getStatusByWorldId, getToLast } from '../../../utils/apis/status';

export default {
  components: { StatusForm, InfiniteLoading },
  data() {
    return {
      loaded: false,
      statuses: [],
    };
  },
  mounted() {
    console.log(this.$route.params.worldId);
    setInterval(() => {
      if (this.statuses[0] !== undefined) {
        getToLast(this.$route.params.worldId, this.statuses[0].id)
          .then((data) => {
            if (data.data.length > 0) {
              this.statuses.unshift(...data.data);
            }
          }).catch(() => {
            // エラー
          });
      }
    }, 2000);
  },
  methods: {
    infiniteHandler($state) {
      const oldStatus = this.statuses[this.statuses.length - 1];
      if (oldStatus !== undefined || this.loaded) { // 一回目は何故か失敗する可能性があるので回避
        this.getStatus($state, oldStatus.id);
      } else {
        this.getStatus($state);
      }
    },
    getStatus($state, id = null) { // idがnullなら最新20件を返す
      getStatusByWorldId(this.$route.params.worldId, id)
        .then((data) => {
          if (data.data.length) {
            this.statuses.push(...data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        }).catch(() => {
          $state.complete();
          alert('問題が発生しました');
        });
    },
  },
};
</script>
