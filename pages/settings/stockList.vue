<template>
  <section>
    <header>
      <button>뒤로가기</button>
      <h1>매매기록</h1>
    </header>
    <section class="list">
      <stock-log-list :logList="stockList"></stock-log-list>
    </section>
    <button
      v-show="!writeNewList"
      class="add-list"
      @click="writeNewList = true"
    >
      + 매매 내역 추가하기
    </button>
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
      writeNewList: false,
      stockList: [
        {
          id: '1',
          buy: '매수',
          date: '20.12.05',
          price: '65,500',
          count: '19',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style></style>
