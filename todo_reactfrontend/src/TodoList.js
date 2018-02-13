import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api.js';
import './TodoList.css';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
  }

  componentWillMount(){
    this.loadTodos();
  }

  async loadTodos() {
    let todos = await apiCalls.getTodos();
    this.setState({todos: todos});
  }

  async addTodo(todoText){
    // console.log(`ADDING TODO FROM TODO LIST COMPONENT ${todoText}`);
    let newTodo = await apiCalls.createTodo(todoText);
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  async deleteTodo(id){
    await apiCalls.removeTodo(id);
    const todos = this.state.todos.filter(t => t._id !== id)
    this.setState({todos: todos})
  }

  async toggleTodo(todo){
    let updatedTodo = await apiCalls.updateTodo(todo);
    const todos = this.state.todos.map(t => {
      return t._id === updatedTodo._id ?
      {...t, completed: !t.completed}
      :
      t
    })
    this.setState({todos: todos})
  }



  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <TodoItem
          key={todo._id}
          {...todo}
          onDelete={this.deleteTodo.bind(this,todo._id)}
          onToggle={this.toggleTodo.bind(this,todo)}
        />
      );
    });

    return (
      <div>
        <h1>Todo<span>List</span></h1>
        <h2>A todo list app built with react frontend and node backend</h2>
        <TodoForm addTodo={this.addTodo}/>
        <ul>
          {todos}
        </ul>
      </div>

    );
  }

}

export default TodoList;
