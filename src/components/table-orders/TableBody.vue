<template>
  <tbody>
    <!-- {{ orders }} -->
    <tr v-for="order in orders">
      <td><status-column :status="order.status"></status-column></td>
      <td><code-column :code="order.code"></code-column></td>
      <td><payment-column :payment="order.payment"></payment-column></td>
      <td><value-column :value="order.value"></value-column></td>
      <td><updated-column :updated="order.updated"></updated-column></td>
      <td><customer-column :avatar="order.customer.avatar"
                           :name="order.customer.name"
                           :email="order.customer.email"></customer-column></td>
    </tr>
  </tbody>
</template>

<script>
import { mapGetters } from 'vuex'

import StatusColumn from '@/components/columns/Status.vue'
import CodeColumn from '@/components/columns/Code.vue'
import PaymentColumn from '@/components/columns/Payment.vue'
import ValueColumn from '@/components/columns/Value.vue'
import UpdatedColumn from '@/components/columns/Updated.vue'
import CustomerColumn from '@/components/columns/Customer.vue'

export default {
  computed: {
    ...mapGetters([
      'orders'
    ])
  },
  components: {
    StatusColumn,
    CodeColumn,
    PaymentColumn,
    ValueColumn,
    UpdatedColumn,
    CustomerColumn
  }
}
</script>

<style lang="scss">
</style>
