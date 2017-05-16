export default {
  card: {
    customer: {
      hidden: false
    }
  },
  sort: {
    column: '',
    asc: false
  },
  orders: [
    {
      status: 'approved',
      code: 'ABC1049211398',
      payment: 'credit',
      value: 213.98,
      updated: '2017-05-16T12:23:55Z',
      customer: {
        avatar: '../static/images/avatars/001.png',
        name: 'Josh Marone',
        email: 'josh@marone.com'
      }
    },
    {
      status: 'canceled',
      code: 'ABC2300129320',
      payment: 'ticket',
      value: 1522.04,
      updated: '2017-05-16T13:08:30Z',
      customer: {
        avatar: '../static/images/avatars/002.png',
        name: 'Elisabeth Neus',
        email: 'lisaneues@emaila.oi'
      }
    },
    {
      status: 'approved',
      code: 'CDF3840009196',
      payment: 'debit',
      value: 973.20,
      updated: '2017-04-10T17:54:18Z',
      customer: {
        avatar: '../static/images/avatars/003.png',
        name: 'Lillian Zigger',
        email: 'zigger@me.com'
      }
    },
    {
      status: 'waiting',
      code: 'JKK11093391501',
      payment: 'credit',
      value: 2298.00,
      updated: '2017-05-11T15:02:33Z',
      customer: {
        avatar: '../static/images/avatars/004.png',
        name: 'Jackson Xereda',
        email: 'jackson@success.com'
      }
    }
  ]
}
