<template>
  <div class="content is-small">
    <p><strong>{{ orders.length }}</strong> PEDIDOS ENCONTRADOS | NO VALOR TOTAL DE <strong><total-value :value="totalValue"></total-value></strong></p>
  </div>
</template>

<script>
import { sumBy as _sumBy } from 'lodash'
import { mapGetters } from 'vuex'
import TotalValue from '@/components/columns/Value.vue'

export default {
  components: {
    TotalValue
  },
  computed: {
    ...mapGetters([
      'orders'
    ]),
    totalValue () {
      return _sumBy(this.orders, 'value')
    }
  }
}
</script>

<style lang="css">
</style>
