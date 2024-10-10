import React from 'react';

// BEGIN (write your solution here)

const Item = ({ task, onClick }) => {
  const { text, state } = task;
  const isFinished = state === 'finished';

  return (
    <div className="row">
      <div className="col-1">{task.id}</div>
      <div className="col">
        <a href="#" className="todo-task" onClick={onClick}>
          {isFinished ? <s>{text}</s> : text}
        </a>
      </div>
    </div>
  );
};
  
export default Item;
// END
