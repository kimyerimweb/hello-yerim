<template>
  <div class="card">
    <section class="card-header">
      <slot name="header"></slot>
    </section>
    <section class="card-body">
      <slot name="body"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'card-component',
}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid $border;
  border-radius: 4px;

  &-header {
    height: 40px;
    border-bottom: 1px solid $border;
    background-color: $background;
  }
  &-body {
    background-color: $white;
  }
}
</style>
