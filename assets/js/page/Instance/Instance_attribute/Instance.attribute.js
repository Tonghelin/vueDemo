var app = new Vue({
  el: '#app',
  data: {
    msg: '引入jquery'
  },
  mounted : function() {
    // 挂载完成才能引入jquery
    $('#app').html('这是引入的jquery')
  },
  methods: {
    add: function () {
      console.log('调用了构造器方法')
    }
  }
})

app.add();