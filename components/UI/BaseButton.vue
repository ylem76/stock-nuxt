<template>
  <button :class="mode"><slot></slot></button>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
/*button styles*/
button {
  border: 0;
  background: rgb(190, 190, 190);
  color: rgb(0, 0, 0);
}
.add {
  background: red;
}

.back {
  background-color: #eee;
}
</style>
