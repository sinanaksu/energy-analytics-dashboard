<template>
  <div>
    <span role="button" @click="switchRun()" > {{ switchTitle }} </span>
  </div>
</template>


<script>
export default {
  name: 'LocaleSwitch',
  methods:{
    switchRun() {
     this.$i18n.locale == 'en' ? this.$i18n.locale = 'tr' : this.$i18n.locale = 'en'
    }
  },
  computed: {
    switchTitle: function() {
      return this.$i18n.locale == 'en' ? 'Türkçe' : 'English'
    }
  }
}
</script>
