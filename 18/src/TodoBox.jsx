import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], 
      newTaskText: '', 
    };
  }

  async componentDidMount() {
  
    const response = await axios.get(routes.tasksPath());
    this.setState({ tasks: response.data });
  }

  handleInputChange = (event) => {
    this.setState({ newTaskText: event.target.value });
  };

  handleAddTask = async (event) => {
    event.preventDefault();
    const { newTaskText } = this.state;
    if (newTaskText.trim() === '') return;

    const response = await axios.post(routes.tasksPath(), { text: newTaskText });
    const newTask = response.data;

    this.setState((prevState) => ({
      tasks: update(prevState.tasks, { $push: [newTask] }),
      newTaskText: '', 
    }));
  };

  toggleTaskState = async (task) => {
    const { id, state } = task;
    const newState = state === 'active' ? 'finished' : 'active';
    const url = state === 'active' ? routes.finishTaskPath(id) : routes.activateTaskPath(id);

    const response = await axios.patch(url);
    const updatedTask = response.data;

    const taskIndex = this.state.tasks.findIndex((t) => t.id === id);
    this.setState((prevState) => ({
      tasks: update(prevState.tasks, {
        [taskIndex]: { $set: updatedTask },
      }),
    }));
  };

  render() {
    const { tasks, newTaskText } = this.state;

    const activeTasks = tasks.filter((task) => task.state === 'active');
    const finishedTasks = tasks.filter((task) => task.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          <form className="todo-form mx-3" onSubmit={this.handleAddTask}>
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={newTaskText}
                onChange={this.handleInputChange}
                required
                className="form-control me-3"
                placeholder="I am going..."
              />
              <button type="submit" className="btn btn-primary">add</button>
            </div>
          </form>
        </div>

        <div className="todo-active-tasks">
          {activeTasks.map((task) => (
            <Item key={task.id} task={task} onClick={() => this.toggleTaskState(task)} />
          ))}
        </div>

        <div className="todo-finished-tasks">
          {finishedTasks.map((task) => (
            <Item key={task.id} task={task} onClick={() => this.toggleTaskState(task)} />
          ))}
        </div>
      </div>
    );
  }
}
export default TodoBox;
// END
