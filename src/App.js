import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import ContainerTasks from './components/ContainerTasks'

class App extends Component {
  state = {
    allTasks: [
      {
        id: "123",
        task: "Buy ice cream",
      }
    ]
  };

  handleCreateTask = task => {
    const nextAllTasks = [...this.state.allTasks, task];

    this.setState({
      allTasks: nextAllTasks
    });
  };

  handleDeleteTask= id => {
    const nextAllTasks= this.state.allTasks.filter(
      task => task.id !== id
    );

    this.setState({
      allTasks: nextAllTasks
    });
  };

  render() {
    return (
      <div className="app">
        <Header/>
        <ContainerTasks onCreateTask={this.handleCreateTask} tasks={this.state.allTasks} onDeleteTask={this.handleDeleteTask}/>
      </div>
    );
  }
}

export default App;
