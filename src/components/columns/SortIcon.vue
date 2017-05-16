<template>
  <span class="icon is-small" v-show="sort.column === columnName">
    <i :class="{ 'fa':  true, 'fa-sort-amount-asc': sort.asc, 'fa-sort-amount-desc': !sort.asc }"></i>
  </span>
</template>

<script>
export default {
  name: 'SortIcon',
  props: [
    'columnName',
    'sort'
  ]
}
</script>

<style lang="css">
</style>
