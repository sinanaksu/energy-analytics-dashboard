<template>
  <div>
    <span type="button" @click="switchRun()" > {{ switchTitle }} </span>
  </div>
</template>


<script>
export default {
  name: 'ThemeSwitch',
  methods:{
    switchRun() {
     this.$store.state.darkmode ? this.$store.state.darkmode = false : this.$store.state.darkmode = true
    }
  },
  computed: {
    switchTitle: function() {
      return this.$store.state.darkmode ? this.$t('lightmode') : this.$t('darkmode')
    }
  }
}
</script>
