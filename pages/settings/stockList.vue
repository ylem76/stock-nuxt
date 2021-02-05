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
      removeItem: this.removeItem,
    }
  },
  computed: {
    getList() {
      return this.$store.getters.getStockList
    },
  },
  methods: {},
}
</script>

<style></style>
