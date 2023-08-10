import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.task,
        }
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleUpdate(e) {
        e.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing: false,

        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        
        })
    
    }
    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }



    handleToggle(e){
        this.props.toggleTodo(this.props.id)
    }

    handleRemove(e){
        this.props.removeTodo(this.props.id, this.state.task)
    }

        
        render() {
            let result
            if (this.state.isEditing) {
                result = (
                    <div className='Todo'>
                        <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                            <input type='text' value={this.state.task} name='task' onChange={this.handleChange} />
                            <button style={{ width: "55px", height: "25px", }}>Tamam</button>

                        </form>
                    </div>
                )
            } else{ 
                result = (
                    <div className='Todo' >
                        <li className={
                            this.props.completed ? 'Todo-task completed' : 'Todo-task'
                        }
                         onClick={this.handleToggle} 
                        >
                            {this.props.task}
                         </li>
                        <div className='Todo-buttons'>
                            <button style={{ width: "59px", height: "25px", }} onClick={this.toggleForm} >Düzenle</button>
                            <button style={{ width: "50px", height: "25px", }} onClick={this.handleRemove} >Sil</button>


                        </div>

                    </div>
                )

            }
            return result
         
        }
}
export default Todo