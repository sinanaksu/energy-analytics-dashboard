<template>
  <div id="app">
    <Navbar v-show="navbarShow" />
    <div class="container">
        <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./views/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    navbarShow() {
      if (this.$route.path == "/register" || this.$route.path == "/login") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#app {
  font-family: "Rubik", sans-serif !important;
}
</style>
