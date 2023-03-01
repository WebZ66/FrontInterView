let _data = {
  name: '1',
  age: {
    scor: 1
  }
}
let data = new Proxy(_data, {
  set(target, key, value, receiver) {},
  get(target, key, receiver) {}
})
