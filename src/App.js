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
        status: false,
        date: "Sep 18, 2018",
        critical: false
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

  handleStatusChange = id => {
    const nextAllTasks = this.state.allTasks.map(
      task => {
          if(task.id !== id) {
            return task
          }else{
            task.status = !task.status
            return task
          }
      } 
    )
    this.setState({
      allTasks: nextAllTasks
    })
  }

  handleCriticalChange = id => {
    const nextAllTasks = this.state.allTasks.map(
      task => {
          if(task.id !== id) {
            return task
          }else{
            task.critical = !task.critical
            return task
          }
      } 
    )
    this.setState({
      allTasks: nextAllTasks
    })
  }
  

  render() {
    return (
      <div className="app">
        <Header/>
        <ContainerTasks 
          onCreateTask={this.handleCreateTask} 
          tasks={this.state.allTasks}
          onDeleteTask={this.handleDeleteTask} 
          onChangeStatus={this.handleStatusChange}
          onChangeCritical={this.handleCriticalChange}/>
      </div>
    );
  }
}

export default App;
