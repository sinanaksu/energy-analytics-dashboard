<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-9 col-md-7 col-lg-4 mx-auto text-center">
        <img src="../assets/logo.png" class="logo" width="200" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-4 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-3 fw-light fs-5">Logout</h5>

            <div class="mt-3 text-danger">{{ message }}</div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { logout } from "../service/user";
export default {
  name: "Logout",
  data() {
    return {
      message: this.$t("message.logout"),
    };
  },
  methods: {
    handleRouter() {
      logout();
      setTimeout(this.$router.push("/"), 2000);
    },
  },
  mounted() {
    this.handleRouter()
  },
};
</script>
