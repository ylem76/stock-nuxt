<template>
  <tr>
    <td v-show="!modifyMode">{{ item.buy }}</td>
    <td v-show="!modifyMode">{{ item.date }}</td>
    <td v-show="!modifyMode">{{ item.price }}</td>
    <td v-show="!modifyMode">{{ item.count }}</td>
    <td v-show="!modifyMode">
      <base-button @click.native="removeItem(id)">삭제</base-button>
      <base-button @click.native="modifyMode = true">수정</base-button>
    </td>

    <td v-if="modifyMode">
      <select v-model="item.buy">
        <option disabled value="">선택</option>
        <option value="매수">매수</option>
        <option value="매도">매도</option>
      </select>
    </td>
    <td v-if="modifyMode">
      <form action="">
        <input v-model="item.date" type="text" placeholder="20.05.20" />
      </form>
    </td>
    <td v-if="modifyMode">
      <input v-model="item.price" type="text" placeholder="45,900" />
    </td>
    <td v-if="modifyMode">
      <input v-model="item.count" type="text" placeholder="2" />
    </td>
    <td v-if="modifyMode">
      <base-button @click.native="saveModify()">저장</base-button>
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
  },
  emit: ['saved'],
  data() {
    return {
      item: {
        id: this.id,
        buy: this.buy,
        date: this.date,
        price: this.price,
        count: this.count,
      },
      modifyMode: false,
    }
  },
  methods: {
    removeItem(stockId) {
      this.$store.commit('removeItem', stockId)
    },
    saveModify() {
      this.modifyMode = false
      const modifiedItem = {
        id: this.item.id,
        buy: this.item.buy,
        date: this.item.date,
        price: this.item.price,
        count: this.item.count,
      }
      // this.$emit('saved', modifiedItem)
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
