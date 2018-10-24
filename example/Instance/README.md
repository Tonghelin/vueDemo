## 第1节：实例入门-实例属性

    Vue和Jquery.js一起使用
    
### 1、下载并引入jquery框架

下载可以去官网进行下载，我这里使用的版本是3.3.1，下载好后在需要的页面引入就可以了。当然你还有很多其它的方法引入jquery，只要可以顺利引入就可以了。

<script < type="text/javascript" src="../assets/js/jquery-3.3.1.min.js"></script>
试着作一个案例，在DOM被挂载后修改里边的内容。
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="../assets/js/vue.js"></script>
        <script type="text/javascript" src="../assets/js/jquery-3.1.1.min.js"></script>
        <title>Early Examples Demo</title>
    </head>
    <body>
        <h1>Early Examples Demo</h1>
        <hr>
        <div id="app">
            {{message}}
        </div>
        <script type="text/javascript">
            var app=new Vue({
                el:'#app',
                data:{
                    message:'hello Vue!'
                },
                //在Vue中使用jQuery
                mounted:function(){
                    $('#app').html('我是jQuery!');
                }
            })
        </script>
    </body>
    </html>
```
现在页面显示是：我是jQuery，而不是hello Vue了。

### 二、实例调用自定义方法
在Vue的构造器里我们写一个add方法，然后我们用实例的方法调用它。

构造器里的add方法：
```
    methods:{
        add:function(){
            console.log("调用了Add方法");
        }
    }
```
实例调用：

app.add();  
PS：我们有可能把app.add()的括号忘记或省略，这时候我们得到的就是方法的字符串，但是并没有执行，所以必须要加上括号。


## 第2节：实例方法  

### 一、$mount方法  
$mount方法是用来挂载我们的扩展的，我们先来复习一下扩展的写法。

这里我们作了jspang的扩展，然后用$mount的方法把jspang挂载到DOM上，我们也生成了一个Vue的实例，直接看代码。

``````
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <script type="text/javascript" src="../assets/js/vue.js"></script>
            <title>Examples Method Demo</title>
        </head>
        <body>
            <h1>Examples Method Demo</h1>
            <hr>
            <div id="app">
                {{message}}
            </div>
            <script type="text/javascript">
              var jspang = Vue.extend({
                  template:`<p>{{message}}</p>`,
                  data:function(){
                      return {
                          message:'Hello ,I am JSPang'
                      }
                  }
              })
              var vm = new jspang().$mount("#app")
            </script>
        </body>
    </html>
``````

这段代码我们在学习extends的时候已经写过一次，这里就不作过多解释了。

### 二、$destroy() 卸载方法   
用$destroy()进行卸载。

我写了一个button按钮，点击后卸载整个挂载。

```
    <p><button onclick="destroy()">卸载</button></p>
```
```
    
    function destroy(){
       vm.$destroy();
    }
```

PS:$destroy()后边必须要有括号，没有括号是无用的。

### 三、$forceUpdate() 更新方法
>   vm.$forceUpdate()  

### 四、$nextTick() 数据修改方法

当Vue构造器里的data值被修改完成后会调用这个方法，也相当于一个钩子函数吧，和构造器里的updated生命周期很像。
```
function tick(){
    vm.message="update message info ";
    vm.$nextTick(function(){
        console.log('message更新完后我被调用了');
    })
}
```


## 第3节：实例事件  
  实例事件就是在构造器外部写一个调用构造器内部的方法。这样写的好处是可以通过这种写法在构造器外部调用构造器内部的数据。

我们还是写一个点击按钮，持续加1的例子。  

### 一、$on 在构造器外部添加事件。  
```
    app.$on('reduce',function(){
        console.log('执行了reduce()');
        this.num--;
    });
```

    $on接收两个参数，第一个参数是调用时的事件名称，第二个参数是一个匿名方法。

如果按钮在作用域外部，可以利用$emit来执行。
```
    //外部调用内部事件
    function reduce(){
        app.$emit('reduce');
    }
```

### 二、$once执行一次的事件  
```
app.$once('reduceOnce',function(){
    console.log('只执行一次的方法');
    this.num--;
});
```

### 三、$off关闭事件
```
    //关闭事件
    function off(){
       app.$off('reduce');
    }
```

## 第4节：内置组件 -slot讲解
slot是标签的内容扩展，也就是说你用slot就可以在自定义组件时传递给组件内容，组件接收内容并输出。