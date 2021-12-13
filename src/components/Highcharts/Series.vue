<template>
  <div class="card card-bg">
    <highcharts
      class="highchart"
      :constructor-type="'chart'"
      :options="stockOptions"
    ></highcharts>
  </div>
</template>
<script>
import { seriesData } from "../../service/analystics";
import Highcharts from "highcharts";
import seriesInit from "highcharts/modules/series-label";
import dataModule from "highcharts/modules/data";
import exportModule from "highcharts/modules/exporting";
dataModule(Highcharts);
exportModule(Highcharts);
seriesInit(Highcharts);
export default {
  props: {
    type: String,
  },
  data() {
    return {
      data: [],
      stockOptions: {
        title: {
          text: this.$i18n.t("analystics.series." + this.type + ".title"),
        },

        yAxis: {
          title: {
          text: this.$i18n.t("analystics.series." + this.type + ".symbol"),
          },
        },

        series: this.data,

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    seriesData(this.type).then((res) => {
      this.stockOptions.series = res.data;
    });
  },
  watch: {
    "$i18n.locale": function () {
      this.stockOptions.title.text = this.$i18n.t(
        "analystics.series." + this.type + ".title"
      );
    },
  },
};
</script>
<style scoped>
.highchart {
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
}
</style>
