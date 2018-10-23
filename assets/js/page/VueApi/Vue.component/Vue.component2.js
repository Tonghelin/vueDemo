
//  定义外部组件
var aaaComponent = {
  template:`<h2>引用外部定义的组件</h2>`
}


var app = new Vue({
  el: '#vue_component',
  data: {
    msg: 'vue_component'
  },
  components: {
    'aaa': aaaComponent // 引用外部组件
  }
})


//  父子组件 使用

var cccComponent = {
  template:`<div><h3>我是子组件</h3></div>`
}

var bbbComponent = {
  template:`<div><h2>我是父组件</h2><ccc></ccc></div>`,
  components: { // 在父组件里面再注册子组件，以供父组件使用
    ccc : cccComponent
  }
}

var app2 = new Vue({
  el: '#vue_component2',
  data: {
    msg: 'vue_component'
  },
  components: {
    'bbb': bbbComponent // 引用外部组件
  }
})