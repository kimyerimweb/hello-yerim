<template>
  <div class="selector">
    <button @click="toggleOptions">
      <div>
        <img src="@/assets/icons/public.svg" alt="language selector" />
      </div>
    </button>
    <ul v-if="isOpen">
      <li
        :value="option"
        v-for="option in options"
        :key="option"
        @click="changeLanguage"
      >
        <div>
          {{ option }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'language-selector',
  props: {
    type: String,
  },
  data() {
    return {
      languagePreference: null,
      options: ['en', 'ar', 'ru', 'ko', 'mn'],
      isOpen: false,
    }
  },
  methods: {
    getCookieLanguage() {
      return this.$cookies.get('language')
    },
    getLanguagePreference() {
      const defaultLanguage = this.$i18n.locale
      const cookieLanguage = this.getCookieLanguage()
      const browserLanguage = window.navigator.langage

      let language
      if (cookieLanguage) {
        language = cookieLanguage
      }

      if (this.options.includes(browserLanguage)) {
        language = browserLanguage
      } else {
        language = defaultLanguage
      }

      this.setLangaugePreference(language)
    },
    setLanguagePreference(language) {
      this.languagePreference = language
      this.$i18n.locale = language
      this.$cookies.set('language', language)
    },
    changeLanguage(event) {
      this.setLanguagePreference(event.target.textContent.trim())
      this.toggleOptions()
    },
    toggleOptions() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
$button-width: 30px;
$button-margin-bottom: 12px;
.selector {
  position: relative;
  display: flex;
  width: $button-width;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    div {
      width: 100%;
      img {
        display: block;
        width: 100%;
      }
    }
  }

  ul {
    position: absolute;
    top: $button-width + $button-margin-bottom;
    width: 100px;
    border-radius: 4px;
    border: 1px solid $border;
    background-color: $white;
    cursor: pointer;

    li {
      padding: 2px;
      text-align: center;
      color: $primary;
      font-size: 14px;

      div {
        padding: 4px;
        border-radius: 4px;
        &:hover {
          background-color: $blue-light;
        }
      }
    }

    $tri-width: 10px;
    &::after {
      position: absolute;
      top: -1 * $tri-width;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      content: '';
      width: 0;
      height: 0;
      border-left: $tri-width solid transparent;
      border-right: $tri-width solid transparent;
      border-bottom: $tri-width solid $border;
      z-index: $langauage-selector-options;
    }

    &::before {
      position: absolute;
      top: -1 * ($tri-width - 1px);
      left: 50%;
      transform: translateX(-50%);
      display: block;
      content: '';
      width: 0;
      height: 0;
      border-left: ($tri-width - 1px) solid transparent;
      border-right: ($tri-width - 1px) solid transparent;
      border-bottom: ($tri-width - 1px) solid $white;
      z-index: 11;
    }
  }
}
</style>
