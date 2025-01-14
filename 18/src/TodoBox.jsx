import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import Item from './Item';
import routes from './routes';

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTaskText: '',
    };
  }

  componentDidMount() {

    this.fetchTasks();
  }

  fetchTasks = async () => {
    try {
      const response = await axios.get(routes.tasksPath());
      this.setState({ tasks: response.data });
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  handleInputChange = (e) => {
    this.setState({ newTaskText: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { newTaskText, tasks } = this.state;

    try {
      const response = await axios.post(routes.tasksPath(), { text: newTaskText });
      const newTask = response.data;

      const updatedTasks = update(tasks, { $push: [newTask] });
      this.setState({ tasks: updatedTasks, newTaskText: '' });
    } catch (error) {
      console.error('Error adding task', error);
    }
  };

  toggleTaskState = async (id, currentState) => {
    const { tasks } = this.state;
    const route = currentState === 'active'
      ? routes.finishTaskPath(id)
      : routes.activateTaskPath(id);

    try {
      const response = await axios.patch(route);
      const updatedTask = response.data;


      const taskIndex = tasks.findIndex((task) => task.id === id);
      const updatedTasks = update(tasks, {
        [taskIndex]: { $set: updatedTask },
      });
      this.setState({ tasks: updatedTasks });
    } catch (error) {
      console.error('Error updating task state', error);
    }
  };

  render() {
    const { tasks, newTaskText } = this.state;
    const activeTasks = tasks.filter((task) => task.state === 'active');
    const finishedTasks = tasks.filter((task) => task.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={newTaskText}
                required
                className="form-control me-3"
                placeholder="I am going..."
                onChange={this.handleInputChange}
              />
              <button type="submit" className="btn btn-primary">add</button>
            </div>
          </form>
        </div>

        <div className="todo-active-tasks">
          {activeTasks.map((task) => (
            <Item
              key={task.id}
              task={task}
              onClick={() => this.toggleTaskState(task.id, task.state)}
            />
          ))}
        </div>

        {finishedTasks.length > 0 && (
          <div className="todo-finished-tasks">
            {finishedTasks.map((task) => (
              <Item
                key={task.id}
                task={task}
                onClick={() => this.toggleTaskState(task.id, task.state)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TodoBox;
