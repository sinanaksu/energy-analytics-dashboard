<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <form @submit.prevent="handleSave">
                  <div class="form-floating mb-3">
                    <input required
                      type="text"
                      class="form-control"
                      v-model="postData.usage"
                      id="usageInput"
                    />
                    <label for="usageInput">{{ $t("facility.usage") }} (kW)</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select required
                      class="form-select"
                      id="floatingSelect"
                      v-model="postData.unit"
                    >
                      <option value="TL">TL</option>
                      <option value="Dolar">Dolar</option>
                      <option value="Euro">Euro</option>
                    </select>
                    <label for="floatingSelect">{{
                      $t("facility.unit")
                    }}</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input required
                      type="text"
                      class="form-control"
                      v-model="postData.total"
                      id="totalInput"
                    />
                    <label for="totalInput">{{ $t("facility.total") }}</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select required
                      class="form-select"
                      id="floatingSelect"
                      v-model="postData.discount"
                    >
                      <option value="true">{{ $t("yes") }}</option>
                      <option value="false">{{ $t("no") }}</option>
                    </select>
                    <label for="floatingSelect">{{
                      $t("facility.discounted")
                    }}</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input required
                      type="date"
                      class="form-control"
                      v-model="postData.start_date"
                      id="startdateInput"
                    />
                    <label for="startdateInput">{{
                      $t("facility.startdate")
                    }}</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input required
                      type="date"
                      class="form-control"
                      v-model="postData.end_date"
                      id="enddateInput"
                    />
                    <label for="enddateInput">{{
                      $t("facility.enddate")
                    }}</label>
                  </div>

                  <div class="d-grid">
                    <button
                      class="btn btn-primary btn-login btn-sm"
                      type="submit"
                      :disabled="submitted ? '' : disabled"
                    >
                      <span v-if="!submitted">{{ $t("ok") }}</span>
                      <span
                        v-if="submitted"
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </div>
                </form>
                <div class="d-grid mt-3">
                  <button
                    class="btn btn-secondary btn-sm"
                    type="button"
                    @click="$emit('close')"
                  >
                    {{ $t("close") }}
                  </button>
                </div>
                <div class="mt-3 text-danger">{{ message }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { create, update } from "../service/facility-usage";

export default {
  name: "FacilityUsageModal",
  props: {
    postData: Object,
  },
  data: () => ({
    showModal: false,
    submitted: false,
    message: "",
  }),
  methods: {
    handleSave() {
      this.message = "";
      this.submitted = true;
      const params = { "id": this.$route.params.id, usage: this.postData}
      if(this.postData.id == 0) {
      create(params).then((res) => {
        if (res.data.id) {
          this.submitted = false;
          this.$store.state.facilityUsageReload = true;
          this.$emit('close')
        } else {
          this.message = this.$t("error." + res.data.error);
          this.submitted = false;
        }
      });
      } else {
      update(params).then((res) => {
        if (res.data.id) {
          this.submitted = false;
          this.$store.state.facilityUsageReload = true;
          this.$emit('close')
        } else {
          this.message = this.$t("error." + res.data.error);
          this.submitted = false;
        }
      });
      }
    },
  },
};
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
