import React, { Component } from 'react';

class Task extends Component {
    
    handleDeleteClick = () => {
        console.log('click')
        const { task, onDelete } = this.props;
        onDelete(task.id);
    };

    handleStatusClick = e => {
        const { task, onChange } = this.props;
        onChange(task.id);
    };
    
    handleCriticalClick = e => {
        const {task, onChangeCritical } = this.props;
        onChangeCritical(task.id);
    }

    render() {
        const { task } = this.props
        
        return (
           <li className={`task__list--item ${task.critical === true ? `critical` : `` }`}>
               <button className={`${task.status === true ? `status-done` : `status-process` }`} onClick={this.handleStatusClick} > 
                    {task.status === true ? "Done" : "In Process"}
               </button>
               <div className="task">
                    <p className="task_name">{task.task}</p>
                    <p className="task_date">{task.date}</p>
               </div>
               
               <button onClick={this.handleDeleteClick} className="delete">Delete</button>
           </li>
        )  
    }
}

export default Task