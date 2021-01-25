<template>
  <section>
    <div @click="$emit('modalClose')"></div>
    <dialog open>
      <section>
        <slot>
          <p>{{ errorMsg }}</p>
        </slot>
      </section>
      <menu>
        <slot name="action">
          <base-button @click="$emit('modalClose')">닫기</base-button>
        </slot>
      </menu>
    </dialog>
  </section>
</template>

<script>
export default {
  props: {
    errorMsg: {
      type: String,
      default: '',
      required: false,
    },
  },
  emit: ['modalClose'],
}
</script>
