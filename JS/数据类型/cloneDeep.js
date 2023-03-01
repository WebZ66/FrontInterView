function cloneDeep(obj) {
  if (typeof obj != 'object' || obj == null) {
    return obj
  }
  //如果是正则
  if (obj instanceof RegExp) return new RegExp(obj)
  let newObj = Array.isArray(obj) ? [] : {}
  clone(newObj, obj)
  function clone(newObj, oldObj) {
    for (let i in oldObj) {
      if (oldObj[i] instanceof Array) {
        newObj[i] = []
        clone(newObj[i], oldObj[i])
      } else if (oldObj[i] instanceof Object) {
        newObj[i] = {}
        clone(newObj[i], oldObj[i])
      } else {
        newObj[i] = oldObj[i]
      }
    }
  }
  return newObj
}
var obj1 = {
  a: 1,
  b: { f: { g: 1 } },
  c: [1, 2, 3]
}
let obj2 = cloneDeep(obj1)
console.log(obj2)