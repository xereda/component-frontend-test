<template>
  <div class="">
    <table class="table is-striped">
      <table-header></table-header>
      <table-body></table-body>
    </table>
  </div>
</template>

<script>
import TableHeader from '@/components/table-orders/TableHeader.vue'
import TableBody from '@/components/table-orders/TableBody.vue'

export default {
  components: {
    TableHeader,
    TableBody
  }
}
</script>

<style lang="css">
</style>
