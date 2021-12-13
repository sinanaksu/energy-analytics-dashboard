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
import { heatmapData } from "../../service/analystics";
import Highcharts from "highcharts";
import heatmapInit from "highcharts/modules/heatmap";
import dataModule from "highcharts/modules/data";
import exportModule from "highcharts/modules/exporting";
dataModule(Highcharts);
exportModule(Highcharts);
heatmapInit(Highcharts);
export default {
  data() {
    return {
      data: [],
      stockOptions: {

        chart: {
          type: "heatmap",
          inverted: true,
        },

        data: {
          firstRowAsNames: false,
          rows: this.data
        },

        title: {
          text: this.$i18n.t("analystics.consumptionheatmap"),
          align: "center",
        },

        subtitle: {
          text: null,
          align: "left",
        },

        xAxis: {
          tickPixelInterval: 50,
        },

        yAxis: {
          title: {
            text: null,
          },
          labels: {
            format: "{value}:00",
          },
          minPadding: 0,
          maxPadding: 0,
          startOnTick: false,
          endOnTick: false,
          tickWidth: 1,
          min: 0,
          max: 23,
        },

        colorAxis: {
          stops: [
            [0.0, "#11814b"],
            [0.5, "#dae348"],
            [1, "#c4463a"],
          ],
          min: 200,
          startOnTick: false,
          endOnTick: false,
          labels: {
            format: "{value} kWh",
            align: "left",
          },
        },

        series: [
          {
            borderWidth: 0,
            colsize: 24 * 36e5,
            tooltip: {
              pointFormat:
                "{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} kWh</b>",
            },
          },
        ],
        credits: {
          enabled: false,
        },
        exporting: {
          enabled: true,
        }
      },
    };
  },
    mounted() {
    heatmapData().then((res) => {
      this.stockOptions.data.rows = res.data
    });
  },
  watch: {
    "$i18n.locale": function () {
      this.stockOptions.title.text = this.$i18n.t("analystics.consumptionheatmap");
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
