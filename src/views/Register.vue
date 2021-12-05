<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-9 col-md-7 col-lg-4 mx-auto text-center">
        <img src="../assets/logo.png" class="logo" width="200" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-4 mx-auto">
        <div class="card border-0 shadow rounded-3 mt-5 mb-3">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-3 fw-light fs-5">{{ $t('signup')}}</h5>
            <form @submit.prevent="handleRegister">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  v-model="user.name"
                  id="nameInput"
                />
                <label for="nameInput">{{ $t('name')}}</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="user.email"
                  id="emailInput"
                />
                <label for="emailInput">{{ $t('email')}}</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  v-model="user.password"
                  id="passInput"
                />
                <label for="passInput">{{ $t('password')}}</label>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-primary btn-login text-uppercase"
                  type="submit"
                  :disabled="submitted ? '' : disabled"
                >
                  <span v-if="!submitted">{{ $t('signup')}}</span>
                  <span
                    v-if="submitted"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
                <div class="mt-3 text-danger">{{ message }}</div>
              </div>
            </form>
            <hr />
            <div class="d-grid">
              <router-link
                to="/login"
                class="btn btn-success btn-login text-uppercase"
                type="button"
                :disabled="submitted ? '' : disabled"
              >
                <span>{{ $t('signin')}}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-4 mx-auto">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-6 mx-auto text-start text-secondary">
            <LocaleSwitch />
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mx-auto text-end text-secondary">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import User from "../model/user";
import { register } from "../service/user";
import LocaleSwitch from "../components/LocaleSwitch.vue";
import ThemeSwitch from "../components/ThemeSwitch.vue";

export default {
  name: "Register",
  components: {
    LocaleSwitch,
    ThemeSwitch
  },
  data() {
    return {
      user: new User("", "", ""),
      submitted: false,
      successful: false,
      message: "",
    };
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.submitted = true;
      register(this.user).then((res) => {
        if (res.data._id) {
          console.log("success");
        } else {
          this.message = this.$t("error." + res.data.error);
          this.submitted = false;
        }
      });
    },
  },
};
</script>
