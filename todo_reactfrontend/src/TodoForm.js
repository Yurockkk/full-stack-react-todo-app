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
  
  handleSubmit(e){
    console.log("handleSubmit fire");
    if (e.key === 'Enter'){
      this.props.addTodo(this.state.inputValue);
      console.log("enter pressed");
    } 
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
        onKeyPress={this.handleSubmit}
        />
        
          Add Todo
        </button>
      </div>
    );
  }
  
}

export default TodoForm;