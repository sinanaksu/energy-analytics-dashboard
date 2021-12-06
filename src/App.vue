<template>
  <div id="app" v-bind:class="{ dark: this.$store.state.darkmode }">
    <Navbar v-show="navbarShow" />
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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
  background-image: linear-gradient(100deg, #c1dfc4 0%, #deecdd 100%);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.logo {
  -webkit-filter: drop-shadow(0 0 1px rgb(255, 255, 255));
  filter: drop-shadow(0 0 1px rgb(255, 255, 255));
}

:root {
  @import "../node_modules/bootstrap/scss/functions";
  @import "../node_modules/bootstrap/scss/variables";
  @import "../node_modules/bootstrap/scss/mixins";

  .dark {
    background-image: none !important;
    background-color: rgb(112, 112, 112);

    $enable-gradients: true;
    $primary: #4e7296;
    $secondary: #afafaf;
    $success: #6d8a76;
    $dark: #000;
    $danger: rgb(116, 77, 77);
    $white:    rgb(133, 30, 30);

    $theme-colors: (
      "white": $white,
      "primary": $primary,
      "secondary": $secondary,
      "success": $success,
      "danger": $danger,
      "dark": $dark,
      "light": #aaa,
    );

    $theme-colors-rgb: map-loop($theme-colors, to-rgb, "$value");

    @each $color, $value in $theme-colors-rgb {
      --#{$variable-prefix}#{$color}-rgb: #{$value};
    }

    $body-color: #eeeeee;
    $body-bg: #263c5c;

    --#{$variable-prefix}body-color: #{$body-color};
    --#{$variable-prefix}body-bg: #{$body-bg};
    @import "bootstrap";
  }
}
</style>
