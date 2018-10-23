var Lifecycle = new Vue({
  el: '#Lifecycle',
  data: {
    msg: '生命周期'
  },
  methods: {
    add: function() {
      console.log(123)
    }
  },
  beforeCreate: function() {
    console.log('组件创建之前执行')
  },
  created: function() {
    console.log('在实例创建完成后被立即调用')
  },
  beforeMount: function () {
    console.log('在挂载开始之前被调用')
  },
  mounted: function(){  // 使用场景---页面加载完毕，关闭等待提示
    console.log('挂载到实例上去之后调用')
  },
  beforeUpdate: function () {
    console.log('数据更新时调用')
  },
  updated: function () {
    console.log('数据更新后调用')
  }
})