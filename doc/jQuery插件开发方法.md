# jQuery插件开发方法总结
## 开发模式
jQuery插件开发方式主要有三种
- 通过 $.extend() 扩展jQuery
- 通过$.fn.yourPluginName 添加新的方法
- 通过$.widget() 应用jQuery UI的部件工厂方式创建。

## 模式对比
### $.extend()
这是开发jQuery插件最简单的方式，适用于开发静态方法，不涉及DOM元素。例如开发数组去重方法
  
开发及调用示例如下：
```javascript
$.extend({
    delRepeat: function(arr) {
        //  step1 判断参数是否是数组
        var isArr = false;
        if(!arr){ return arr};
        if(typeof arr.isArray === 'function'){
            isArr = Array.isArray(arr);
        }else {
            isArr = Object.prototype.toString.call(arr) === '[object Array]';
        }
        if(isArr){
            //  step2 是数组，去重
            var result = [];
            var item;
            for(var i = 0; i < arr.length; i++){
                item = arr[i];
                if(arr.indexOf(item) === i){
                    result.push(item);
                }
            }
            return result;
            
        }else {
            return arr;
        }
    }
})

var arrNew = $.delRepeat([2,4,4,5,7,9]);   //  调用

```
上面的代码，通过$.extend()向jQuery添加了一个delRepeat方法，并使用$调用，比较简单，可以在程序中任何地方调用。

### $.fn.yourPluginName
这是开发jQuery插件最常用的方式，可以将插件运作于调用元素的身上，适用于开发常用的Dom元素调用的插件。例如开发元素文字全选功能  

开发及调用方法如下：
- 基础开发
```javascript
$.fn.selectAll = function() {
    var el = this[0];
    var range;
    if (window.getSelection && document.createRange) {
        var selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(el);
        selection.removeAllRanges();
        selection.addRange(range);
    } else if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}

$('input.search-input').selectAll();   //  调用
```
在插件名字定义的这个函数内部，this指向调用该方法的jQuery元素集合，该调用示例中，`this === $('input.search-input')`;  

- 链式调用  

为了在使用的时候更加方便，要继续支持链式调用，即方法的作用如果不是返回特定的值时，就将this返回出去。

```javascript
$.fn.selectAll = function() {
    var el = this[0];
    var range;
    if (window.getSelection && document.createRange) {
        //  参考上文...
    } else if (document.body.createTextRange) {
        //  参考上文...
    }
    //  返回this，以支持链式调用
    return this;
}

```

- 接收参数

为使用者提供参数传入，使插件更加好用丰富亲和，使用者可以传入自己的参数来获取想要的效果。如果使用者不传参数，插件内要有默认参数供显示。  
默认参数和参数传入的结合通常使用$.extend()方法，$.extend()会将后者存在的属性覆盖前者，后者不存在的属性使用前者。
