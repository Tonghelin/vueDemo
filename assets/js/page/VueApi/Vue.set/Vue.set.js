
var outData = {
  count: 1,
  msg: 'outData'
}



var vueSet = new Vue({
  el: '#api_set',
  data: outData,
  methods: {
    onEnter:change
  }
})

function change() {
  console.log(outData.msg)
  outData.msg = '66662'
  // Vue.set(outData,'msg','12344');
  console.log(outData.msg)
}