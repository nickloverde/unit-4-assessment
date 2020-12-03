import React, { Component } from 'react';
import ReaperList from './ReaperList'
import axios from 'axios'

class Display extends Component {
    constructor(){
        super()
        this.state = {
            reaperList: [],
            // suggestionList: [],
        }

        this.createItem = this.createItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    componentDidMount(){
        axios.get('/api/reaperList')
        .then(res => {
            this.setState ({
                reaperList: res.data
            })
        })
    }

    createItem(text){
        const body = {
            newItem: text,
        } 
        axios.post('/api/reaperList/', body)
        .then(res => {
            this.setState({
                reaperList: res.data,
            })
        })
    }

    updateItem(id, text){
        const body = {
            updateText: text,
        }
        axios.put(`/api/reaperList/${id}`, body).then(res => {
            this.setState({
                reaperList: res.data
            })
        })
    }

    deleteItem(id){
        axios.delete(`/api/reaperList/${id}`).then(res =>
            this.setState({
                reaperList: res.data
            }))
    }


    render(){
        return(
            <div>
                <div>
                    <ReaperList reaperList = {this.state.reaperList} 
                    createItem = {this.createItem}
                    deleteItem = {this.deleteItem}
                    updateItem = {this.updateItem}/>
                </div>
                {/* <div>
                    <SuggestionList suggestionList = {this.state.suggestionList}/>
                </div> */}
            </div>
        )
    }


}

export default Display