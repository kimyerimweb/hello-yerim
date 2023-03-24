<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <div class="i18n-title">
          <h2>{{ $t('common.selectLanguage') }}</h2>
          <LanguageSelector />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <div class="i18n-text">
          <p>{{ $t('common.text') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
  name: 'i18n-view',
  components: { LanguageSelector },
}
</script>

<style lang="scss" scoped>
.i18n-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 32px;
    color: $primary;
    margin-right: 8px;
  }
}

.i18n-text {
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding: 20px;
    border-radius: 8px;
    color: $primary;
    font-size: 20px;
    font-weight: $medium;
    text-align: center;
    background-color: $blue-light;
  }
}
</style>
