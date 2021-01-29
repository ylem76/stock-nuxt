<template>
  <section>
    <the-header page-title="매매기록" page-link="/settings"></the-header>
    <stock-log-list :log-list="stockList"></stock-log-list>

    <base-button
      v-show="!writeNewList"
      class="add-list"
      mode="add"
      @click.native="writeNewList = true"
    >
      + 매매 내역 추가하기
    </base-button>
    <write-new-stock-list
      v-show="writeNewList"
      :message="stockList"
      @close="writeNewList = false"
    ></write-new-stock-list>
  </section>
</template>

<script>
export default {
  layout: 'settings',
  data() {
    return {
      test: true,
      modifyMode: false,
      modifyItemData: {},
      writeNewList: false,
      stockList: [
        {
          id: 'test',
          buy: '매수',
          date: '20.12.05',
          price: '65,500',
          count: '19',
        },
        {
          id: 'index1',
          buy: '매수',
          date: '20.12.25',
          price: '64,500',
          count: '10',
        },
      ],
    }
  },
  provide() {
    return {
      stockList: this.stockList,
      addNewItem: this.addNewItem,
      deleteItem: this.removeItem,
      modifyItem: this.modifyItem,

      modifyMode: this.modifyMode,
      modifySave: this.modifySave,
    }
  },
  methods: {
    addNewItem(enteredObj) {
      const newItem = {
        id: enteredObj.id,
        buy: enteredObj.buy,
        date: enteredObj.date,
        price: enteredObj.price,
        count: enteredObj.count,
      }
      this.stockList.unshift(newItem)
    },
    removeItem(stockId) {
      const removeStockIndex = this.stockList.findIndex(
        (res) => res.id === stockId
      )
      this.stockList.splice(removeStockIndex, 1)
    },
    modifySave(beModifyItem) {
      const modifiedIndex = this.stockList.findIndex(
        (res) => res.id === beModifyItem.id
      )
      this.stockList[modifiedIndex] = beModifyItem
      this.modifyMode = false
    },
  },
}
</script>

<style></style>
