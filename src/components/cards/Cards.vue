<template>
  <div class="">
    <div class="card box custom-card" v-for="order in orders">
      <div class="card-content">
        <div class="columns is-mobile">
          <div class="column is-2">
            <status-column :status="order.status"></status-column>
          </div>
          <div class="column">
            <code-column :code="order.code"></code-column>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-2">
            <payment-column :payment="order.payment"></payment-column>
          </div>
          <div class="column">
            <value-column :value="order.value"></value-column>
          </div>
          <div class="column">
            <updated-column :value="order.updated"></updated-column>
          </div>
        </div>
        <div class="columns is-mobile" v-show="card.customer.hidden">
          <div class="column">
            <hr>
            <customer-column :avatar="order.customer.avatar"
                                 :name="order.customer.name"
                                 :email="order.customer.email"></customer-column>
          </div>

        </div>
      </div>
    </div>
  </div>
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
      'orders',
      'card'
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
  .custom-card {
    padding: 0px;
  }
</style>
