<template>
  <span>{{ formattedDate }}</span>
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    formattedDate () {
      return moment.utc(this.updated).format('DD/MM/YYYY HH:mm')
    }
  },
  props: [
    'updated'
  ]
}
</script>

<style lang="css">
</style>
