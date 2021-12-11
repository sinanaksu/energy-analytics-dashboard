<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <WidgetMini :desc="$t('analystics.daymw')" :title="data.day.mw + ' mW'" type="1" />
      </div>
      <div class="col-3">
        <WidgetMini :desc="$t('analystics.dayhz')" :title="data.day.hz + ' Hz'" type="1" />
      </div>
      <div class="col-3">
        <WidgetMini :desc="$t('analystics.dayvolt')" :title="data.day.volt + ' Volt'" type="1" />
      </div>
      <div class="col-3">
        <WidgetMini :desc="$t('analystics.dayamper') " :title="data.day.amper + ' Amper'" type="1" />
      </div>
    </div>
  </div>
</template>

<script>
import WidgetMini from "../components/WidgetMini.vue";
import { day } from "../service/analystics";

export default {
  name: "Home",
  components: {
    WidgetMini,
  },
  data() {
    return {
      data: {},
      loading: true
    };
  },
  mounted() {
    day().then((res) => {
      this.data = res.data;
    });
  },
};
</script>
