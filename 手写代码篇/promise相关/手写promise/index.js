class Promise {
  constructor(executor) {
    this.promiseStatus = 'pending'
    this.promiseValue = null
    this.callbacks = []
    let _this = this
    executor(resolve, reject)
    /* 
    注意resolve不是自己调用的
    */
    function resolve(data) {
      if (_this.promiseStatus != 'pending') return
      _this.promiseStatus = 'fulfilled'
      _this.promiseValue = data
      if (_this.callbacks.length) {
        _this.callbacks.forEach(item => {
          item.onResolved()
        })
      }
    }
    function reject() {}
  }
  then(onResolved, onRejected) {
    let self = this
    //.then也会返回promise，如果回调函数里是正常的number字符串等数据，直接返回成功的
    return new Promise((resolve, reject) => {
      if (this.promiseStatus == 'fulfilled') {
        try {
          //直接调用回调函数
          let result = onResolved(this.promiseValue)
          if (result instanceof Promise) {
            result.then(
              v => {
                resolve(v)
              },
              r => {
                reject(r)
              }
            )
          } else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }
      if (this.promiseStatus == 'pending') {
        this.callbacks.push({
          onResolved: function () {
            let res = onResolved(self.promiseValue)
            try {
              //直接调用回调函数
              let result = onResolved(this.promiseValue)
              if (result instanceof Promise) {
                result.then(
                  v => {
                    resolve(v)
                  },
                  r => {
                    reject(r)
                  }
                )
              } else {
                resolve(result)
              }
            } catch (error) {
              reject(error)
            }
          },
          onRejected: function () {
            try {
              //直接调用回调函数
              let result = onRejected(this.promiseValue)
              if (result instanceof Promise) {
                result.then(
                  v => {
                    resolve(v)
                  },
                  r => {
                    reject(r)
                  }
                )
              } else {
                resolve(result)
              }
            } catch (error) {
              reject(error)
            }
          }
        })
      }
    })
  }
}
