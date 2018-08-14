Component({
  properties: {
    // 媒体源
    videoSource: {
      type: String,
      observer(n) {
        if (!n) return
        this.setData({
          newSource: n
        })
      }
    },
    // 海报显示
    poster: {
      type: String
    },
    // 课程id
    courseId: {
      type: Number | String
    }
  },
  data: {
    newSource: '',
    source: '',
    isPlay: false
  },
  ready() {
    this.videoContext = wx.createVideoContext('videoPlayer', this)
  },
  methods: {
    onPlay() {
      this.setData({
        isPlay: true,
        source: this.data.newSource
      }, () => this.videoContext.play())
    }
  }
})
