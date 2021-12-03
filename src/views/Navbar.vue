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
              <router-link class="nav-link active" aria-current="page" to="/">Dashboard</router-link
              >
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
                >User</a
              >
              <ul class="dropdown-menu" aria-labelledby="dropdownUser">
                <li><a class="dropdown-item" href="#">Setting</a></li>
                <li>
                  <a class="dropdown-item" href="#">{{ $t("logout") }}</a>
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
          <div class="col"> {{ $route.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>
<style scoped>
.bg-nav {
  background: #f1f8fe;
}
.bg-sub-bar {
  background: #7dd5bd;
}
</style>
