<template>
<div id="profile" class="row">
  <creator-profile :creator="creator" class="col-sm-4 col-lg-3"></creator-profile>
  <div class="col-sm-8 col-lg-9">
    <div class="row">
      <world-list :worlds="worlds" class="col-lg-7  col-xl-8"></world-list>
      <character-list class="col-lg-5 col-xl-4"></character-list>
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

export default {
  components: { creatorProfile, worldList, characterList },
  data() {
    return {
      creator: '',
      worlds: '',
    };
  },
  mounted() {
    this.$nextTick(() => {
      const creatorId = this.$route.params.id;
      Promise.all([
        findCreator(creatorId),
        getWorldByCreatorId(creatorId),
      ]).then(([creator, worlds]) => {
        this.creator = creator.data;
        this.worlds = worlds.data;
      }).catch((e) => {
        console.log(e);
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
