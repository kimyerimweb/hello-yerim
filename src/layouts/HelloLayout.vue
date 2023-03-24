<template>
  <div>
    <header>
      <div class="gnb">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-md-12 col-lg-12">
              <div class="gnb-wrapper">
                <div class="gnb-left">
                  <h1 class="logo">
                    <a href="/"> Hello Yerim </a>
                  </h1>
                </div>
                <div class="gnb-right">
                  <nav class="gnb-nav">
                    <ul class="gnb-nav-list">
                      <li class="gnb-nav-item">
                        <LanguageSelector />
                      </li>
                      <li class="gnb-nav-item">
                        <!--로그인/로그아웃-->
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
  name: 'hello-layout',
  components: { LanguageSelector },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 32px;

  a {
    color: $dark;
    font-weight: $bold;

    &:hover,
    &:focus {
      color: $black;
    }
  }
}

.gnb {
  border-bottom: 1px solid $border;
  margin-bottom: 20px;

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  @include tablet {
    margin-bottom: 30px;

    &-wrapper {
      height: 80px;
    }
  }
}
</style>
