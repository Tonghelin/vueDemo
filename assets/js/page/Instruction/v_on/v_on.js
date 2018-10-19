var v_on = new Vue({
  el: '#v_on',
  data: {
    msg: 'v-on 指令',
    total: 6,
    inputNum: 2
  },
  methods: {
    added: function() {
      return this.total++;
    },
    subtract: function() {
      return this.total--;
    },
    onEnter: function() {
      this.total = this.total+ parseInt(this.inputNum);
    }
  }
})