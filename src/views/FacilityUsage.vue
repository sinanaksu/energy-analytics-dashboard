<template>
  <div>
    <div class="container">
      <div class="row mb-2">
        <div class="col-3">
          <button class="btn btn-success btn-sm" @click="backPage">
            {{ $t("back") }}
          </button>
        </div>
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3 text-end">
          <button class="btn btn-success btn-sm" @click="addFacility">
            {{ $t("facility.usageadd") }}
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
                      <th scope="col">{{ $t("facility.usage") }}</th>
                      <th scope="col">
                        {{ $t("facility.total") }} ({{ $t("facility.unit") }})
                      </th>
                      <th scope="col">{{ $t("facility.discounted") }}</th>
                      <th scope="col">{{ $t("facility.daterange") }}</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in list" :key="row.id">
                      <td>{{ row.id }}</td>
                      <td>{{ row.usage }} kW</td>
                      <td>{{ row.total }} {{ row.unit }}</td>
                      <td>{{ row.discount ? $t("yes") : $t("no") }}</td>
                      <td>
                        {{ row.start_date }} - {{ row.end_date }} (
                        {{ remainingday(row.end_date, row.start_date) }}
                        {{ $t("day") }} )
                      </td>
                      <td>
                        <div
                          class="btn-group"
                          role="group"
                        >
                          <button
                            type="button"
                            @click="remove(row.id)"
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
    <FacilityUsageModal
      v-show="isModalVisible"
      @close="closeModal"
      :postData="editData"
    />
  </div>
</template>

<script>
import { getAll, remove } from "../service/facility-usage";
import FacilityUsageModal from "../components/FacilityUsageModal.vue";
import FacilityUsage from "../model/facility-usage";
import { mapState } from "vuex";

export default {
  name: "FacilityUsage",
  data() {
    return {
      editData: {},
      list: {},
      isModalVisible: false,
    };
  },
  components: {
    FacilityUsageModal,
  },
  computed: {
    ...mapState(["facilityUsageReload"]),
  },
  methods: {
    edit: function (id) {
      const select = this.list.find((l) => l.id == id);
      this.editData = new FacilityUsage(select.id,select.unit,select.start_date,select.end_date,select.usage,select.total,select.discount);
      this.isModalVisible = true;
    },
    remove: function (id) {
      const params = { id: this.$route.params.id, usage : { "id": id} };
      remove(params).then(() => {
        this.loadUsage();
      });
    },
    addFacility() {
      this.editData = new FacilityUsage();
      this.isModalVisible = true;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    backPage() {
      this.$router.go(-1)
    },
    loadUsage() {
      const params = { id: this.$route.params.id };
      getAll(params).then((res) => {
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
    this.loadUsage();
  },
  watch: {
    facilityUsageReload() {
      if (this.facilityUsageReload) {
        this.$store.state.facilityUsageReload = false;
        this.loadUsage();
      }
    },
  },
};
</script>
