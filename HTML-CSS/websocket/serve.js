const { WebSocketServer } = require('ws')
const server = new WebSocketServer({ port: 3000 })
server.on('connection', ws => {
  console.log('建立lian')
  ws.on('message', msg => {
    console.log(msg)
  })
  setTimeout(() => {
    ws.send('主动推送的消息')
  })
})
