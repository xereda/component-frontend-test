<template>
  <div class="content is-small">
    <section class="section">
      <div class="container">
        <orders-header></orders-header>
        <hr>
        <table-orders class="is-hidden-mobile"></table-orders>
        <cards-orders class="is-hidden-tablet"></cards-orders>
      </div>
    </section>
  </div>
</template>

<script>
import OrdersHeader from '@/components/OrdersHeader.vue'
import TableOrders from '@/components/table-orders/TableOrders.vue'
import CardsOrders from '@/components/cards/Cards.vue'

export default {
  components: {
    OrdersHeader,
    TableOrders,
    CardsOrders
  }
}
</script>

<style lang="scss">
</style>
