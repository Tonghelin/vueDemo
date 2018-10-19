var v_for = new Vue({
  el: '#v_for',
  data: {
    msg: 'v-for实例',
    items: [1,2,3,4,5,6,7,8,9],
    items_2: [11,5,12,7,3,9,8,6,4],
    jsonData: [
      { name: 'vue指令v-for', year: 1998},
      { name: 'kestack', year: 2018},
      { name: 'json', year: 2008}
    ]
  },
  computed:{
    sortItems_2: function(){
      return this.items_2.sort(function (a, b) {
        return a>b;
      });
    },
    sortJsonData: function () {
      return sortJsonData(this.jsonData, 'year')
    }
}
});

function sortJsonData(arr, key) {
  return arr.sort(function (a, b) {
    return a[key] > b[key]
  })
}