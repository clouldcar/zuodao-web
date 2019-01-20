import dayjs from 'dayjs'

export default {
  methods: {
    navigate (name) {
      this.$router.push(name)
    },
    dateFormat (datetime) {
      return dayjs(datetime).format('YYYY MM-DD')
    }
  }
}
