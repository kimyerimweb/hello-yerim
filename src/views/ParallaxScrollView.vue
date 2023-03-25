<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <div class="jarallax-video">
          <div class="jarallax-text">
            <h3 class="text-white">sub title</h3>
            <h1 class="text-white">title</h1>
            <h1 class="text-white">afterTop: {{ afterTop }}</h1>
            <h1 class="text-white">
              visiblePercent: {{ Math.round(visiblePercent) }}
            </h1>
            <p class="text-white">description</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <div class="bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { jarallax, jarallaxVideo } from 'jarallax'

export default {
  name: 'ParallaxScroll',
  data() {
    return {
      afterTop: 0,
      visiblePercent: 100,
    }
  },
  mounted() {
    const jarallaxText = document.querySelector('.jarallax-text')
    const threshold = 0.6
    jarallaxVideo()
    const vueElement = this
    jarallax(document.querySelector('.jarallax-video'), {
      speed: 0,
      videoSrc:
        'mp4:https://v.ftcdn.net/05/80/37/09/700_F_580370944_VAxkeTCzQdwmXQ1cSMljp04QAdx7fjoe.mp4',
      onScroll(calculations) {
        const { visiblePercent, afterTop } = calculations

        vueElement.afterTop = afterTop
        vueElement.visiblePercent = visiblePercent * 100
        const slope = 1 / Math.pow(1 - threshold, 2)
        jarallaxText.style.opacity =
          visiblePercent > threshold
            ? slope * Math.pow(visiblePercent - threshold, 2)
            : 0
        jarallaxText.style.transform = `translateY(${afterTop * 1.2}px)`
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.text-white {
  color: $white;
}

.jarallax-text {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h3,
p {
  font-size: 30px;
}

h1 {
  font-size: 40px;
}

.bg {
  height: 1000px;
  background-color: $blue-light;
}
.jarallax-video {
  height: 590px;
}
</style>
