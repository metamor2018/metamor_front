<template>
  <div id="app">
    <appNav v-if="isLoggedIn()"></appNav>
    <router-view/>
  </div>
</template>

<script>
import { isLoggedIn } from '../utils/auth';
import appNav from './components/base/appNav';

export default {
  name: 'App',

  components: { appNav },

  methods: {
    // loginしてるかどうかを確認する
    isLoggedIn() {
      return isLoggedIn();
    },
  },
};
</script>

<style>
html, body, #app{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
