import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class PhoneForm extends Component {
  render() {
    const {phone, onSave, onChange, saving, errors} = this.props;
    const returnToPreviousPage = () => {
      browserHistory.push('/phones');
    };

    return (
      <div className="container">
        <form>
          <h1>Manage Phone</h1>
          <div className="row">
            <div className="col-lg-3">
              <TextInput
                name="phoneNumber"
                label="Phone Number"
                value={phone.phoneNumber}
                onChange={onChange}
                error={errors.firstName} />
            </div>
            <div className="col-lg-3 ml-2">
              <TextInput
                name="extension"
                label="Extension"
                value={phone.extension}
                onChange={onChange}
                error={errors.lastName} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 mr-1">
              <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary btn-lg"
                onClick={onSave} />
            </div>
            <div className="col-xs-1 mr-1">
              <button className="btn btn-primary btn-lg"
                type="submit" onClick={returnToPreviousPage}>
                Back
            </button>
            </div>
            <div className="col-lg-10" />
          </div>
        </form>
      </div>
    );
  }
}

PhoneForm.propTypes = {
  phone: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default PhoneForm;
