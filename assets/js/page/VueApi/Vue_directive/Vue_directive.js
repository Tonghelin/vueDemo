/**
 * @desc Vue.directive 自定义指令
 * @author Linth
 * @date 2018-10-21 13:19:30
*/

// 第一种方法
// Vue.directive('abc', function (el,binding,vnode) {
//       el.style.color = binding.value;
//       console.log(binding.name)
//   });


var V_directive = new Vue({
  el: '#api_directive',
  data: {
    msg: '1243',
    abc: 'red'
  },
  // 第二种方法
  // directives: { // 注册局部指令，组件中也接受一个 directives 的选项
  // 传入对象，使用钩子函数
  //   "abc": {
  //     inserted : function (el,binding,vnode) {
  //       el.style.color = binding.value
  //     }
  //   }
  //  使用函数
  //  使用函数
  //   "abc":function (el,binding,vnode) {
  //     el.style.color = binding.value;
  //     console.log(el)
  //     console.log('使用函数')
  //   }
  // }
})