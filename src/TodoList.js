import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
        }
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }
    create(newTodo){
        this.setState({
            todos:[...this.state.todos, newTodo]
        })

    }
    remowe(id){
        this.setState({
            todos: this.state.todos.filter(todo=>  todo.id !==id)
        })
    }

    update(id, updateTask){
        const updatedTodos= this.state.todos.map(todo=> {
            if(todo.id ===id){
                return {...todo, task: updateTask }
            }
            return todo
        })
        this.setState({ todos: updatedTodos })
    }
    toggleCompletion(id){
        const updatedTodos= this.state.todos.map(todo=> {
            if(todo.id === id){
                return { ...todo, completed: !todo.completed}
            }
            return todo
    })
    this.setState({
        todos:updatedTodos,
    })

    }
    render() {
        const todos = this.state.todos.map((todo) => {

            return ( 
            <Todo 
            key={todo.id}
            id={todo.id}
            completed={todo.Completed}
            updateTodo={this.update}
             task={todo.task} removeTodo={() => this.remowe(todo.id) }
             toggleTodo={this.toggleCompletion}
             />
            )
        } )
        return (
            <div className='TodoList'>

                <h1>
                    Yapılacaklar Listesi
                </h1>
                <ul>{todos}</ul>
                <NewTodoForm createTodo={this.create} />


            </div>
        )
    }





}
export default TodoList