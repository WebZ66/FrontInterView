# js基础

## js数据类型

基本数据类型 number string boolean undefined null

引用数据类型object 

es6新增了两个数据类型symbol symbol标识该值是唯一的，bigInt用来表示超出范围的数，number最大可表示2^53-1



TS：除了基础的几个类型，新增了void，void用于函数，表示该函数没返回值，不能return。enum枚举类型，有数字枚举，是递增的，也有字符串枚举。any类型，即任意类型，unknown类型，比如let a:unknown={} a.x会报错，而any类型不会，所以unknown更加安全。

对象类型：接口，数组类型，元组tuple。

泛型：其实就是只有调用的时候才知道传入一个什么类型的变量。优点类似于函数重载，但是不需要那么麻烦了

TS的装饰器：decorator。目前只能在ts中使用，需要tsconfig.json进行一个开启。常用于类、类的方法和属性中，其实就是在代码外多加了一层逻辑处理，重点是装饰器在代码运行前执行。



## typeof 

typeof null   ---object

typeof undefined   -undefined

typeof  function  function

这是因为js存储数据是以二进制方式进行存储的，字符串是001开头的，null和object都是以000开头的，而typeof就会把000开头的认为是object

  



## instanceof 

用来判断引用类型数据的数据类型。

原理：通过判断构造函数的原型是否出现在实例对象原型链上的任意位置



```
//传入构造函数和实例对象
function myInstanceof(obj, Fn) {
  let proto = Object.getPrototypeOf(obj)
  let prototype = Fn.prototype
  while (true) {
    if (proto == prototype) {
      return true
    }
    if (!proto) {
      return false
    }
    proto = Object.getPrototypeOf(proto)
  }
}
```



第三种判断数据类型 Object.prototype.toString.call({})



## null和undefined的区别

typeof null是Object  typeof undfined 是undefined

undefined和其他数字进行运算结果都是NaN

null和其他数字进行运算，它会被转化成0



## 0.1+0.2！==0.3

这是因为js存储数据都是以二进制存储的，而0.1和0.2转换成二进制都是一个无限不循环的数，进行加法运算自然不等于0.3。但是es6新增了Number.EPLISON，只要运算误差小于这个值，就返回true，认为相等





## 数据类型的转化

Number([5]) 数组里面单个数字，结果为转化为数字

parseInt('123f') 结果为123



！！强制转化为boolean类型，其实就是Boolean([]) true

只有undefined 、null、NaN、空串 、0 才是false



### 隐式类型转换即 ==比较

引用类型的数据和基本类型数据比较，引用类型会自动调用valueOf方法转化为基本类型数据。

null==0是错的，但是null与数字进行运算，会默认转化成0

undefined==0是错的，它是NaN

undefined==null 是对的

[]==0是对的 []会自动转化成0

false==0





## 如何判断一个对象是空对象

①
