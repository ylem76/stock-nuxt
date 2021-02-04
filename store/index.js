import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      stockList: [
        {
          id: 'test',
          buy: '매수',
          date: '20.12.05',
          price: '65,500',
          count: '19000',
        },
        {
          id: 'index1',
          buy: '매수',
          date: '20.12.25',
          price: '64,500',
          count: '10',
        },
      ],
    },
    mutations: {
      addItem(state, stockData) {
        state.stockList.unshift(stockData)
      },
      modifyItem(state, stockData) {
        const dataIndex = state.stockList.findIndex(
          (stockList) => stockList.id === stockData.id
        )
        alert(dataIndex)
        state.stockList[dataIndex] = stockData
      },
      removeItem(state, stockId) {
        state.stockList.splice(stockId, 1)
      },
    },
    getters: {
      getStockList(state) {
        return state.stockList
      },
    },
  })
}

export default createStore
