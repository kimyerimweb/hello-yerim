<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <div class="l10n">
          <h2 class="title">localization</h2>
          <div class="content">
            <div class="currency">
              <Tag class="gray">Currency</Tag>
              <span> {{ $n(1000000, 'currency') }}</span>
            </div>
            <div class="plural">
              <Tag class="gray">Pluralization</Tag>
              <span>
                {{ $tc('plural.banana', value) }}
              </span>
              <div class="counter">
                <button class="minus" @click="minus">-</button>
                <div>{{ value }}</div>
                <button class="plus" @click="plus">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/common/Tag.vue'

export default {
  name: 'l10n-view',
  components: { Tag },
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    minus() {
      this.value -= 1
    },
    plus() {
      this.value += 1
    },
  },
}
</script>

<style lang="scss" scoped>
.l10n {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 30px;
}

.content {
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: $blue-light;
  span {
    font-size: 14px;
    color: $primary;
    margin-left: 4px;
  }
}

.counter {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $white;
  margin-top: 8px;
  border: 1px solid $border;
  border-radius: 8px;
  color: $primary;
  overflow: hidden;

  button {
    display: block;
    width: 30%;
    height: 100%;
    background-color: $border;
    cursor: pointer;
  }
}
</style>
