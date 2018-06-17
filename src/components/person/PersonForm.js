import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class PersonForm extends Component {
  render() {
    const {person, sexes, onSave, onChange, saving, errors, dobChange} = this.props;
    const returnToPreviousPage = () => {
      browserHistory.push('/persons');
    };

    return (
      <div className="container-fluid">
        <form>
          <h1>Manage Person</h1>
          <div className="row">
            <div className="col-lg-3">
              <TextInput
                name="firstName"
                label="First Name"
                placeholder="Enter First Name"
                value={person.firstName}
                onChange={onChange}
                addClass="medium-textbox"
                error={errors.firstName} />
            </div>
            <div className="col-lg-3 ml-2">
              <TextInput
                name="lastName"
                label="Last Name"
                placeholder="Enter Last Name"
                value={person.lastName}
                onChange={onChange}
                addClass="medium-textbox"
                error={errors.lastName} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <SelectInput
                name="sex"
                label="Sex"
                value={person.sex}
                options={sexes}
                onChange={onChange}
                error={errors.sex} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 m-2">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <DatePicker name="dateOfBirth"
                className="date-text-box"
                selected={moment(person.dateOfBirth)}
                onChange={dobChange}
              />
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

PersonForm.propTypes = {
  person: PropTypes.object.isRequired,
  sexes: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  dobChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default PersonForm;
