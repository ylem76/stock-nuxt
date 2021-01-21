<template>
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
        v-for="res in logList"
        :key="res.id"
        :buy="res.buy"
        :date="res.date"
        :price="res.price"
        :count="res.count"
      ></stock-log-item>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    logList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
