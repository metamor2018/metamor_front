<template>
<div id="profile" class="row">
  <creator-profile class="col-sm-4 col-lg-3" :creator="creator"></creator-profile>
  <div class="col-sm-8 col-lg-9">
    <div class="row">
      <world-list class="col-lg-7  col-xl-8" :worlds="worlds"></world-list>
      <character-list class="col-lg-5 col-xl-4" :characters="characters"></character-list>
    </div>
  </div>
</div>
</template>
<script>
import creatorProfile from '@/components/creator/creatorProfile';
import worldList from '@/components/creator/worldList';
import characterList from '@/components/creator/characterList';
import { findCreator } from '../../../utils/apis/creator';
import { getWorldByCreatorId } from '../../../utils/apis/world';
import { getCharacterByCreatorId } from '../../../utils/apis/character';

export default {
  components: { creatorProfile, worldList, characterList },
  data() {
    return {
      creator: '',
      worlds: '',
      characters: '',
      characterLine: 1, // キャラクターのページ
    };
  },
  mounted() {
    this.$nextTick(() => {
      const creatorId = this.$route.params.id;
      Promise.all([
        findCreator(creatorId),
        getWorldByCreatorId(creatorId),
        getCharacterByCreatorId(creatorId, this.characterLine),
      ]).then(([creator, worlds, characters]) => {
        this.creator = creator.data;
        this.worlds = worlds.data;
        this.characters = characters.data;
        this.characterLine += 1;
      }).catch(() => {
        this.$router.push({ path: '/error' });
      });
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
