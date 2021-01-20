<template>
  <tr>
    <td>{{ buy }}</td>
    <td>{{ date }}</td>
    <td>{{ price }}</td>
    <td>{{ count }}</td>
    <td><button>수정</button></td>
  </tr>
</template>

<script>
export default {
  props: ['buy', 'date', 'price', 'count'],
}
</script>

<style></style>
