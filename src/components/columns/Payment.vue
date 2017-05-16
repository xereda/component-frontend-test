<template>
  <span class="icon" v-tooltip="{ content: defineToolTip }">
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
      if (this.payment === 'credit') return 'Cartão de crédito'
      if (this.payment === 'debit') return 'Cartão de débito'
      if (this.payment === 'ticket') return 'Código de barras'
    },
    defineClass () {
      const base = 'fa'
      if (this.payment === 'credit') return base + ' fa-credit-card'
      if (this.payment === 'debit') return base + ' fa-credit-card-alt'
      if (this.payment === 'ticket') return base + ' fa-barcode'
    }
  },
  props: [
    'payment'
  ]
}
</script>

<style lang="css">
</style>
