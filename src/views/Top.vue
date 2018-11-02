<template>
  <div id="Top">
    <nav class="navbar navbar-default">
      <div class="navbar-header"></div>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <button class="btn btn-danger log" v-show="isLoggedIn()" @click="handleLogout()">Log out </button>
          <button class="btn btn-info log" v-show="!isLoggedIn()" @click="handleLogin()">Log In</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { isLoggedIn, login, logout } from '../../utils/auth';

export default {
  name: 'top',
  methods: {
    handleLogin() {
      login();
    },
    handleLogout() {
      logout();
    },
    isLoggedIn() {
      return isLoggedIn();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
