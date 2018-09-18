import React, { Component } from 'react';

import NewTaskForm from './NewTaskForm';
import TasksList from './Task/TasksList';

class ContainerTasks extends Component {

    handleDeleteTask = id => {
        this.props.onDeleteTask(id);
    };


    render() {
        const { onCreateTask, tasks, onChangeStatus, onChangeCritical} = this.props
        return (
            <section className="container">
                <NewTaskForm onCreateTask={onCreateTask}/>
                <TasksList tasks={tasks} onDeleteTask={this.handleDeleteTask} onChangeStatus={onChangeStatus} onChangeCritical={onChangeCritical}/>
            </section>
        )  
    }
}

export default ContainerTasks