const behavior = Behavior({
  properties: {
    isCollect: {
      type: Boolean,
      value: false,
      observer(n) {
        if (n) this.setData({ isCollect: n })
      }
    }
  },
  data: {
    isCollect: false
  },
  methods: {
    onSelect(e) {
      console.log(this.properties.courseId)
      this.setData({
        isCollect: !this.data.isCollect
      })
    }
  }
})
export default behavior
