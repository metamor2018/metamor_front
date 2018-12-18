<template>
<div id="profile" class="row">
  <creator-profile class="col-sm-4 col-lg-3"></creator-profile>
  <div class="col-sm-8 col-lg-9">
    <div class="row">
      <world-list class="col-lg-7  col-xl-8"></world-list>
      <character-list class="col-lg-5 col-xl-4"></character-list>
    </div>
  </div>
</div>
</template>
<script>
import creatorProfile from '@/components/creator/creatorProfile';
import worldList from '@/components/creator/worldList';
import characterList from '@/components/creator/characterList';

export default {
  components: { creatorProfile, worldList, characterList },
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
