import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class SelectInput extends PureComponent {
  render () {
    const {name, label, addClass, onChange, defaultOption, value, error, options, disabled} = this.props;
    let inputClass = 'form-control';
    if (addClass) {
      inputClass += " " + `${addClass}`;
    }

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className="field">
          {/* Note, value is set here rather than on the option - docs: https://facebook.github */}
          <select
            disabled={disabled}
            name={name}
            value={value}
            onChange={onChange}
            className={inputClass}>
            <option>{defaultOption}</option>
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>{option.text}</option>
              );
            })
            }
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    );
  }
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  addClass: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
