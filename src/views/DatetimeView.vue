<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-md-12 col-lg-12">
        <div class="datetimes">
          <h2 class="title">DateTime</h2>
          <ul>
            <li class="date">
              <Tag class="gray">DATE</Tag>
              <span>{{ $d(new Date(), 'date') }}</span>
            </li>
            <li class="time">
              <Tag class="gray">TIME</Tag>
              <span>{{ $d(new Date(), 'time') }}</span>
            </li>
            <li class="datetime">
              <Tag class="gray">DATETIME</Tag>
              <span>{{ $d(new Date(), 'dateTime') }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-md-12 col-lg-12">
          <div class="calendar">
            <h2>Calendar</h2>
            <VDatePicker
              :value="date"
              :locale="language"
              :min-date="new Date()"
              :timezone="timezone"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VDatePicker from 'v-calendar/lib/components/date-picker.common'
import Tag from '@/components/common/Tag.vue'

export default {
  name: 'datetime-view',
  components: { VDatePicker, Tag },
  data() {
    return {
      date: null,
      timezone: 'UTC',
      language: this.$cookies.get('language'),
    }
  },
  watch: {
    '$i18n.locale'(language) {
      this.language = language
    },
  },
}
</script>

<style lang="scss" scoped>
.datetimes,
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.datetimes {
  margin: 0 auto 30px;

  ul {
    padding: 20px;
    border-radius: 8px;
    background-color: $blue-light;
    li {
      margin-bottom: 4px;
    }
  }
}
.calendar {
  margin: 0 auto;
}

.title {
  font-size: 30px;
}

span {
  font-size: 14px;
  color: $primary;
  margin-left: 4px;
}
</style>
