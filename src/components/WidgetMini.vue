<template>
  <div class="card card-bg">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WidgetMini",
  props: {
    title: String,
    desc: String,
    type: Number,
  },
};
</script>
<style scoped>
.card-bg {
  background: linear-gradient(90deg,rgb(118, 194, 27) 0%,rgb(167, 218, 66) 100%) !important;
  box-shadow: 1px 1.732px 60px 0px rgb(0 0 0 / 10%);
  font-family: "Rubik", sans-serif;
}
</style>
