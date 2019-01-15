<template>
  <div>
    <div>
      <h6 class="mt-0">@{{ character.id }}</h6>
      <h5 class="mt-0">{{ character.name }}</h5>
      {{ character.profile }}
    </div>
  </div>
</template>

<script>
import { findCharacter } from '../../../utils/apis/character';

export default {
  data() {
    return {
      character: '',
    };
  },
  mounted() {
    findCharacter(this.$route.params.characterId)
      .then((data) => {
        this.character = data.data;
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
