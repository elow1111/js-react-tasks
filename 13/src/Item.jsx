import React from 'react';

export default class Item extends React.Component {
  render() {
    const { task, onRemove } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-auto">
            <button onClick={onRemove} type="button" className="btn btn-primary btn-sm">
              -
            </button>
          </div>
          <div className="col">{task}</div>
        </div>
        <hr />
      </div>
    );
  }
}
