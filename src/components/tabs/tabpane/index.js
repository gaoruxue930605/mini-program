Component({
  relations: {
    '../index': {
      type: 'parent'
    }
  },
  properties: {
    label: {
      type: String
    },
    name: {
      type: Number | String
    }
  },
  data: {
    width: wx.getSystemInfoSync().windowWidth
  }
})
