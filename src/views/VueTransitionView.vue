<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <div
          class="playground1"
          v-observe-visibility="{
            callback: onChangeVisiblity1,
            intersection: { rootMargin: '-670px 0px 0px 0px' },
            // -(playground1-height + gnb-height - bar-height)
          }"
        >
          <div class="bar"></div>
          <div class="text">
            <transition name="fade">
              <h1 v-if="show1">Hello!</h1>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <div class="empty"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <div
          class="playground2"
          v-observe-visibility="{
            callback: onChangeVisiblity2,
            intersection: { rootMargin: '-680px 0px 0px 0px' },
            // -(playground1-height + gnb-height - bar-height)
          }"
        >
          <div class="jarallax-video">
            <transition name="fade">
              <div v-if="show2" class="text">
                <h3>sub title</h3>
                <h1>title</h1>
                <p>description</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <div class="empty"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { jarallax, jarallaxVideo } from 'jarallax'

export default {
  name: 'vue-transition',
  data() {
    return {
      show1: true,
      show2: true,
    }
  },
  methods: {
    onChangeVisiblity1(isVisible) {
      this.show1 = isVisible
    },
    onChangeVisiblity2(isVisible) {
      this.show2 = isVisible
    },
  },
  mounted() {
    jarallaxVideo()
    jarallax(document.querySelector('.jarallax-video'), {
      speed: 0,
      videoSrc:
        'mp4:https://v.ftcdn.net/05/80/37/09/700_F_580370944_VAxkeTCzQdwmXQ1cSMljp04QAdx7fjoe.mp4',
    })
  },
}
</script>

<style lang="scss" scoped>
$bar-height: 10px;
$playground-height: 600px;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(100px);
  transition: ease-in-out 0.2s;
  opacity: 0;
}
.playground1 {
  width: 100%;
  background-color: $blue;

  .bar {
    width: 100%;
    height: $bar-height;
    background-color: $red;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: $playground-height - $bar-height;

    h1 {
      font-size: 40px;
      color: $white;
    }
  }
}

.playground2 {
  .jarallax-video {
    width: 100%;
    height: $playground-height;

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: $playground-height;

      h3,
      h1,
      p {
        color: $white;
      }

      h3 {
        font-size: 30px;
      }

      h1 {
        font-size: 40px;
      }

      p {
        font-size: 20px;
      }
    }
  }
}

.empty {
  background-color: $blue-light;
  height: 500px;
}
</style>
