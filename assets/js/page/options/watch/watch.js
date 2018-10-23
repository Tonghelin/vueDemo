// watch 监控数据

var app = new Vue({
  el: '#app',
  data: {
    temperature: 20,
    use: '夹克长裙',
    newValue: null,
    oldValue: null
  },
  watch: {
    temperature: function (newValue, oldValue) {  // key 对应的是要监控的数据
      // 监控到数据改变后 做点什么
      console.log(newValue, oldValue);
      this.newValue = newValue;
      this.oldValue = oldValue;
    }
  },
  methods: {
    change: function() {
      this.temperature++;
    }
  }
})