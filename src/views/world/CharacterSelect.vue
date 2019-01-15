<template>
  <div>
    <ul id="example-2">
      <li v-for="(character, index) in characters" :key="index" >
        <div class="media">
          <div class="media-body">
            <h6 class="mt-0">@{{ character.id }}</h6>
            <h5 class="mt-0">{{ character.name }}</h5>
            {{ character.profile }}
            <button type="button" class="btn btn-primary" v-on:click="onSubmit(character.id)">参加</button>
          </div>
        </div>
      </li>
    </ul>
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
        // this.$router.push({ path: '/error' });
      });
  },
  methods: {
    onSubmit(characterId) {
      const worldId = this.$route.params.id;
      entryWorld(characterId, worldId)
        .then(() => { // エントリー成功時、プロフィールページに移動
          this.$router.push({ name: 'world-timeline', params: { characterId, worldId } });
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
