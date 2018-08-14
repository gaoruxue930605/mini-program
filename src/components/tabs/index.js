Component({
  relations: {
    './tabpane/index': {
      type: 'child',
      linked(target) {
        // target是该节点实例对象，触发在该节点attached生命周期之后
        this.pans.push(target.properties)
      }
    }
  },
  properties: {
    activTab: {
      type: Number | String,
      observer(n) {
        this.setData({
          currentSelect: n
        })
      }
    }
  },
  created() {
    this.pans = []
    this.animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease'
    })
  },
  data: {
    tabPans: [],
    currentSelect: '',
    width: wx.getSystemInfoSync().windowWidth * 2,
    animationData: {},
    bar: {
      width: 0,
      left: 0
    }
  },
  ready() {
    if (this.properties.activTab !== 0 && !this.properties.activTab) {
      this.setData({
        currentSelect: this.pans[0].name
      })
    }
    this.setData(
      {
        tabPans: this.pans,
        width: this.data.width * (this.pans.length + 1),
        animationData: this.animation.export()
      },
      this.setNavBar
    )
  },
  methods: {
    onSelect(e) {
      const { dataset } = e.currentTarget
      const { index } = dataset
      if (this.data.currentSelect === dataset.name) return
      this.setData(
        {
          currentSelect: dataset.name,
          animationData: this.setPane(index)
        },
        this.setNavBar
      )
      this.triggerEvent('onSelect', {...dataset})
    },
    setNavBar() {
      const query = this.createSelectorQuery()
      const label = query.select('.tab-nav__item__active')
      label
        .boundingClientRect(rect => {
          this.setData({
            bar: {
              width: rect.width - 64,
              left: 32 + rect.width * rect.dataset.index
            }
          })
        })
        .exec()
    },
    setPane(index) {
      const width = wx.getSystemInfoSync().windowWidth
      const left = -(width * index)
      this.animation.translateX(left).step()
      return this.animation.export()
    }
  }
})
