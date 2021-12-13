<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-3 col-lg-3 mb-4">
        <WidgetMini :desc="$t('analystics.daymw')" :title="data.day.mw + ' mW'" :type="1" />
      </div>
      <div class="col-sm-12 col-md-3 col-lg-3 mb-4">
        <WidgetMini :desc="$t('analystics.dayhz')" :title="data.day.hz + ' Hz'" :type="1" />
      </div>
      <div class="col-sm-12 col-md-3 col-lg-3 mb-4">
        <WidgetMini :desc="$t('analystics.dayvolt')" :title="data.day.volt + ' Volt'" :type="1" />
      </div>
      <div class="col-sm-12 col-md-3 col-lg-3 mb-4">
        <WidgetMini :desc="$t('analystics.dayamper') " :title="data.day.amper + ' Amper'" :type="1" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 mb-4">
        <Heatmap />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 mb-4">
        <Series type="frequency" />
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 mb-4">
        <Series type="phases" />
      </div>
    </div>
  </div>
</template>

<script>
import WidgetMini from "../components/WidgetMini.vue";
import Heatmap from "../components/Highcharts/Heatmap.vue"
import Series from "../components/Highcharts/Series.vue"
import { day } from "../service/analystics";

export default {
  name: "Home",
  components: {
    WidgetMini,
    Heatmap,
    Series
  },
  data() {
    return {
      data: {},
      loading: true,
    };
  },
  mounted() {
    day().then((res) => {
      this.data = res.data;
    });
  },
};
</script>
