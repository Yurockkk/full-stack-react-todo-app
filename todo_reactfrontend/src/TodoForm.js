import React, {Component} from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e){
    this.setState({inputValue: e.target.value});
  }
  
  handleSubmit(){
    // console.log(this.state.inputValue);
    this.props.addTodo(this.state.inputValue);
  }
  
  render() {
    return (
      <div className="form">
        <input 
        className="formInput"
        type='text'
        placeholder="Insert your task here..." 
        value={this.state.inputValue} 
        onChange={this.handleChange} 
        />
        
        <button 
        onClick={this.handleSubmit}
        >
          Add Todo
        </button>
      </div>
    );
  }
  
}

export default TodoForm;