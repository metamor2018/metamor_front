<template>
  <div>
    <div>
      <h6 class="mt-0">@{{ character.id }}</h6>
      <h5 class="mt-0">{{ character.name }}</h5>
      {{ character.profile }}
    </div>
    <world-list class="col-lg-7  col-xl-8" :worlds="worlds"></world-list>
  </div>
</template>

<script>
import worldList from '@/components/creator/worldList';
import { findCharacter } from '../../../utils/apis/character';
import { getWorldByCharacterId } from '../../../utils/apis/world';

export default {
  components: { worldList },
  data() {
    return {
      character: '',
      worlds: '',
    };
  },
  mounted() {
    const characterId = this.$route.params.characterId;
    Promise.all([
      findCharacter(characterId),
      getWorldByCharacterId(characterId),
    ]).then(([character, worlds]) => {
      this.character = character.data;
      this.worlds = worlds.data;
    })
      .catch((e) => {
        const statusCode = e.response.status;
        if (statusCode === 404) { // 存在しないキャラクターページに来たとき
          // TODO エラーページに飛ばしたい
        } else { // バックエンドで何か問題が発生した場合
          alert('問題が発生しました。もう一度お試しください');
        }
      });
  },
};
</script>
