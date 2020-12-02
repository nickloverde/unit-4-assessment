const { raw } = require("express")
const suggestionList = require('../data.json')

const reaperList = []
let id = 0

module.exports = {
    displayItem: (req, res) => {
        res.status(200).send(reaperList)
    },
    createItem: (req, res) => {
        const {text} = req.body
        reaperList.push({id, text})
        id++
        res.status(200).send(reaperList)
    },
    updateItem: (req, res) => {
        const {text} = req.body
        const {reaper_id} = req.params

        const index = reaperList.findIndex(element => element.id === +reaper_id)

        if(index === -1){
            return res.status(404).send('Reaper List item does not exist')
        }
        const item = reaperList[index]

        reaperList[index] = {
            id: item.id,
            text: text || item.text
        }
        res.status(200).send(reaperList)
    },
    // checkItem: (req, res) => {
    //     const {text}= req.body
    //     const {reaper_id} = req.params

    //     const index = reaperList.findIndex(element => element.id === +reaper_id)

    //     if(index === -1){
    //         return res.status(404).send('Reaper List item does not exist')
    //     }
        
    //     const item = reaperList[index]

    //     reaperList[index] = {
    //         id: item.id,
    //         text: text
    //     }

    // },
    deleteItem: (req, res) => {
        const {reaper_id} = req.params

        const index = reaperList.findIndex(element => element.id === +reaper_id)

        if(index === -1){
            return res.status(404).send('Reaper List item does not exist')
        }

        reaperList.splice(index, 1)

        res.status(200).send(reaperList)
    }


}