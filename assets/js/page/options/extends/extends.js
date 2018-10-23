
var extendsObj = {
  updated: function() {
    console.log('我是扩展的updated')
  }
}

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
  extends: extendsObj,
  updated: function() {
    console.log('我是原生的updated')
  }
})
