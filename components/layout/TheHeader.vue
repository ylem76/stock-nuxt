<template>
  <header>
    <base-button mode="back">뒤로가기</base-button>
    <h1>{{ pageTitle }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: 'stock view',
    },
  },
}
</script>
<style scoped>
header {
  display: flex;
  align-items: stretch;
  flex-basis: content;
}
h1 {
  width: 100%;
  text-align: center;
}
</style>
