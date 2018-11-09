<template>
  <div id="top">
    <div class="container-fulid">
      <div class="row">
        <div class="col-sm left-box">
          <h1 class="title-logo">Metamor</h1>
        </div>
        <div class="col-sm right-box">
          <div class="login-btn">
            <p>なりきり</p>
            <button class="btn btn-info btn-lg" @click="handleLogin()">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isLoggedIn, login } from '../../utils/auth';

export default {
  name: 'top',
  methods: {
    handleLogin() {
      login();
    },
    isLoggedIn() {
      return isLoggedIn();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline');

#top{
  height: 100%;
  .container-fulid, .row, .col-sm{
    height: 100%;
  }
  .title-logo, .login-btn{
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    text-align: center;
  }

  .left-box{
    background: #ffc80780;
    .title-logo{
      font-family: 'Kumar One Outline', cursive;
      text-align: right;
      font-size: 5rem;
    }
  }

  .login-btn{
    .btn{
      width: 200px;
      letter-spacing: 0;
      transition: all 0.3s ease 0s;

      &:hover{
        width: 250px;
        letter-spacing: 5px;
      }
    }
  }
}
</style>
