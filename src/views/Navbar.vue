<template>
  <div>
    <nav
    class="navbar navbar-expand-lg bg-nav navbar-light"
    >
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/logo.png" width="100" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbars1"
          aria-controls="navbars1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbars1">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/">{{ $t('dashboard')}}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/facilities">{{ $t('facilities')}}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownUser"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ this.$store.state.user.username }}</a
              >
              <ul class="dropdown-menu" aria-labelledby="dropdownUser">
                <li>
                  <router-link class="dropdown-item" to="/logout">{{
                    $t("logout")
                  }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid bg-sub-bar p-2 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-8 col-lg-9">{{ $t($route.name) }}</div>
          <div class="col-sm-6 col-md-4 col-lg-3 text-end">
            <div class="row">
              <div class="col"><LocaleSwitch class="mr-5" /></div>
              <div class="col"><ThemeSwitch /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocaleSwitch from "../components/LocaleSwitch.vue";
import ThemeSwitch from "../components/ThemeSwitch.vue";

export default {
  name: "Navbar",
  components: {
    LocaleSwitch,
    ThemeSwitch,
  },
};
</script>
<style scoped>
.bg-nav {
  background: #f1f8fe;
}
.bg-sub-bar {
 background: rgb(167,218,66)
}
</style>
