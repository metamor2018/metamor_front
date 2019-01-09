<template>
  <div id="creator-profile">
    <div class="card">
      <div class="icon">
        <img src="https://itc.moe/assets/images/avatar_b6232.png" alt="icon">
      </div>
      <div class="name">
        <p class="creator_name">{{ creator.name }}</p>
        <p class="creator_id">@{{ creator.id }}</p>
      </div>
      <div class="profile">
        <p>
          {{ creator.profile }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['creator'],
};

</script>

<style lang="scss" scoped>
#creator-profile{
  width: 100%;

  .icon{
    width: 140px;
    height: 140px;
    margin: 20px auto;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 50%;

    img{
      width: 100%;
      height: 100%;
    }
  }
  .name{
    margin: 0 auto;
    p{
      margin: 0;
      padding: 0;
      line-height: 1;
      &.creator_name{
        font-size: 1.5rem;
        font-weight: bold;
      }
      &.creator_id{
        font-size: 0.8rem;
        color: #a0a0a0;
      }
    }
  }
  .profile{
    min-height: 100px;
    margin: 16px;
    padding: 8px 10px;
    background: #f1f1f1;
    border: 1px solid #0000000a;
    border-radius: 5px;
    p{
      margin: 0;
      padding: 0;
      line-height: 1.2;
    }
  }
}
</style>
