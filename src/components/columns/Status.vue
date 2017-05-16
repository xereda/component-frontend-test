<template>
  <span class="icon" v-tooltip="{ content: defineToolTip, class: defineToolTipClass }">
    <i :class="defineClass"></i>
  </span>
</template>

<script>
import Vue from 'vue'
import Tooltip from 'vue-directive-tooltip'
Vue.use(Tooltip)

export default {
  computed: {
    defineToolTip () {
      if (this.status === 'approved') return 'Aprovado'
      if (this.status === 'canceled') return 'Cancelado'
      return 'Aguardando aprovação'
    },
    defineClass () {
      const base = 'fa'
      if (this.status === 'approved') return base + ' fa-check-circle success-icon'
      if (this.status === 'canceled') return base + ' fa-times-circle danger-icon'
      if (this.status === 'waiting') return base + ' fa-clock-o warning-icon'
    },
    defineToolTipClass () {
      if (this.status === 'approved') return 'vue-tooltip-success'
      if (this.status === 'canceled') return 'vue-tooltip-danger'
      if (this.status === 'waiting') return 'vue-tooltip-warning'
    }
  },
  props: [
    'status'
  ]
}
</script>

<style lang="scss">
  @import '~bulma/sass/utilities/initial-variables';
  @import '~vue-directive-tooltip/css/index.min.css';

  .success-icon {
    color: $green;
  }
  .danger-icon {
    color: $red;
  }
  .warning-icon {
    color: $yellow;
  }
  .vue-tooltip-success {
    background-color: $green;
  }
  .vue-tooltip-danger {
    background-color: $red;
  }
  .vue-tooltip-warning {
    background-color: $yellow;
  }

</style>
