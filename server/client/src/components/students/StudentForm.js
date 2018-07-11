import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class StudentForm extends Component {
  render() {
    const {student, studentStatuses, onSave, onChange, saving, errors, startDateChange, dobChange, lastTestDateChange} = this.props;
    const returnToPreviousPage = () => {
      browserHistory.push('/students');
    };

    return (
      <div className="container">
        <form>
          <h1>Manage Student</h1>
          <div className="row">
            <div className="col-lg-3">
              <TextInput
                name="firstName"
                label="First Name"
                value={student.firstName}
                onChange={onChange}
                addClass="medium-textbox"
                error={errors.firstName} />
            </div>
            <div className="col-lg-3 ml-2">
              <TextInput
                name="lastName"
                label="Last Name"
                value={student.lastName}
                onChange={onChange}
                addClass="medium-textbox"
                error={errors.lastName} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <TextInput
                name="beltSize"
                label="Belt Size"
                value={student.beltSize}
                onChange={onChange}
                error={errors.beltSize} />
            </div>
            <div className="col-md-3">
              <SelectInput
                name="studentStatusId"
                label="Student Status"
                value={student.studentStatusId.toString()}
                defaultOption="Select Status"
                options={studentStatuses}
                onChange={onChange}
                error={errors.studentStatusId} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 m-2">
              <label htmlFor="lastTestingDate">Last Testing Date</label>
              <DatePicker name="lastTestingDate"
                className="date-text-box"
                selected={moment(student.lastTestingDate)}
                onChange={lastTestDateChange}
              />
            </div>
            <div className="col-xs-1 m-2">
              <label htmlFor="startDate">Start Date</label>
              <DatePicker name="startDate"
                className="date-text-box"
                selected={moment(student.startDate)}
                onChange={startDateChange}
              />
            </div>
            <div className="col-xs-1 m-2">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <DatePicker name="dateOfBirth"
                className="date-text-box"
                selected={moment(student.dateOfBirth)}
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

StudentForm.propTypes = {
  student: PropTypes.object.isRequired,
  allRanks: PropTypes.array,
  studentStatuses: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  startDateChange: PropTypes.func.isRequired,
  dobChange: PropTypes.func.isRequired,
  lastTestDateChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default StudentForm;

/*
        <div className="row">
          <div className="col-xs-1">
            <DatePicker
                selected={Date.now()}
                onChange={handleChange}/>
          </div>
        </div>
*/
