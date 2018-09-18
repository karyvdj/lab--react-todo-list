import React, { Component } from 'react';

import Task from './Task';

class TasksList extends Component {

    handleDeleteTask = id => {
        this.props.onDeleteTask(id);
    };


    render() {
        const { tasks, onChangeStatus, onChangeCritical } = this.props
    
        return (
            <div>
                {this.props.tasks.length === 0 ? (
                    <p>You don´t have tasks</p>
                ) : (
                    <ul className="task__list">
                        {this.props.tasks.map(task =>(
                            <Task key={task.id} task={task} onDelete={this.handleDeleteTask} onChange={onChangeStatus} onChangeCritical={onChangeCritical}/>
                        ))}  
                    </ul>
                )}
            </div>
        )  
    }
}

export default TasksList