<template>
  <div id="character-list">
    <div class="card">
      <div class="title">
        <img src="@/assets/character.png" alt="character">
        <h2>キャラクター</h2>
      </div>
      <div class="body">
        <ul>
          <li class="character_area" v-for="character in characters" :key="character.id">
            <div class="icon_area">
              <img src="https://itc.moe/assets/images/avatar_b6232.png" alt="character_icon">
            </div>
            <div class="name_area">
              <p class="chara_name">{{ character.name }}</p>
              <p class="chara_id">@{{ character.id }}</p>
            </div>
            <div class="arrow"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['characters'],
};
</script>

<style lang="scss" scoped>
#character-list{
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
    .character_area{
      display: flex;
      padding: 15px 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      transition: all 0.5s ease 0s;

      &:hover{
        background: #eaeaea;
      }
      p{
        margin: 0;
        padding: 0;
        line-height: 0.8;
      }
      label{
        font-size: 0.8rem;
        color: #a0a0a0;
      }
      .icon_area{
        width: 65px;
        img{
          width: 65px;
        }
      }
      .name_area{
        width: 80%;
        padding: 18px 10px;
        .chara_name{
          font-size: 1.5rem;
          font-weight: bold;
        }
        .chara_id{
          font-size: 0.8rem;
          color: #a0a0a0;
        }
      }
      .arrow{
        position: absolute;
        right: 10px;
        width: 30px;
        height: 30px;
        margin: 15px;
        border: 5px solid;
        border-color: #56565687 #5656564d transparent transparent;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
