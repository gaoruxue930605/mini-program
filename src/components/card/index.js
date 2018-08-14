import behaviors from '../behavior'
Component({
  behaviors: [behaviors],
  properties: {
    courseId: {
      type: String | Number
    },
    imgUrl: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    price: {
      type: Number
    },
    // score: {
    //   type: Number,
    //   value: 0,
    //   observer(n) {
    //     if (!n) return
    //     const starWidth = (n / 5) * 168
    //     this.setData({
    //       starWidth
    //     })
    //   }
    // },
    view: {
      type: Number,
      value: 0
    }
  },
  data: {
    // 评分star控制
    starWidth: 0
  },
  methods: {
    toDetail(e) {
      wx.navigateTo({
        url: `courseDetail?courseId=${this.properties.courseId}`
      })
    }
  }
})
