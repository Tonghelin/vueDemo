// 原始构造器

// var app =  new Vue({
//   el: '#app',
//   data: {
//     msg: 'mixins 混入使用',
//     total: 1
//   },
//   methods: {
//     change: function() {
//       this.total++;
//     }
//   }
// })


// 接下来使用mixins混入

var useMixins = {
  updated: function() {
    console.log('数据改变了，混入成功')
    console.log('混入的先执行')
  }
}

Vue.mixin({
  updated: function() {
    console.log('这是全局混入的console')
  }
})

var app =  new Vue({
  el: '#app',
  data: {
    msg: 'mixins 混入使用',
    total: 1
  },
  methods: {
    change: function() {
      this.total++;
    }
  },

  updated: function() {
      console.log('原生的后执行')
  },
  mixins: [useMixins]
})
