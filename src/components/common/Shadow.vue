<template>
  <div class="shadow"></div>
</template>

<script>
export default {
  name: 'shadow-component',
}
</script>

<style lang="scss" scoped>
.shadow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: $shadow;
  background-color: $dark;
  opacity: 0.3;
}
</style>
