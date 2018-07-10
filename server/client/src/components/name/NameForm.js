import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class NameForm extends Component {
  render() {
    const {name, onChange, errors} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <TextInput
              name="fname"
              label="First Name"
              value={name.fname}
              onChange={onChange}
              error={errors.fname} />
          </div>
          <div className="col-lg-3 ml-2">
            <TextInput
              name="lname"
              label="Last Name"
              value={name.lname}
              onChange={onChange}
              error={errors.lname} />
          </div>
        </div>
      </div>
    );
  }
}


NameForm.propTypes = {
  name: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default NameForm;
