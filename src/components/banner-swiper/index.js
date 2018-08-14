Component({
  properties: {
    indicatorDots: {
      type: Boolean,
      value: true
    },
    indicatorActiveColor: {
      type: String,
      value: '#e9bf2d'
    },
    indicatorColor: {
      type: String,
      value: '#ffffff'
    },
    circular: {
      type: Boolean,
      value: true
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    interval: {
      type: Number,
      value: 3000
    },
    duration: {
      type: Number,
      value: 500
    },
    items: {
      type: Array,
      value: []
    }
  }
})
