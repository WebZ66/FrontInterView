const Koa = require('koa')
const app = new Koa()
const serve = new Koa()
const Router = require('koa-router')
const router = new Router()
router.get('/api', ctx => {
  const query = ctx.query
  const funcName = query.callback
  let data = {
    name: 'zds'
  }
  ctx.body = `${funcName}(${JSON.stringify(data)})`
})
const Static = require('koa-static')
app.use(Static(__dirname + '/public'))
serve.use(router.routes())

app.listen(3000, () => {})
serve.listen(9000, () => {})
