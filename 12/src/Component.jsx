import uniqueId from 'lodash/uniqueId';
import React from 'react';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentValue: 0, logList: [] };
  }

  handleButtonClick = (isPositive) => {
    this.setState((prevState) => {
      
      const lastValue = prevState.logList.length > 0 
        ? prevState.logList[0].currentValue 
        : 0;

      const newValue = isPositive ? lastValue + 1 : lastValue - 1;

      const newLog = { id: uniqueId(), currentValue: newValue };

      return {
        logList: [newLog, ...prevState.logList], 
      };
    });
  };

  handleLogButton = (deleteId) => {
    this.setState((prevState) => {
      const newLogList = prevState.logList.filter((item) => item.id !== deleteId);

      return {
        logList: newLogList,
        currentValue: newLogList.length === 0 ? 0 : prevState.currentValue, 
      };
    });
  };

  render() {
    const { logList } = this.state;

    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button 
            onClick={() => this.handleButtonClick(true)} 
            type="button" 
            className="btn btn-outline-success"
          >
            +
          </button>
          <button 
            onClick={() => this.handleButtonClick(false)} 
            type="button" 
            className="btn btn-outline-danger"
          >
            -
          </button>
        </div>

        {logList.length > 0 && ( 
          <div className="list-group">
            {logList.map((logEl) => (
              <button
                key={logEl.id}
                onClick={() => this.handleLogButton(logEl.id)} 
                type="button"
                className="list-group-item list-group-item-action"
              >
                {logEl.currentValue}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
