<template>
  <section>
    <p>
      <span>매매 종류 : {{ stock.buy }}</span>
      <span>거래일: {{ stock.date }}</span>
      <span>거래금액: {{ stock.price }}</span>
      <span> 수량:{{ stock.count }} </span>
    </p>
    <table>
      <tbody>
        <tr>
          <td>
            <select v-model="stock.buy">
              <option disabled value="">선택</option>
              <option value="매수">매수</option>
              <option value="매도">매도</option>
            </select>
          </td>
          <td>
            <form action="">
              <input v-model="stock.date" type="text" placeholder="20.05.20" />
            </form>
          </td>
          <td>
            <input v-model="stock.price" type="text" placeholder="45,900" />
          </td>
          <td><input v-model="stock.count" type="text" placeholder="2" /></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <button @click="completeClose()">저장하기</button>
    <button @click="close()">취소하기</button>
    <!-- <span>{{ message }}</span> -->
  </section>
</template>
<script>
export default {
  // props: {
  //   message: {
  //     type: String,
  //     default: '',
  //   },
  // },
  data() {
    return {
      stock: {
        id: '',
        buy: '',
        date: '',
        price: '',
        count: '',
      },
    }
  },
  methods: {
    completeClose() {
      this.$emit('stock')
      alert('저장되었습니다.')
      close()
    },

    close() {
      this.$emit('close')
    },
  },
}
</script>
