const suggestionList = require('../data.json')

module.exports = {
    getSuggestionList: (req, res) => {
      res.status(200).send(suggestionList)
    },
  }