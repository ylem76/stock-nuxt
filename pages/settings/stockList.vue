<template>
  <section>
    <the-header page-title="매매기록" page-link="/settings"></the-header>
    <div>
      <p>{{ getList }}</p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>거래일</th>
            <th>단가</th>
            <th>수량</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <stock-log-item
            v-for="res in getList"
            :id="res.id"
            :key="res.id"
            :buy="res.buy"
            :date="res.date"
            :price="res.price"
            :count="res.count"
            @modifyOpen="test"
            @saved="modifyItem"
          ></stock-log-item>
        </tbody>
      </table>
    </div>

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
      writeNewList: false,
    }
  },
  provide() {
    return {
      // stockList: this.stockList,
      addNewItem: this.addNewItem,
      removeItem: this.removeItem,
      // modifyItem: this.modifyItem,
      // modifySave: this.modifySave,
    }
  },
  computed: {
    getList() {
      return this.$store.getters.getStockList
    },
  },
  methods: {
    addNewItem(enteredObj) {
      this.$store.commit('addItem', {
        id: enteredObj.id,
        buy: enteredObj.buy,
        date: enteredObj.date,
        price: enteredObj.price,
        count: enteredObj.count,
      })
    },
    removeItem(stockId) {
      this.$store.commit('removeItem', stockId)
    },
    modifyItem(modifiedItem) {
      this.$store.commit('modifyItem', {
        id: modifiedItem.id,
        buy: modifiedItem.buy,
        date: modifiedItem.date,
        price: modifiedItem.price,
        count: modifiedItem.count,
      })
    },
  },
}
</script>

<style></style>
