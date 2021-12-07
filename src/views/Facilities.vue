<template>
  <div>
    <div class="container">
      <div class="row mb-2">
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3 text-end">
          <button class="btn btn-success btn-sm" @click="addFacility">
            {{ $t("facility.add") }}
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">{{ $t("facility.name") }}</th>
                    <th scope="col">{{ $t("facility.special") }}</th>
                    <th scope="col">{{ $t("facility.startdate") }}</th>
                    <th scope="col">{{ $t("facility.enddate") }}</th>
                    <th scope="col">{{ $t("facility.remainingday") }}</th>
                    <th scope="col">{{ $t("facility.workers") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in list" :key="row.id">
                    <td>{{ row.id }}</td>
                    <td>{{ row.name }}</td>
                    <td>{{ row.special ? $t("yes") : $t("no") }}</td>
                    <td>{{ row.start_date }}</td>
                    <td>{{ row.end_date }}</td>
                    <td>
                      {{ remainingday(row.end_date, row.start_date) }}
                      {{ $t("day") }}
                    </td>
                    <td>{{ row.workers }}</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <button
                          type="button"
                          class="btn btn-outline-success btn-sm"
                        >
                          {{ $t("facility.energydata") }}
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                        <button
                          type="button"
                          @click="edit(row.id)"
                          class="btn btn-outline-primary btn-sm"
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FacilityModal
      v-show="isModalVisible"
      @close="closeModal"
      :postData="editData"
    />
  </div>
</template>

<script>
import { getAll } from "../service/facility";
import FacilityModal from "../components/FacilityModal.vue";
import Facility from "../model/facility";
import { mapState } from "vuex";

export default {
  name: "Facilities",
  data() {
    return {
      editData: {},
      list: {},
      isModalVisible: false,
    };
  },
  components: {
    FacilityModal,
  },
  computed: {
    ...mapState(["facilityReload"]),
  },
  methods: {
    edit: function (id) {
      this.editData = this.list.find((l) => l.id == id);
      this.isModalVisible = true;
    },
    addFacility() {
      this.editData = new Facility();
      this.isModalVisible = true;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    loadFacilities() {
      getAll(this.user).then((res) => {
        this.list = res.data;
      });
    },
    remainingday: function (val1, val2) {
      const date1 = new Date(val1);
      const date2 = new Date(val2);
      const difference = date1.getTime() - date2.getTime();
      const days = Math.ceil(difference / (1000 * 3600 * 24));
      return days;
    },
  },
  mounted() {
    this.loadFacilities();
  },
  watch: {
    facilityReload() {
      if (this.facilityReload) {
        this.facilityReload = false;
        this.loadFacilities();
      }
    },
  },
};
</script>
