# 目录 Instruction --- 内部指令学习

```
    v-if & v-show      // v-if: false 组件不渲染 true 组件渲染 v-show 组件渲染，false组件显示，true组件隐藏
    v-for       //
    v-text & v-html     //
    v-on        //  v-on:click="added" 简写   @click="added"  还可以这样 v-on:mouseout="function"
    v-model      // 绑定数据源（双向数据绑定） 多用在表单
    v-bind    // 属性绑定

    v-pre  // 显示原始 Mustache 标签
    v-cloak  // 渲染完成后才显示 解决{{msg}}闪现问题
    v-once   // 只渲染一次

```

```
    var v_for = new Vue({
      el: '#v_for',
      data: {
        msg: 'v-for实例',
        items: [1,2,3,4,5,6,7,8,9],
        items_2: [1,5,2,7,3,9,8,6,4]
      },
      computed:{  // 在输出数据之前执行
        sortItems_2: function(){ // key不能与data里面的相同
          return this.items_2.sort(function (a, b) {
            return a>b;
          });
        }
      }
    });
```

