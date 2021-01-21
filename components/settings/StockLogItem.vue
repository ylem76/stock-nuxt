<template>
  <tr>
    <td>{{ buy }}</td>
    <td>{{ date }}</td>
    <td>{{ price }}</td>
    <td>{{ count }}</td>
    <td><base-button>수정</base-button></td>
  </tr>
</template>

<script>
export default {
  props: {
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
}
</script>

<style></style>
