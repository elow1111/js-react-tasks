import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { task, onClick } = this.props;

    return (
      <div className="row">
        <div className="col-1">{task.id}</div>
        <div className="col">
          <a href="#" className="todo-task" onClick={onClick}>
            {task.state === 'finished' ? <s>{task.text}</s> : task.text}
          </a>
        </div>
      </div>
    );
  }
}

export default Item;
