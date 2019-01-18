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
      statusLine: 1,
      statuses: [],
    };
  },

  methods: {
    infiniteHandler($state) {
      getStatusByWorldId(this.$route.params.worldId, this.statusLine)
        .then((data) => {
          if (data.data.length) {
            this.statusLine += 1;
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
