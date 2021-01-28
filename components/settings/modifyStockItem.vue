<template>
  <section>
    test
    <!-- <base-modal v-if="inputIsInvalid" @modalClose="confirmError">
      <template #default>
        <p>빈칸을 다 채워주세요</p>
      </template>
      <template #action>
        <base-button @click.native="confirmError">닫기</base-button>
      </template>
    </base-modal>
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
    <button @click="close()">취소하기</button> -->
  </section>
</template>
<script>
// import BaseButton from '../UI/BaseButton.vue'
export default {
  // components: { BaseButton },
  props: {
    modifyItemData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      inputIsInvalid: false,
    }
  },
  methods: {
    confirmError() {
      this.inputIsInvalid = false
    },
    completeClose() {
      if (
        this.stock.buy === '' ||
        this.date === '' ||
        this.stock.price === '' ||
        this.stock.count === ''
      ) {
        this.inputIsInvalid = true
        return
      }
      this.stock.id = new Date().toISOString()
      this.addNewItem(this.stock)
      this.$emit('stock')
      this.stock = {
        // 폼 입력 내용 지우는 방법 찾아보기
        id: '',
        buy: '',
        date: '',
        price: '',
        count: '',
      }
      this.close()
    },

    close() {
      this.$emit('close')
    },
  },
}
</script>
