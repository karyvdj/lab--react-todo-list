import React, { Component } from 'react';

class NewTaskForm extends Component {
    taskRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
      
        const newTask = {
          id: Date.now(),
          task: this.taskRef.current.value
        }
        return this.props.onCreateTask(newTask);
    };

    render() {
        return (
           <form onSubmit={this.handleSubmit}>
                <input id="taks" ref={this.taskRef} type="text" />
                <button className="create">Create</button>
           </form>
        )  
    }
}

export default NewTaskForm