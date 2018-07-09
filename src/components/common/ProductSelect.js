import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../common/CheckBox';

class ProductSelect extends PureComponent {
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
        <CheckBox
            name="servicesProposed"
            label="Services Proposed"
            placeholder="Services Proposed"
            
            onChange={onChange}
            addClass="medium-textbox"
            error='' />
        
        </div>

    );
  }
}
ProductSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string
};

export default ProductSelect;
