# HTML

## src和href的区别

src主要用于script标签，加载外部的js脚本，href常配合link标签使用用于加载css资源，也用于a超链接标签进行跳转



## HTML语义化的了解

H5新增了一系列的语义化标签，如<nav> <foot> <head> <aside>,优点：使得代码结构看起来更加完整，有利于开发者维护代码。②有利于提高搜索引擎的seo，即有利于搜索引擎识别网站，提高网站的搜索排名



## script标签defer和async的区别

因为浏览器的GUI线程和js引擎线程是互斥的，如果没有defer或者async，浏览器解析渲染页面的时候遇到了script标签，就会中断当前页面的渲染，转向加载执行对应的js脚本，就会导致渲染阻塞现象的出现。因此可以添加defer和async属性

如果浏览器解析渲染页面的时候遇到了带有defer属性的script标签，它不会中断当前页面的渲染，会并行的下载对应的js脚本，但是脚本加载完毕后，不会立即执行，而是等页面渲染结束后，再按照加载顺序依次执行



如果解析渲染页面时，遇到了带有async属性的script标签，它也不会中断当前页面的渲染，会并行的下载js脚本，但是等js脚本下载结束后，会中断渲染，立即执行







## 常用的meta元标签

```HTML
<meta name='viewport' content='' > 适配移动端
<meta http-equiv='content-security-policy'>白名单
```



## 移动端300ms点击延迟问题

这是因为最初的移动端，有个双击缩放的功能，用户点击一次后，无法判断下一次点击是为了缩放还只是点击。因此出现了300ms的延迟，需要300ms后才能触发对应的点击事件。

解决办法：FastClick，监听移动端的touchend事件，它是先于click事件触发的，然后自定义一个事件来模拟点击事件，最后把300ms后的点击事件取消掉



## H5的更新

①H5新增了语义化标签，使得代码结构更加完整，便于开发者维护，有利于搜索引擎的seo，即搜索引擎识别网站，提高网站的搜索排名

②H5新增了音视频标签 video ，audio，通过source标签来导入外界的音视频资源

③H5新增了两种客户端存储方式，sessionStorage和localStorage，sessionStorage存储的数据关闭浏览器后会消失，localStorage的不会消失。可以通过StorageEvent事件实现一个页面修改了storage存储的数据，另外一个打开的同源页面能检测到。而vuex不可以

③新增了获取DOM元素的方式,选择器方式，document.querySelector('')

④新增了websocket协议，双向通信。由http和tcp基础上升级来的，只需要一次握手即可建立持久性链接，且没有跨域限制。客户端跨域主动推送信息给服务端，服务端也可以推送客户端

⑤新增了drag拖拽事件



## WebSocket

是h5新增的一种应用层全双工通信协议，由http和tcp的基础上升级而来，只需要一次握手，即可建立持久性链接，且无跨域限制



## WebWorker

因为js是单线程的，同一事件只能处理一个任务，但为了更好的发挥浏览器的多核效果，便创造了WebWorker。webworker是独立于js主线程外的一个独立的线程，它不会影响到js主线程的执行，可以将一些耗时很长的计算任务交给他，待完成后通过postMessage传递给主线程



## Iframe

在当前document中创造一个小型的内嵌的文档对象，这两个文档对象互不干扰，可以并行的下载js脚本



## documentFragment

类似于document文档对象，可以添加或删除节点，用来模拟虚拟DOM。它最大的特点是不算做真实DOM的一部分，对它进行增加或删除节点的操作不会影响真实DOM的改变。当documentFragment插入到document中，实际上是将其子节点一次性插入到真实DOM



## svg和canvas的区别

svg是矢量的，基于XML进行绘制，svg图片可以看作一个对象，如果对象上某个属性发生改变，那么浏览器会自动重现图像。svg不依赖像素，所以即使放大，图片也不会失帧，最适合需要大规模渲染的地方，即地图，放大也不会失帧。

canvas是H5新增的画布，是基于js动态绘制的，基于像素进行逐个渲染，当图片位置发生改变，需要逐个像素的进行重现绘制，依赖于分辨率，但能以jpg方式保存





# CSS

## 盒模型

css盒模型：标准盒模型   盒子实际总宽度=border+padding+width+margin

怪异盒模型：实际总宽度  width=border+paddding+content+margin



### margin 负值问题

margin-top:-20px 会影响自身向上移动，同时底下盒子也会向上移动

margin-bottom:-20px 自身不会移动，但是会影响到下面盒子向上移动

left：自身会，右侧盒子也会

right：自身不会，影响右侧盒子



## BFC 块级格式化上下文

是一个独立的布局环境，可以理解为一个独立的容器，容器内部的布局不会受到外界布局的影响

作用：将上下两个div包裹在不同的BFC中，可以解决margin重叠问题。可以解决父元素高度塌陷问题。

触发条件：position：absolute、fixed。float不为none、overflow:hidden,display:inline-block|flex



## z-index:auto和z-index：0

后出现的覆盖前面的





## requestAnimationFrame

告诉浏览器你需要执行一个动画，在浏览器下一次重绘之前调用指定的更新函数来更新这个动画。

优点：解决了定时器时间间隔不稳定的问题，因为js是单线程的，基于执行栈执行。定时器是宏任务，计时结束以后，才会将回调函数推入到宏任务队列中，需要等待执行栈空，且微任务队列执行完才会执行，这就导致了误差。而requestAnimationFrame它的时间间隔是固定的，一般16.7ms刷新一次调用一次回调函数，其自动实现了节流效果。

②对DOM进行批量处理，减少了DOM操作。rqaf将每一帧中的DOM操作集中起来，放在一次回流或者重绘中完成。

③对隐藏或不可见的元素是不会处理的，提高了性能



## flex属性

flex-direction:row|column 设置主轴和侧轴  row即水平方向为主轴

flex-wrap:wrapped 是否换行

flex-flow: 是flex-direction和flex-wrap的缩写

justify-content:弹性项目在主轴上的排列方向

align-items：侧轴上的排列方向

align-contents：弹性项目换行后，该属性生效



弹性项目的属性:

flex-grow:弹性项目的放大比例 默认为0

flex-shrink:弹性项目的缩小比例 默认为1

flex-basis: 默认 auto 项目占据空间后，主轴的剩余空间。

flex:1 实际上就是1 1 0% 即占据主轴剩余的所有空间





## 动画效果

c3通过@keyframes 其中可以通过百分比来定义动画过程

也可以通过from to来定义



transform  主要用于给元素变换，配合transition过度可以实现变换效果。transform有个优点，它只会引起浏览器的重绘，不会导致重排，所以尽量少用定位，多用transform



em相对于自身的字体大小，如果没有定义，那么基础父元素的字体大小。

rem相对于html根元素的字体大小





## 竖直方向的padding和margin如果是百分比

那么它依赖于的是父元素的宽度即width

父元素width:300px  子元素margin-top:20% 那么实际是60px
