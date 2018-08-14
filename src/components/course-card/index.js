import behaviors from '../behavior'
Component({
  behaviors: [behaviors],
  properties: {
    title: {
      type: String
    },
    courseId: {
      type: String | Number
    },
    price: {
      type: String | Number
    },
    views: {
      type: String | Number
    }
  },

  methods: {
  }
})
