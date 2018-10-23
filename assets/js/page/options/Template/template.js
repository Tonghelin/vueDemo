var template =  new Vue({
  el: '#template',
  data: {
    msg: 'template'
  },
  // 使用 ``
  // template: `
  //   <h1>Template模版写法一</h1>
  // `

  // 使用标签
  // template: '#aaa'
  //写法三 使用script标签  好处可以引入外部模版
  template: '#bbb'
})