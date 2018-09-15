import React, { Component } from 'react';

class Task extends Component {
    state = {
        isDone: false
    }

    handleStatusClick = e => {
        this.setState({
          isDone: !this.state.isDone
        });
    };
    
    handleDeleteClick = () => {
        console.log('click')
        const { task, onDelete } = this.props;
        onDelete(task.id);
    };

    render() {
        const { task } = this.props
        
        return (
           <li className="task__list--item">
               <button className={`${this.state.isDone ? `status-done`: `status-process` }`} onClick={this.handleStatusClick} > 
                    {this.state.isDone ? "Done" : "In Process"}
               </button>
               <p className="task_name">{task.task}</p>
               <button onClick={this.handleDeleteClick} className="delete">Delete</button>
           </li>
        )  
    }
}

export default Task