export default {
  'SORT_ORDERS_LIST' (state, column) {
    state.sort.column === column ? state.sort.asc = !state.sort.asc : state.sort.asc = true
    state.sort.column = column
  },
  'SET_HIDDEN_CUSTOMER' (state) {
    state.card.customer.hidden = !state.card.customer.hidden
  }
}
