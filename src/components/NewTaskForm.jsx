import React, { Component } from 'react';

class NewTaskForm extends Component {
    taskRef = React.createRef();
    dateRef = React.createRef();
    criticalRef = React.createRef();
    
    handleSubmit = e => {
        e.preventDefault();
      
        const newTask = {
          id: Date.now(),
          task: this.taskRef.current.value,
          date: this.dateRef.current.value,
          critical: this.criticalRef.current.checked
        }
        return this.props.onCreateTask(newTask);
        console.log(newTask)
    };

    render() {
        return (
           <form onSubmit={this.handleSubmit}>
                <div className="field_create">
                    <input id="taks" ref={this.taskRef} type="text" />
                    <button className="create">Create</button>
                </div>

                <div>
                    <input type="date" ref={this.dateRef}/>
                </div>
                
                <div>
                    <input type="checkbox" ref={this.criticalRef} id="critical" name="util" value="critical"/>
                    <label for="critical">Critical</label>
                </div>
           </form>
        )  
    }
}

export default NewTaskForm