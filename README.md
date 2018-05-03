# ImgModify.js
这是一款适用于PC的头像编辑JQ插件。
## 功能概述
可实现图片的预览、缩放、拖动、旋转及最终的裁剪生成功能。
## 兼容性
目前仅支持PC及Mac鼠标操作，不支持移动端触控操作。
- windows
- mac
## 更新日志
#### version 1
- API规范化。
- 基础的图像操作及裁剪功能。
## 快速上手
### HTML
```html
<div class="i-m-container">
    <div class="i-m-inner"></div>
</div>
```

### CSS
父容器需要是固定宽高，并且溢出为隐藏，ImgModify会使用父元素的宽高。
```css
.i-m-container {
    overflow: hidden;
    width: 724px;
    height: 604px;
}
.i-m-container .i-m-inner {
    
}

```

### js
```javascript
$('.i-m-inner').imgModify();
```
**注意：是在.i-m-inner上调用的。**
例子请移步[这里](http://www.baidu.com)。

## 文档
[API](http://www.baidu.com)
## 为什么会有这个项目
现在很多的应用和网站需要登录注册成为用户才能使用，而成为用户后的一个刚需就是设置资料和头像。但当我想要实现类似的效果的时候，却找不到这样一个插件，所以我就开发了一个，先是用在自己的项目中，后来抽了出来，就有了这个插件。
## TODO
[计划列表](http://www.baidu.com)  

如果你有好的建议，欢迎反馈给我
