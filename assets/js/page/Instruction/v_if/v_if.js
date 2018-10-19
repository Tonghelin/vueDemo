var v_if = new Vue({
  el: '#v_if',
  data: {
    msg: 'v-if指令',
    isShow: true
  },
  methods: {
    show: function () {
      this.isShow = false;
      alert(123)
    }
  }
})