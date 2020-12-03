const express = require('express')
const reaperCtrl = require('./controllers/reaperCtrl')
// const suggestionCtrl = require('./controllers/suggestionCtrl')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/api/reaperlist', reaperCtrl.displayItem)
app.post('/api/reaperlist', reaperCtrl.createItem)
app.put('/api/reaperlist/:reaper_id', reaperCtrl.updateItem)
// app.put('/api/reaperList/:reaper_id', reaperCtrl.checkItem)
app.delete('/api/reaperlist/:reaper_id', reaperCtrl.deleteItem)
// app.get('/api/suggestionList', suggestionCtrl.getSuggestionList)



const SERVER_PORT = 5000

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))