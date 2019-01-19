<template>
  <div id="worlds">
    <ul>
      <li v-for="(world, index) in worlds" :key="index" >
        <div class="media">
          <div class="media-body">
            <h5 class="world_name">{{ world.name }}</h5>
            <p class="world_detail">{{ world.detail }}</p>
            <router-link v-bind:to="{ name : 'world-detail', params : { worldId: world.id }}" class="btn_arrow"><img src="@/assets/right_arrow.png" alt="詳細"></router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getWorld } from '../../../utils/apis/world';

export default {
  data() {
    return {
      worlds: [],
    };
  },
  mounted() {
    getWorld()
      .then((data) => {
        this.worlds = data.data;
      })
      .catch(() => {
        this.$router.push({ path: '/error' });
      });
  },
};
</script>

<style lang="scss" scoped>
#worlds{
  width: 80%;
  margin: 0 auto;

  ul{
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
    padding: 0;

    li{
      position: relative;
      width: 230px;
      height: 230px;
      margin: 10px;
      border-radius: 5px;
      box-shadow: 0px 1px 5px #d4d4d4;
      list-style: none;
      transition: box-shadow 0.2s ease-in-out;
      &:hover{
        box-shadow: 0px 2px 5px #999999;
      }

      .media-body{
        margin: 0;
        padding: 0 15px;
        .world_name{
          margin: 25px 0;
          font-size: 1.5rem;
          text-shadow: 1px 1px 1px #b7b7b7;
        }
        .world_detail{
          font-size: 0.8rem;
          color: #a0a0a0;
        }
        .btn_arrow{
          position: absolute;
          right: 20px;
          bottom: 20px;
          width: 30px;
          height: 30px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
