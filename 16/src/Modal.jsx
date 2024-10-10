import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)

import PropTypes from 'prop-types';

const Modal = ({ isOpen, children }) => {
  return (
    <div
      className={cn('modal', 'fade', { show: isOpen })}
      style={{ display: isOpen ? 'block' : 'none' }}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.Header = ({ toggle, children }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title">{children}</h5>
      <button
        type="button"
        className="btn-close"
        onClick={toggle}
        aria-label="Close"
      ></button>
    </div>
  );
};

Modal.Body = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

Modal.Footer = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.Header.propTypes = {
  toggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.Body.propTypes = {
  children: PropTypes.node.isRequired,
};

Modal.Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
// END 
