import Vue from 'vue'
import store from '@/store/store'
import _ from 'lodash'
import Summary from '@/components/Summary.vue'

describe('src/components/Summary.vue', () => {
  it('Verifica se o componente foi renderizado corretamente. ', () => {
    const Constructor = Vue.extend(Summary)
    const vm = new Constructor({ store }).$mount()
    expect(vm.$el.querySelector('.content p').textContent)
      .to.have.string('PEDIDOS ENCONTRADOS')
  })
})

describe('src/components/Summary.vue', () => {
  it('Contra valida o texto. ', () => {
    const Constructor = Vue.extend(Summary)
    const vm = new Constructor({ store }).$mount()
    expect(vm.$el.querySelector('.content p').textContent)
      .to.not.have.string('999999999 PEDIDOS ENCONTRADOS')
  })
})

describe('src/components/Summary.vue', () => {
  it('Monta o parágrafo com o total de orders disponível na store vuex. ', () => {
    const Constructor = Vue.extend(Summary)
    const vm = new Constructor({ store }).$mount()
    expect(vm.$el.querySelector('.content p').textContent)
      .to.have.string(store.state.orders.length + ' PEDIDOS ENCONTRADOS')
  })
})

describe('src/components/Summary.vue', () => {
  it('Valida a computed totalValue que retorna a soma dos pedidos. ): ', () => {
    const Constructor = Vue.extend(Summary)
    const vm = new Constructor({ store }).$mount()
    expect(vm.totalValue).length.equal(_.sumBy(store.state.orders, 'value'))
  })
})
