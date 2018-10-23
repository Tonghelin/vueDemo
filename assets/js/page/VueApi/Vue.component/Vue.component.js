
// 全局定义组件方法
Vue.component('linth', {
  template: `<div><h1>Vue.component 组件</h1><span>需要放在vue实例对象 标签里面</span></div>`
});


var app = new Vue({
  el: '#vue_component',
  data: {
    msg: 'vue_component'
  },
  components: { //局部组件定义方法 在实例里面定义
    'aaaa': {
      template:`<h2>局部组件定义</h2>`
    }
  }
})


// components --- props
var app2 = new Vue({
  el: '#component_props',
  data: {
    msg: 'vue_component'
  },
  components: { //局部组件定义方法 在实例里面定义
    'bbb': {
      template:`<div><h2>组件的props传递参数</h2><span>用于接收父组件的数据</span><p>接收的数据是：{{data}}<br>使用v-bind接收实例data里的数据{{fromMsg}}</p></div>`,
      props: ['data','fromMsg']
    }
  }
})

