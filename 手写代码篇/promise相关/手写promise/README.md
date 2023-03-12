# promise中finally的用法
finally：不管是执行.then()还是执行了.catch,最后都会执行finally里的回调函数

finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。

