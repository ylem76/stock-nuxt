<template>
  <tr>
    <td v-show="!modifyMode">{{ buy }}</td>
    <td v-show="!modifyMode">{{ date }}</td>
    <td v-show="!modifyMode">{{ price }}</td>
    <td v-show="!modifyMode">{{ count }}</td>
    <td v-show="!modifyMode">
      <base-button @click.native="deleteItem(id)">삭제</base-button>
      <base-button @click.native="getModify()">수정</base-button>
    </td>

    <td v-if="modifyMode">
      <select v-model="buy">
        <option disabled value="">선택</option>
        <option value="매수">매수</option>
        <option value="매도">매도</option>
      </select>
    </td>
    <td v-if="modifyMode">
      <form action="">
        <input v-model="beModifyItem.date" type="text" placeholder="20.05.20" />
      </form>
    </td>
    <td v-if="modifyMode">
      <input v-model="beModifyItem.price" type="text" placeholder="45,900" />
    </td>
    <td v-if="modifyMode">
      <input v-model="beModifyItem.count" type="text" placeholder="2" />
    </td>
    <td v-if="modifyMode">
      <base-button @click.native="modifySave(beModifyItem)">저장</base-button>
      <base-button @click.native="modifyMode = false">취소</base-button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
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
    modifyMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      beModifyItem: {},
    }
  },
  inject: ['deleteItem', 'modifySave'],

  methods: {
    getModify() {
      this.beModifyItem = {
        id: this.id,
        buy: this.buy,
        date: this.date,
        price: this.price,
        count: this.count,
      }
      this.modifyMode = true
    },
  },
}
</script>

<style></style>
