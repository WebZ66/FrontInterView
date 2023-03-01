/* 判断构造函数的原型是否出现在实例对象原型链上的任意位置 */
function myInstanceof(obj, Fn) {
  let prototype = Fn.prototype
  let proto = Object.getPrototypeOf(obj)
  while (true) {
    if (prototype == proto) {
      return true
    }
    if (!proto) {
      return false
    }
    proto = Object.getPrototypeOf(proto)
  }
}
