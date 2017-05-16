<template>
  <div id="app">
    <orders-list></orders-list>
  </div>
</template>

<script>
import 'bulma'
import 'font-awesome/scss/font-awesome.scss'
import OrdersList from '@/components/OrdersList.vue'

export default {
  name: 'app',
  components: {
    OrdersList
  }
}
</script>

<style>
</style>
