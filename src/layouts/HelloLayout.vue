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

<style lang="scss">
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: $gnb-height-sm;
  background-color: $white;
  border-bottom: 1px solid $border;
  z-index: $gnb;

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $gnb-height-sm;
  }

  @include tablet {
    height: $gnb-height-md;

    &-wrapper {
      height: $gnb-height-md;
    }
  }
}

.content {
  $content-margin-top: 20px;
  margin-top: $gnb-height-sm + $content-margin-top;

  @include tablet {
    margin-top: $gnb-height-md + $content-margin-top;
  }
}
</style>
