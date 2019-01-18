<template>
  <div>
    <status-form :statuses="statuses"></status-form>
    <ul id="example-2">
      <li v-for="(status) in statuses" :key="status.id" >
        -------------------------------------------------------------------------
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
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import StatusForm from '@/components/status/statusForm';
import { getStatusByWorldId } from '../../../utils/apis/status';

export default {
  components: { StatusForm, InfiniteLoading },
  data() {
    return {
      loaded: false,
      statuses: [],
    };
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
