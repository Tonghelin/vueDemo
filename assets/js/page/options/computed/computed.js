// computed 选项

var app = new Vue({
  el: '#app',
  data: {
    price: 'hello world'
  },
  computed: {
    newPrice: function(){
      return this.price+'$'
    }
  }
})