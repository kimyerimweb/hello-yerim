<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tempus tellus eu sapien tempor faucibus. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut enim massa,
          efficitur at euismod nec, gravida sit amet urna. Nam quis malesuada
          nisl. Mauris volutpat consequat lacus eget consectetur. Donec eget
          ipsum et ipsum ornare maximus id vel magna. In a ullamcorper dui. Duis
          eget mi commodo, malesuada quam ac, condimentum dui. Phasellus
          fermentum nisl sem. Praesent pulvinar tincidunt quam non varius. Sed
          dui ex, maximus quis mauris nec, dignissim sollicitudin lorem.
          Suspendisse feugiat ex eu ipsum interdum efficitur. Nam tincidunt vel
          lorem et tristique. Nam non velit vitae quam auctor molestie. Donec
          posuere cursus est vitae imperdiet. Vestibulum hendrerit eu mauris
          eleifend commodo. Donec tincidunt sodales turpis, et auctor urna
          ultricies vitae. Proin ut ipsum mi. Suspendisse eleifend metus nec ex
          tempus, a tempus elit vestibulum. Integer volutpat ac elit pulvinar
          hendrerit. Quisque eget pellentesque sapien. Mauris massa felis,
          dictum scelerisque euismod vel, mattis eget nulla. Pellentesque id
          lobortis libero, id hendrerit justo. Vivamus hendrerit lectus nec
          maximus ullamcorper. In pharetra dui elit. Aliquam erat volutpat.
          Pellentesque dignissim tempor arcu, sed volutpat dolor blandit nec.
          Proin bibendum rutrum maximus. Vestibulum blandit suscipit sapien,
          euismod scelerisque justo euismod quis. Morbi non ultrices lectus.
          Vivamus diam massa, ornare nec ex a, dignissim posuere mauris. Nunc
          pharetra non velit sed facilisis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Morbi nec eros
          feugiat, maximus tortor at, condimentum ipsum. Donec et lectus odio.
          Sed ligula felis, pretium non pharetra in, efficitur quis dui. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Cras ultrices, ligula nec iaculis pulvinar, libero
          mi luctus eros, ut vulputate ipsum ex ac nisl. Nullam sit amet lorem
          lacinia, tincidunt nulla quis, consequat lectus. Sed ac pellentesque
          ipsum. Praesent eget quam nunc. Morbi at metus non arcu consectetur
          vulputate. Nam rhoncus dui tincidunt ipsum maximus, et posuere massa
          feugiat. Ut id eros euismod, elementum leo gravida, blandit mauris.
          Phasellus diam dui, volutpat vel convallis a, sodales ut quam. Nullam
          egestas lectus id arcu imperdiet, non sollicitudin odio condimentum.
          Vivamus nulla urna, volutpat eget egestas quis, ultricies eget nibh.
          Ut sit amet efficitur dolor. Donec sagittis eros vitae iaculis
          tincidunt.
        </p>
        <img
          v-lazy="{
            src: 'https://as2.ftcdn.net/v2/jpg/00/97/34/11/1000_F_97341154_OViZm9lS6AoDzMYv4IGYYNENoUyeRJjf.jpg',
            loading: generatePlaceholderImage(5120, 3428),
          }"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tempus tellus eu sapien tempor faucibus. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut enim massa,
          efficitur at euismod nec, gravida sit amet urna. Nam quis malesuada
          nisl. Mauris volutpat consequat lacus eget consectetur. Donec eget
          ipsum et ipsum ornare maximus id vel magna. In a ullamcorper dui. Duis
          eget mi commodo, malesuada quam ac, condimentum dui. Phasellus
          fermentum nisl sem. Praesent pulvinar tincidunt quam non varius. Sed
          dui ex, maximus quis mauris nec, dignissim sollicitudin lorem.
          Suspendisse feugiat ex eu ipsum interdum efficitur. Nam tincidunt vel
          lorem et tristique. Nam non velit vitae quam auctor molestie. Donec
          posuere cursus est vitae imperdiet. Vestibulum hendrerit eu mauris
          eleifend commodo. Donec tincidunt sodales turpis, et auctor urna
          ultricies vitae. Proin ut ipsum mi. Suspendisse eleifend metus nec ex
          tempus, a tempus elit vestibulum. Integer volutpat ac elit pulvinar
          hendrerit. Quisque eget pellentesque sapien. Mauris massa felis,
          dictum scelerisque euismod vel, mattis eget nulla. Pellentesque id
          lobortis libero, id hendrerit justo. Vivamus hendrerit lectus nec
          maximus ullamcorper. In pharetra dui elit. Aliquam erat volutpat.
          Pellentesque dignissim tempor arcu, sed volutpat dolor blandit nec.
          Proin bibendum rutrum maximus. Vestibulum blandit suscipit sapien,
          euismod scelerisque justo euismod quis. Morbi non ultrices lectus.
          Vivamus diam massa, ornare nec ex a, dignissim posuere mauris. Nunc
          pharetra non velit sed facilisis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Morbi nec eros
          feugiat, maximus tortor at, condimentum ipsum. Donec et lectus odio.
          Sed ligula felis, pretium non pharetra in, efficitur quis dui. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Cras ultrices, ligula nec iaculis pulvinar, libero
          mi luctus eros, ut vulputate ipsum ex ac nisl. Nullam sit amet lorem
          lacinia, tincidunt nulla quis, consequat lectus. Sed ac pellentesque
          ipsum. Praesent eget quam nunc. Morbi at metus non arcu consectetur
          vulputate. Nam rhoncus dui tincidunt ipsum maximus, et posuere massa
          feugiat. Ut id eros euismod, elementum leo gravida, blandit mauris.
          Phasellus diam dui, volutpat vel convallis a, sodales ut quam. Nullam
          egestas lectus id arcu imperdiet, non sollicitudin odio condimentum.
          Vivamus nulla urna, volutpat eget egestas quis, ultricies eget nibh.
          Ut sit amet efficitur dolor. Donec sagittis eros vitae iaculis
          tincidunt.
        </p>
        <img
          v-lazy="{
            src: 'https://as2.ftcdn.net/v2/jpg/03/70/37/47/1000_F_370374720_wturDFcVdz6JU36d8tvc4OlNqY1Ni7XU.jpg',
            loading: generatePlaceholderImage(6000, 4000),
          }"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tempus tellus eu sapien tempor faucibus. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut enim massa,
          efficitur at euismod nec, gravida sit amet urna. Nam quis malesuada
          nisl. Mauris volutpat consequat lacus eget consectetur. Donec eget
          ipsum et ipsum ornare maximus id vel magna. In a ullamcorper dui. Duis
          eget mi commodo, malesuada quam ac, condimentum dui. Phasellus
          fermentum nisl sem. Praesent pulvinar tincidunt quam non varius. Sed
          dui ex, maximus quis mauris nec, dignissim sollicitudin lorem.
          Suspendisse feugiat ex eu ipsum interdum efficitur. Nam tincidunt vel
          lorem et tristique. Nam non velit vitae quam auctor molestie. Donec
          posuere cursus est vitae imperdiet. Vestibulum hendrerit eu mauris
          eleifend commodo. Donec tincidunt sodales turpis, et auctor urna
          ultricies vitae. Proin ut ipsum mi. Suspendisse eleifend metus nec ex
          tempus, a tempus elit vestibulum. Integer volutpat ac elit pulvinar
          hendrerit. Quisque eget pellentesque sapien. Mauris massa felis,
          dictum scelerisque euismod vel, mattis eget nulla. Pellentesque id
          lobortis libero, id hendrerit justo. Vivamus hendrerit lectus nec
          maximus ullamcorper. In pharetra dui elit. Aliquam erat volutpat.
          Pellentesque dignissim tempor arcu, sed volutpat dolor blandit nec.
          Proin bibendum rutrum maximus. Vestibulum blandit suscipit sapien,
          euismod scelerisque justo euismod quis. Morbi non ultrices lectus.
          Vivamus diam massa, ornare nec ex a, dignissim posuere mauris. Nunc
          pharetra non velit sed facilisis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Morbi nec eros
          feugiat, maximus tortor at, condimentum ipsum. Donec et lectus odio.
          Sed ligula felis, pretium non pharetra in, efficitur quis dui. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Cras ultrices, ligula nec iaculis pulvinar, libero
          mi luctus eros, ut vulputate ipsum ex ac nisl. Nullam sit amet lorem
          lacinia, tincidunt nulla quis, consequat lectus. Sed ac pellentesque
          ipsum. Praesent eget quam nunc. Morbi at metus non arcu consectetur
          vulputate. Nam rhoncus dui tincidunt ipsum maximus, et posuere massa
          feugiat. Ut id eros euismod, elementum leo gravida, blandit mauris.
          Phasellus diam dui, volutpat vel convallis a, sodales ut quam. Nullam
          egestas lectus id arcu imperdiet, non sollicitudin odio condimentum.
          Vivamus nulla urna, volutpat eget egestas quis, ultricies eget nibh.
          Ut sit amet efficitur dolor. Donec sagittis eros vitae iaculis
          tincidunt.
        </p>
        <img
          v-lazy="{
            src: 'https://as1.ftcdn.net/v2/jpg/04/74/47/84/1000_F_474478439_WUNKQraAmnGZSgBFhjVKYJWeQDz7jOGg.jpg',
            loading: generatePlaceholderImage(6000, 4000),
          }"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tempus tellus eu sapien tempor faucibus. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut enim massa,
          efficitur at euismod nec, gravida sit amet urna. Nam quis malesuada
          nisl. Mauris volutpat consequat lacus eget consectetur. Donec eget
          ipsum et ipsum ornare maximus id vel magna. In a ullamcorper dui. Duis
          eget mi commodo, malesuada quam ac, condimentum dui. Phasellus
          fermentum nisl sem. Praesent pulvinar tincidunt quam non varius. Sed
          dui ex, maximus quis mauris nec, dignissim sollicitudin lorem.
          Suspendisse feugiat ex eu ipsum interdum efficitur. Nam tincidunt vel
          lorem et tristique. Nam non velit vitae quam auctor molestie. Donec
          posuere cursus est vitae imperdiet. Vestibulum hendrerit eu mauris
          eleifend commodo. Donec tincidunt sodales turpis, et auctor urna
          ultricies vitae. Proin ut ipsum mi. Suspendisse eleifend metus nec ex
          tempus, a tempus elit vestibulum. Integer volutpat ac elit pulvinar
          hendrerit. Quisque eget pellentesque sapien. Mauris massa felis,
          dictum scelerisque euismod vel, mattis eget nulla. Pellentesque id
          lobortis libero, id hendrerit justo. Vivamus hendrerit lectus nec
          maximus ullamcorper. In pharetra dui elit. Aliquam erat volutpat.
          Pellentesque dignissim tempor arcu, sed volutpat dolor blandit nec.
          Proin bibendum rutrum maximus. Vestibulum blandit suscipit sapien,
          euismod scelerisque justo euismod quis. Morbi non ultrices lectus.
          Vivamus diam massa, ornare nec ex a, dignissim posuere mauris. Nunc
          pharetra non velit sed facilisis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Morbi nec eros
          feugiat, maximus tortor at, condimentum ipsum. Donec et lectus odio.
          Sed ligula felis, pretium non pharetra in, efficitur quis dui. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Cras ultrices, ligula nec iaculis pulvinar, libero
          mi luctus eros, ut vulputate ipsum ex ac nisl. Nullam sit amet lorem
          lacinia, tincidunt nulla quis, consequat lectus. Sed ac pellentesque
          ipsum. Praesent eget quam nunc. Morbi at metus non arcu consectetur
          vulputate. Nam rhoncus dui tincidunt ipsum maximus, et posuere massa
          feugiat. Ut id eros euismod, elementum leo gravida, blandit mauris.
          Phasellus diam dui, volutpat vel convallis a, sodales ut quam. Nullam
          egestas lectus id arcu imperdiet, non sollicitudin odio condimentum.
          Vivamus nulla urna, volutpat eget egestas quis, ultricies eget nibh.
          Ut sit amet efficitur dolor. Donec sagittis eros vitae iaculis
          tincidunt.
        </p>
        <img
          v-lazy="{
            src: 'https://as1.ftcdn.net/v2/jpg/00/21/77/06/1000_F_21770655_HiP3VSvW4TADJ0quaNq1JeJ5MTy2lkKs.jpg',
            loading: generatePlaceholderImage(5616, 3744),
          }"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tempus tellus eu sapien tempor faucibus. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut enim massa,
          efficitur at euismod nec, gravida sit amet urna. Nam quis malesuada
          nisl. Mauris volutpat consequat lacus eget consectetur. Donec eget
          ipsum et ipsum ornare maximus id vel magna. In a ullamcorper dui. Duis
          eget mi commodo, malesuada quam ac, condimentum dui. Phasellus
          fermentum nisl sem. Praesent pulvinar tincidunt quam non varius. Sed
          dui ex, maximus quis mauris nec, dignissim sollicitudin lorem.
          Suspendisse feugiat ex eu ipsum interdum efficitur. Nam tincidunt vel
          lorem et tristique. Nam non velit vitae quam auctor molestie. Donec
          posuere cursus est vitae imperdiet. Vestibulum hendrerit eu mauris
          eleifend commodo. Donec tincidunt sodales turpis, et auctor urna
          ultricies vitae. Proin ut ipsum mi. Suspendisse eleifend metus nec ex
          tempus, a tempus elit vestibulum. Integer volutpat ac elit pulvinar
          hendrerit. Quisque eget pellentesque sapien. Mauris massa felis,
          dictum scelerisque euismod vel, mattis eget nulla. Pellentesque id
          lobortis libero, id hendrerit justo. Vivamus hendrerit lectus nec
          maximus ullamcorper. In pharetra dui elit. Aliquam erat volutpat.
          Pellentesque dignissim tempor arcu, sed volutpat dolor blandit nec.
          Proin bibendum rutrum maximus. Vestibulum blandit suscipit sapien,
          euismod scelerisque justo euismod quis. Morbi non ultrices lectus.
          Vivamus diam massa, ornare nec ex a, dignissim posuere mauris. Nunc
          pharetra non velit sed facilisis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Morbi nec eros
          feugiat, maximus tortor at, condimentum ipsum. Donec et lectus odio.
          Sed ligula felis, pretium non pharetra in, efficitur quis dui. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Cras ultrices, ligula nec iaculis pulvinar, libero
          mi luctus eros, ut vulputate ipsum ex ac nisl. Nullam sit amet lorem
          lacinia, tincidunt nulla quis, consequat lectus. Sed ac pellentesque
          ipsum. Praesent eget quam nunc. Morbi at metus non arcu consectetur
          vulputate. Nam rhoncus dui tincidunt ipsum maximus, et posuere massa
          feugiat. Ut id eros euismod, elementum leo gravida, blandit mauris.
          Phasellus diam dui, volutpat vel convallis a, sodales ut quam. Nullam
          egestas lectus id arcu imperdiet, non sollicitudin odio condimentum.
          Vivamus nulla urna, volutpat eget egestas quis, ultricies eget nibh.
          Ut sit amet efficitur dolor. Donec sagittis eros vitae iaculis
          tincidunt.
        </p>
        <img
          v-lazy="{
            src: 'https://as2.ftcdn.net/v2/jpg/02/14/46/61/1000_F_214466160_WcqtXXVEnkCHTfBjiy7BhMLV4dEE6mHS.jpg',
            loading: generatePlaceholderImage(5791, 2951),
          }"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tempus tellus eu sapien tempor faucibus. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut enim massa,
          efficitur at euismod nec, gravida sit amet urna. Nam quis malesuada
          nisl. Mauris volutpat consequat lacus eget consectetur. Donec eget
          ipsum et ipsum ornare maximus id vel magna. In a ullamcorper dui. Duis
          eget mi commodo, malesuada quam ac, condimentum dui. Phasellus
          fermentum nisl sem. Praesent pulvinar tincidunt quam non varius. Sed
          dui ex, maximus quis mauris nec, dignissim sollicitudin lorem.
          Suspendisse feugiat ex eu ipsum interdum efficitur. Nam tincidunt vel
          lorem et tristique. Nam non velit vitae quam auctor molestie. Donec
          posuere cursus est vitae imperdiet. Vestibulum hendrerit eu mauris
          eleifend commodo. Donec tincidunt sodales turpis, et auctor urna
          ultricies vitae. Proin ut ipsum mi. Suspendisse eleifend metus nec ex
          tempus, a tempus elit vestibulum. Integer volutpat ac elit pulvinar
          hendrerit. Quisque eget pellentesque sapien. Mauris massa felis,
          dictum scelerisque euismod vel, mattis eget nulla. Pellentesque id
          lobortis libero, id hendrerit justo. Vivamus hendrerit lectus nec
          maximus ullamcorper. In pharetra dui elit. Aliquam erat volutpat.
          Pellentesque dignissim tempor arcu, sed volutpat dolor blandit nec.
          Proin bibendum rutrum maximus. Vestibulum blandit suscipit sapien,
          euismod scelerisque justo euismod quis. Morbi non ultrices lectus.
          Vivamus diam massa, ornare nec ex a, dignissim posuere mauris. Nunc
          pharetra non velit sed facilisis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Morbi nec eros
          feugiat, maximus tortor at, condimentum ipsum. Donec et lectus odio.
          Sed ligula felis, pretium non pharetra in, efficitur quis dui. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Cras ultrices, ligula nec iaculis pulvinar, libero
          mi luctus eros, ut vulputate ipsum ex ac nisl. Nullam sit amet lorem
          lacinia, tincidunt nulla quis, consequat lectus. Sed ac pellentesque
          ipsum. Praesent eget quam nunc. Morbi at metus non arcu consectetur
          vulputate. Nam rhoncus dui tincidunt ipsum maximus, et posuere massa
          feugiat. Ut id eros euismod, elementum leo gravida, blandit mauris.
          Phasellus diam dui, volutpat vel convallis a, sodales ut quam. Nullam
          egestas lectus id arcu imperdiet, non sollicitudin odio condimentum.
          Vivamus nulla urna, volutpat eget egestas quis, ultricies eget nibh.
          Ut sit amet efficitur dolor. Donec sagittis eros vitae iaculis
          tincidunt.
        </p>
        <div class="video-wrapper">
          <p>Video Time!!</p>
          <video
            ref="video"
            v-observe-visibility="{
              callback: playOrPauseVideo,
              intersection: { rootMargin: '0px 0px 20% 0px' },
            }"
            :poster="generatePlaceholderImage(1920, 1080)"
            type="video/mp4"
            muted
            loop
            playsinline
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssetLazyLoading',
  methods: {
    generatePlaceholderImage(width, height) {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      canvas.width = width
      canvas.height = height
      context.fillStyle = '#aaaaaa'
      context.fillRect(0, 0, canvas.width, canvas.height)

      return canvas.toDataURL()
    },
    playVideo() {
      const video = this.$refs.video
      if (video.src === '') {
        video.src =
          'https://v.ftcdn.net/05/80/37/09/700_F_580370944_VAxkeTCzQdwmXQ1cSMljp04QAdx7fjoe.mp4'
      }
      video.play()
    },
    pauseVideo() {
      const video = this.$refs.video
      video.pause()
    },
    playOrPauseVideo(isVisible) {
      if (isVisible) {
        this.playVideo()
      } else {
        this.pauseVideo()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
img,
video {
  width: 100%;
}
</style>
