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
                        <!--언어설정-->
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
    <aside>
      <!-- <Modal>
        <template v-slot:header>언어설정</template>
        <template v-slot:body></template>
      </Modal>
      <Modal>
        <template v-slot:header>로그아웃</template>
        <template v-slot:body></template>
      </Modal>
      <Shadow /> -->
    </aside>
  </div>
</template>

<script>
// import Modal from '@/components/common/Modal.vue'
// import Shadow from '@/components/common/Shadow.vue'

export default {
  name: 'hello-layout',
  // components: { Modal, Shadow },
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
