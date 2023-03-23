<template>
  <a v-if="url" :href="url" target="_blank"><slot></slot></a>
  <button v-else @click="onClick"><slot></slot></button>
</template>

<script>
export default {
  name: 'button-component',
  props: {
    url: {
      type: String,
      default: null,
    },
    onClick: {
      type: Function,
    },
  },
}
</script>

<style lang="scss" scoped>
a,
button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: $bold;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  background: $white;
  color: $secondary;
  border: 1px solid $border;
  &:hover:not(.disabled) {
    color: $blue;
    border: 1px solid $blue;
  }

  &.h-32 {
    height: 32px;
    font-size: 16px;
  }

  &.h-40 {
    height: 40px;
    font-size: 16px;
  }

  &.h-48 {
    height: 48px;
  }

  &.h-55 {
    height: 55px;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.primary {
    background-color: $blue;
    color: $white;

    &:hover:not(.disabled) {
      background-color: $blue-dark;
    }
  }

  &.secondary {
    background-color: $border;
    color: $primary;

    &:hover:not(.disabled) {
      background-color: $tertiary;
    }
  }

  &.outlined {
    background-color: $white;
    color: $blue;
    border: 1px solid $blue;

    &:hover:not(.disabled) {
      background-color: $blue-light;
    }
  }
}
</style>
