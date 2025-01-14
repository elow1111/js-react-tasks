import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList: [], inputText: '' };
  }

  handleAddButton = (e) => {
    e.preventDefault(); 
    const { inputText } = this.state;
    if (inputText.trim() === '') return; 
    this.setState((prevState) => ({
      taskList: [...prevState.taskList, { text: inputText, id: uniqueId() }],
      inputText: '', 
    }));
  };

  handleRemove = (deleteId) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.filter((item) => item.id !== deleteId),
    }));
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ inputText: value });
  };

  render() {
    const { taskList, inputText } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex">
            <div className="me-3">
              <input
                onChange={this.handleChange}
                type="text"
                value={inputText} 
                required=""
                className="form-control"
                placeholder="I am going..."
              />
            </div>
            <button onClick={this.handleAddButton} type="submit" className="btn btn-primary">
              add
            </button>
          </form>
        </div>
        {taskList.map((taskListEl) => (
          <Item key={taskListEl.id} task={taskListEl.text} onRemove={() => this.handleRemove(taskListEl.id)} />
        ))}
      </div>
    );
  }
}

// END
