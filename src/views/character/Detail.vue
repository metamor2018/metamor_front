<template>
  <div id="profile" class="row">
    <character-profile class="col-sm-4 col-lg-3" :character="character"></character-profile>
    <div class="col-sm-8 col-lg-9">
      <div class="row">
        <world-list class="col-lg-7  col-xl-8" :worlds="worlds"></world-list>
      </div>
    </div>
  </div>
</template>

<script>
import characterProfile from '@/components/character/characterProfile';
import worldList from '@/components/world/worldList';
import { findCharacter } from '../../../utils/apis/character';
import { getWorldByCharacterId } from '../../../utils/apis/world';

export default {
  components: { characterProfile, worldList },
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

<style lang="scss" scoped>
#profile{
  #creator-profile{
  }
  #world-list{
  }
  #character-list{
  }
}
</style>
