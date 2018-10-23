
//  定义外部组件
var aaaComponent = {
  template:`<h2>当前显示的是aaaComponent组件</h2>`
}
var bbbComponent = {
  template:`<h2 >当前显示的是bbbComponent组件</h2>`
}
var cccComponent = {
  template:`<h2>当前显示的是cccComponent组件</h2>`
}

var app = new Vue({
  el: '#vue_component',
  data: {
    msg: 'vue_component',
    whoShow: 'bbb'
  },
  components: {
    'aaa': aaaComponent, // 引用外部组件
    'bbb': bbbComponent,
    'ccc': cccComponent
  },
  methods: {
    change: function() {
      this.whoShow = 'aaa'
    }
  }
})