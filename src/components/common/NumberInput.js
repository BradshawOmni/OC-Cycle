import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class NumberInput extends PureComponent {
  render() {
    const {name, label, addClass, onChange, placeholder, value, error} = this.props;
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    let inputClass = 'form-control';
    if (addClass) {
      inputClass += " " + `${addClass}`;
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <input
            type="number"
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

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.number,
  addClass: PropTypes.string,
  error: PropTypes.string
};

export default NumberInput;
