<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <h2>👋 버튼을 눌러 토픽으로 이동하세요</h2>
      </div>
    </div>
    <div class="row" v-for="project in projects" :key="project.year">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <div class="link-box">
          <h3>{{ project.year }}</h3>
          <ul class="link-list">
            <li class="link-item" v-for="topic in project.topics" :key="topic">
              <Button class="h-40" :onClick="go">{{ topic }}</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/common/Button.vue'
export default {
  name: 'HomeView',
  components: { Button },
  data() {
    return {
      projects: [
        {
          year: 2022,
          topics: [
            'i18n',
            'datetime',
            'l10n',
            'asset-lazy-loading',
            'parallax-scroll',
            'vue-transition',
          ],
        },
        {
          year: 2023,
          topics: [],
        },
      ],
    }
  },
  methods: {
    go(event) {
      this.$router.push({ name: event.target.textContent })
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 14px;
  color: $secondary;
  margin-bottom: 4px;
}

h3 {
  font-size: 20px;
  color: $primary;
  margin-bottom: 4px;
}
.link {
  &-box {
    margin-bottom: 20px;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
</style>
