<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="/">Metamor</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->


        <b-nav-item-dropdown text="創作者" right>
          <b-dropdown-item :to="{ name: 'create-profile', params: { id: creator.id }}">プロフィール</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item :to="{ name: 'worlds'}">ワールド</b-dropdown-item>
          <b-dropdown-item href="#">キャラクター</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item @click="handleLogout" style="color: red;">ログアウト</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import { login, logout, getCreator } from '../../../utils/auth';

export default {
  name: 'app-nav',
  data() {
    return {
      creator: '',
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.creator = getCreator();
    });
  },
  methods: {
    // loginする
    handleLogin() {
      login();
    },
    // logoutする
    handleLogout() {
      logout();
      this.$router.push('/');
    },
  },
};
</script>
