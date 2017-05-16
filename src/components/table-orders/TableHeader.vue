<template>
  <thead>
    <tr>
      <th @click="sortList('status')">Status <sort-icon column-name="status" :sort="sort"></sort-icon></th>
      <th @click="sortList('code')">Código <sort-icon column-name="code" :sort="sort"></sort-icon></th>
      <th @click="sortList('payment')">Meio <sort-icon column-name="payment" :sort="sort"></sort-icon></th>
      <th @click="sortList('value')">R$ <sort-icon column-name="value" :sort="sort"></sort-icon></th>
      <th @click="sortList('updated')">Atualizado <sort-icon column-name="updated" :sort="sort"></sort-icon></th>
      <th @click="sortList('customer.name')">Cliente <sort-icon column-name="customer.name" :sort="sort"></sort-icon></th>
    </tr>
  </thead>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SortIcon from '@/components/columns/SortIcon.vue'

export default {
  name: 'TableHeader',
  computed: {
    ...mapGetters([
      'sort'
    ])
  },
  methods: {
    ...mapActions([
      'sortOrdersList'
    ]),
    sortList (column) {
      console.log('dentro da sortList: ', column)
      this.sortOrdersList(column)
    }
  },
  components: {
    SortIcon
  }
}
</script>

<style lang="scss" scoped>
  th {
    cursor: pointer;
  }
</style>
