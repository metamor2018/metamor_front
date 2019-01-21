<template>
  <div id="world-list">
    <div class="card">
      <div class="title">
        <img src="@/assets/world.png" alt="world">
        <h2>ワールド</h2>
      </div>
      <div class="body">
        <ul>
          <router-link tag="li" class="world_area" v-for="world in worlds" :key="world.id" :to="{ name : 'world-detail', params : { id: world.id }}">
            <div class="left">
              <div class="name_area">
                <label>ワールド名</label>
                <p class="name">{{ world.name }}</p>
              </div>
              <div class="time_area">
                <label></label>
                <p class="for_time" v-if="world.endedAt !== null || world.startedAt !== null">
                  <!--{{ world.startedAt }} ~ {{ world.endedAt }}-->
                </p>
              </div>
              <div class="detail_area">
                <p>{{ world.detail }}</p>
              </div>
            </div>
            <div class="right">
              <div class="creator_area">
                <label>創作者</label>
                <div>
                  <img src="https://itc.moe/assets/images/avatar_b6232.png" alt="creator_icon">
                </div>
              </div>
            </div>
            </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['worlds'],
};
</script>

<style lang="scss" scoped>
#world-list{
  width: 100%;

  .card{
    border: none;
  }
  .title{
    margin: 0;
    padding: 14px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    img{
      display: inline-block;
      width: 25px;
      height: 25px;
    }
    h2{
      display: inline-block;
      margin: 0;
      padding: 0;
      vertical-align: bottom;
      font-size: 1.3rem;
    }
  }
  .body{
    .world_area{
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);

      p{
        margin: 0;
        padding: 0;
        line-height: 0.8;
      }
      label{
        display: block;
        font-size: 0.8rem;
        color: #a0a0a0;
      }
      .left{
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        padding: 15px 10px;
        // ワールド名
        .name_area{
          width: 70%;
          margin: 0;
          padding: 0;
          .name{
            font-size: 2rem;
          }
        }
        // 開催期間
        .time_area{
          width: 30%;
          margin: 0;
          padding: 0;
          .for_time{
            margin: 0;
            padding: 0;
            font-size: 1rem;
          }
        }
        .detail_area{
          width: 100%;
          margin: 0;
          margin-top: 15px;
          padding: 15px 10px;
          background: #f1f1f1;
          border: 1px solid #0000000a;
          border-radius: 5px;
        }
      }
      .right{
        display: flex;
        flex-wrap: wrap;
        width: 20%;
        padding: 15px 10px;
        // ワールド作成創作者
        .creator_area{
          width: 100%;
          margin: 0;
          label{
            text-align: center;
          }
          div{
            width: 35px;
            margin: 0 auto;
            img{
              width: 35px;
              height: 35px;
              margin: 0px;
            }
          }
        }
      }
    }
  }
}
</style>
