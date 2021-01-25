<template>
  <header>
    <a :href="pageLink">뒤로가기</a>
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
    pageLink: {
      type: String,
      default: '/',
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
