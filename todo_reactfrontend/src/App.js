import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <TodoList className="col-10" />
      </div>
    );
  }
}

export default App;
