
// const suggestionList = require('../data.json')

const reaperList = [
    {id: 0,
    text: 'Swim with sharks',
},
{id: 1,
text: 'Go skydiving'},
]
let id = 0

module.exports = {
    displayItem: (req, res) => {
        res.status(200).send(reaperList)
    },
    createItem: (req, res) => {
        const {newItem} = req.body
        reaperList.push({id, text: newItem})
        id++
        res.status(200).send(reaperList)
    },
    updateItem: (req, res) => {
        const {updateText} = req.body
        const {reaper_id} = req.params

        const index = reaperList.findIndex(element => element.id === +reaper_id)

        if(index === -1){
            return res.status(404).send('Reaper List item does not exist')
        }
        const item = reaperList[index]

        reaperList[index] = {
            id: item.id,
            text: updateText || item.text
        }
        res.status(200).send(reaperList)
    },
    
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