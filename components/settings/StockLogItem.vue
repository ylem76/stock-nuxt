<template>
  <tr>
    <td>{{ buy }}</td>
    <td>{{ date }}</td>
    <td>{{ price }}</td>
    <td>{{ count }}</td>
    <td>
      <base-button @click.native="deleteItem(id)">삭제</base-button>
      <base-button @click.native="modifyItem(id)">수정</base-button>
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
  inject: ['deleteItem', 'modifyItem'],
}
</script>

<style></style>
