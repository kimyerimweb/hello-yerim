<template>
  <div class="modal">
    <section class="modal-header">
      <slot name="header"></slot>
      <button class="close-button" @click="onClick">
        <img src="" alt="close button" />
      </button>
    </section>
    <section class="modal-body">
      <slot name="body"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'modal-component',
  props: {
    onClick: {
      type: Function,
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  color: $primary;
  font-weight: $medium;
  z-index: $modal;

  &-header {
    height: 50px;
    border-bottom: 1px solid $border;
    background-color: $white;
  }
  &-body {
    background-color: $white;
  }
}
</style>
