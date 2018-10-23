// methods  函数的集几种调用方式



var app = new  Vue({
  el : '#app',
  data: {
    total: 1,
    num: Math.floor(Math.random()*100)
  },
  components: {
    'aaa':{
      template: `<div><p> <button>change</button></p> </div>`
    }
  },
  methods:{
    change: function(){
      this.total = this.total + this.num;
    }
  }
})