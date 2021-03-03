import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import MarkdownLabel from './MarkdownLabel';

class Checkbox extends PureComponent {
  static propTypes = {
    label: PropTypes.node,
    fieldLabel: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    input: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: '',
    label: null,
    fieldLabel: null,
    disabled: false,
  };

  componentWillMount() {
    this.id = uuid();
  }

  render() {
    const {
      label,
      className,
      input,
      disabled,
      fieldLabel,
      ...rest
    } = this.props;

    const componentClasses = cx(
      'form-field-checkbox',
      className,
      {
        'form-field-checkbox--disabled': disabled,
      },
    );

    return (
      <label className={componentClasses} htmlFor={this.id}>
        <div>
          <input
            className="form-field-checkbox__input"
            id={this.id}
            // input.checked is only provided by redux form if type="checkbox" or type="radio" is
            // provided to <Field />, so for the case that it isn't we can rely on the more reliable
            // input.value
            checked={!!input.value}
            {...input}
            {...rest}
            type="checkbox"
          />
          <div className="form-field-checkbox__checkbox" />
          <MarkdownLabel label={label || input.value} className="form-field-inline-label" />
        </div>
      </label>
    );
  }
}

export default Checkbox;
