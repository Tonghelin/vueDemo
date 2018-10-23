var app = new Vue({
  el: '#app',

})

// Vue.extend 的使用
var my_template = Vue.extend({
  template: `<div><p>{{msg}}</p><p>{{a}}</p></div>`,
  data: function() {
    return {
      msg: 'Hello World!!!'
    }
  },
  props: ['a']  // 这一章节的知识点在这
});

new my_template({
  propsData: {  // 这一章节的知识点在这
    a: 'propsData传递数据'
  }
}).$mount('hhh'); // 挂载上