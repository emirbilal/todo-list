import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handlechange=this.handlechange.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
            this.props.createTodo({...this.state, id:uuidv4(), completed: false})
            this.setState({task:""})

        
    }
    handlechange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='task'>Planların Neler?</label>
                <input id='task'
                    name='task'
                    type="text"
                    placeholder='Yazınız'
                    value={this.state.task} 
                    onChange={this.handlechange} 
                    ></input>
                <button style={{ width: "50px", height: "25px", }}>Ekle</button>
            </form>

        )
    }


}
export default NewTodoForm