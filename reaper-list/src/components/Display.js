import React, { Component } from 'react';
import ReaperList from './ReaperList'
import axios from 'axios'

class Display extends Component {
    constructor(){
        super()
        this.state = {
            reaperList = [],
            // suggestionList = 
        }
    }

    componentDidMount(){
        axios.get('/api.reaperList').then(res => {
            this.setState ({
                reaperList: res.data
            })
        })   
    }

    addfromSuggestion(){
        const body = { reaper_id: id}
    }


}

export default Display