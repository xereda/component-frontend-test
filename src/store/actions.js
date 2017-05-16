export default {
  sortOrdersList (context, column) {
    context.commit('SORT_ORDERS_LIST', column)
  },
  setHiddenCustomer (context) {
    context.commit('SET_HIDDEN_CUSTOMER')
  }
}
