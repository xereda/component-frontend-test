import { orderBy as _orderBy } from 'lodash'

export default {
  orders: state => {
    const { orders } = state
    const { sort } = state
    const direction = sort.asc ? 'asc' : 'desc'
    return _orderBy(orders, sort.column, direction)
  },
  sort: state => {
    const { sort } = state
    return sort
  },
  card: state => {
    const { card } = state
    return card
  }
}
