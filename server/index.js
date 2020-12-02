const express = require('express')
const reaperCtrl = require('./controllers/reaperCtrl')
const app = express()

app.use(express.json())

app.get('/api/reaperList', reaperCtrl.displayItem)
app.post('/api/reaperList', reaperCtrl.createItem)
app.put('/api/reaperList/:reaper_id', reaperCtrl.updateItem)
// app.put('/api/reaperList/:reaper_id', reaperCtrl.checkItem)
app.delete('/api/reaperList/:reaper_id', reaperCtrl.deleteItem)



const SERVER_PORT = 5000

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))