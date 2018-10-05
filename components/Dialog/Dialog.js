import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Modal from '../Modal';
import Icon from '../Icon';

/*
 * Top level Dialog component, not intended to be used directly, if you need
 * a specific type of Dialog, create in the pattern of Notice
 */
const Dialog = ({ children, type, show, options, title, message, onBlur }) => (
  <Modal show={show} onBlur={onBlur}>
    <div className={cx('dialog', { [`dialog--${type}`]: type })}>
      <div className="dialog__main">
        { type &&
          <div className="dialog__main-icon">
            <Icon name={type} />
          </div>
        }
        <div className="dialog__main-content">
          <h2 className="dialog__main-title">{title}</h2>
          {message}
        </div>
      </div>
      { children &&
        <div className="dialog__additional-content">
          <div className="dialog__additional-box">
            {children}
          </div>
        </div>
      }
      <footer className="dialog__footer">
        {options}
      </footer>
    </div>
  </Modal>
);

Dialog.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  message: PropTypes.node,
  type: PropTypes.string,
  children: PropTypes.node,
  options: PropTypes.arrayOf(PropTypes.element),
  onBlur: PropTypes.func,
};

Dialog.defaultProps = {
  show: false,
  type: null,
  message: null,
  children: null,
  options: [],
  onBlur: () => {},
};

export { Dialog };

export default Dialog;
