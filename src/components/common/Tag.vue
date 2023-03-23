<template>
  <div><slot></slot></div>
</template>

<script>
export default {
  name: 'tag-component',
}
</script>

<style lang="scss" scoped>
div {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 0 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: $bold;

  &.red {
    background-color: $red;
    color: $white;
  }

  &.green {
    background-color: $green;
    color: $white;
  }

  &.gray {
    background-color: $border;
    color: $secondary;
  }
}
</style>
