import React, {Component} from 'react';

class ReaperItem extends Component{
    constructor(){
        super()
        this.state = {
            updateText: '',
            editToggle: false
        }

        this.handleUpdateTask = this.handleUpdateTask.bind(this)
    }

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            border: '1px #0ca5a2 dotted',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
     }
    }

    handleInputChange(value) {
        this.setState({ updateText: value });
      }

    handleUpdateTask(e){
        e.preventDefault()
        if(this.state.updateText === ''){
            return
        } else {
            this.props.updateItem(this.props.id, this.state.updateText)
            this.setState ({
                updateText: '',
                editToggle: false,
            })
        }
    }


    editToggle (){
        this.setState({
            editToggle: !this.state.editToggle
        })
    }

    
    render(){
        const {text} = this.props
        const{id} = this.props
    return(
        <div style={this.getStyle()}>
            <div className="check">
               <input type="checkbox"/>
            {this.state.editToggle 
                ? 
            <div><input onChange={e => this.handleInputChange(e.target.value)} placeholder={text} type="text"/><button onClick={this.handleUpdateTask}>Update</button></div>
                : 
            <p>{text}</p>}
            </div>
            <div className="icons">
                <img 
                className="menu-icon" 
                onClick={() => this.editToggle()}
                src="https://webstockreview.net/images/how-to-edit-png-images-14.png" alt="edit-icon"/>
                <img 
                className="menu-icon" 
                onClick={() => this.props.deleteItem(id)}
                src="https://www.freeiconspng.com/uploads/x-delete-button-png-15.png" alt="delete-icon"/>
            </div>
        </div>
    )
    }
}



export default ReaperItem