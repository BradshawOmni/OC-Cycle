import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class TextInput extends PureComponent {
  render() {
    const {name, label, addClass, onChange, placeholder, value, error, disabled} = this.props;
    let wrapperClass = 'form-group';
    let inputClass = 'form-control';
    if (addClass) {
      inputClass += " " + `${addClass}`;
    }

    if (error && error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <input
            disabled={disabled}
            type="text"
            name={name}
            className={inputClass}
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
