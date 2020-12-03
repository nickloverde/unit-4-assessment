import React from 'react'
import Suggestion from './Suggestion'

const SuggestionList = (props) => {

  const suggestionMap = props.suggestionList.map((element) => {
    return <Suggestion addToReaperList= {this.addToReaperList} key={element.id} suggestion = {element} />
  })
  return <div>{suggestionMap}</div>
}
export default SuggestionList