<template>
  <a class="button is-small is-primary" id="set-hidden-customer" @click="setHiddenCustomer()">
    <span class="icon is-small">
      <i :class="{ 'fa': true, 'fa-eye-slash': card.customer.hidden, 'fa-eye': !card.customer.hidden }"></i>
    </span>
    <span v-show="card.customer.hidden">ESCONDER CLIENTE</span>
    <span v-show="!card.customer.hidden">MOSTRAR CLIENTE</span>
  </a>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HiddenCustomerButton',
  methods: {
    ...mapActions([
      'setHiddenCustomer'
    ])
  },
  computed: {
    ...mapGetters([
      'card'
    ])
  }
}
</script>

<style lang="css">
</style>
