<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="p-2">
        <div class="card" v-for="(character, index) in characters" :key="index">
          <div class="card-body">
            <h6 class="card-title">{{ character.name }} @{{ character.id }}</h6>
            <p class="card-text">{{ character.profile }}</p>
            <button type="button" class="btn btn-primary" v-on:click="onSubmit(character.id)">参加</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCreator } from '../../../utils/auth';
import { getCharacterByCreatorId } from '../../../utils/apis/character';
import { entryWorld } from '../../../utils/apis/world';

export default {
  data() {
    return {
      creator: '',
      characters: [],
    };
  },
  mounted() {
    this.creator = getCreator();
    getCharacterByCreatorId(this.creator.id, 1)
      .then((data) => {
        this.characters = data.data;
      })
      .catch(() => {
        alert('問題が発生しました。もう一度お試しください');
      });
  },
  methods: {
    onSubmit(characterId) {
      const worldId = this.$route.params.worldId;
      entryWorld(characterId, worldId)
        .then(() => { // エントリー成功時、ワールド詳細に移動
          this.$router.push({ name: 'world-detail', params: { worldId } });
        })
        .catch((e) => {
          const statusCode = e.response.status;
          if (statusCode === 400) { // バリデーションエラー
            alert(e.response.data.join('\n'));
          } else { // バックエンドで何か問題が発生した場合
            alert('問題が発生しました。もう一度お試しください');
          }
        });
    },
  },
};
</script>
