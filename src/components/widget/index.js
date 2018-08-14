Component({
  options: {
    multipleSlots: true
  },
  properties: {
    showMore: {
      type: Boolean,
      value: false
    },
    toUrl: {
      type: String
    },
    position: {
      type: String,
      value: 'space-between'
    }
  },
  methods: {
    toPage() {
      wx.navigateTo({
        url: `${this.properties.toUrl}`
      })
    }
  }
})
