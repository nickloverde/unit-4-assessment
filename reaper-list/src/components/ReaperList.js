import React, { Component } from 'react'
import ReaperItem from './ReaperItem'

class ReaperList extends Component {
    constructor(){
        super()
        this.state = {
            id: 0,
            text: '',
            
        }
    }

    handleInputChange(value) {
        this.setState({ text: value });
      }

    handleAddTask(e){
        e.preventDefault()
        if(this.state.text === ''){
            return
        } else {
            this.props.createItem(this.state.text)
            this.setState ({
                text: ''
            })
        }
    }

    render(){
        const {reaperList} = this.props
        const reaperMap = reaperList.map((element) => {
            return <ReaperItem text={element.text} id={element.id} key={element.id} deleteItem = {this.props.deleteItem} updateItem = {this.props.updateItem}/>
        })

    return(
            <div>
                <div>
                    <form className="form">
                        <input className="input"
                        placeholder="Start your Bucket List here. Write your next adventure/milestone/fear-conquered/soul-defining experience . . ." 
                        onChange={e => this.handleInputChange(e.target.value)} 
                        type="text"
                        value={this.state.text}/>
                        <button 
                        className="add-btn" onClick={e => this.handleAddTask(e)}>Add Here</button>
                    </form>
                </div>

                <div className="ReaperList">
                {reaperMap}
                </div>
            </div>
        )
    }
}


export default ReaperList

