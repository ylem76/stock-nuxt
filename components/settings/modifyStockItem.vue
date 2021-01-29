<template>
  <section>
    <base-modal v-if="inputIsInvalid" @modalClose="confirmError">
      <template #default>
        <p>빈칸을 다 채워주세요</p>
      </template>
      <template #action>
        <base-button @click.native="confirmError">닫기</base-button>
      </template>
    </base-modal>

    <p>
      <span>매매 종류 : {{ buy }}</span>
      <span>거래일: {{ date }}</span>
      <span>거래금액: {{ price }}</span>
      <span> 수량:{{ count }} </span>
    </p>
    <table>
      <!-- <tbody>
        <tr>
          <td>
            <select v-model="modifyItemData.buy">
              <option disabled value="">선택</option>
              <option value="매수">매수</option>
              <option value="매도">매도</option>
            </select>
          </td>
          <td>
            <form action="">
              <input
                v-model="modifyItemData.date"
                type="text"
                placeholder="20.05.20"
              />
            </form>
          </td>
          <td>
            <input
              v-model="modifyItemData.price"
              type="text"
              placeholder="45,900"
            />
          </td>
          <td>
            <input v-model="modifyItemData.count" type="text" placeholder="2" />
          </td>
          <td></td>
        </tr>
      </tbody> -->
    </table>
    <button @click="modifyCompleteClose()">저장하기</button>
    <button @click="close()">취소하기</button>
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
    id: {
      type: String,
      default: '',
    },
    buy: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '',
    },
    count: {
      type: String,
      default: '',
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
    modifyCompleteClose() {
      if (
        this.modifyItemData.buy === '' ||
        this.modifyItemData.date === '' ||
        this.modifyItemData.price === '' ||
        this.modifyItemData.count === '' ||
        this.modifyItemData.id === ''
      ) {
        this.inputIsInvalid = true
        return
      }

      this.ModifyThisItem(this.modifyItemData)
      this.$emit('stock')
      this.modifyItemData = {
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
