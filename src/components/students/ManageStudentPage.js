import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as studentActions from '../../actions/studentActions';
import * as phoneActions from '../../actions/phoneActions';
import StudentForm from '../students/StudentForm';
import toastr from 'toastr';
import moment from 'moment';

class ManageStudentPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      student: Object.assign({}, this.props.student),
      errors: {},
      saving: false
    };

    //this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.updateStudentState = this.updateStudentState.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.handleDobDateChange = this.handleDobDateChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleTestDateChange = this.handleTestDateChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.student.studentId != nextProps.student.studentId) {
      // necessary to populate form whene existing student is loaded directly.
      this.setState({ student: Object.assign({}, nextProps.student) });
    }
  }

  getPhoneNumber(phones, id) {
    const phoneNum = { number: 'Number Not Found', phoneTypeId: 0, phoneId: 0 };
    const phoneNums = phones.filter(r => r.phoneId == id);
    if (phoneNums.length > 0) {
      return phoneNums[0];
    }
    return phoneNum;
  }

  updateStudentState(event) {
    const field = event.target.name;
    let student = this.state.student;
    student[field] = event.target.value;
    return this.setState({ student: student });
  }

  studentFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.student.lastName.length < 3) {
      errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.student.firstName.length < 3) {
      errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  saveStudent(event) {
    event.preventDefault();
    if (!this.studentFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.saveStudent(this.state.student)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Student saved!');
    this.context.router.push('/students');
  }

  handleStartDateChange(date) {
    let student = this.state.student;
    student.startDate = date.format();
    return this.setState({ student: student });
  }

  handleDobDateChange(date) {
    let student = this.state.student;
    student.dateOfBirth = date.format();
    return this.setState({ student: student });
  }

  handleTestDateChange(date) {
    let student = this.state.student;
    student.lastTestingDate = date.format();
    return this.setState({ student: student });
  }

  render() {
    return (
      <StudentForm
        allRanks={this.props.ranks}
        studentStatuses={this.props.studentStatuses}
        onChange={this.updateStudentState}
        onSave={this.saveStudent}
        student={this.state.student}
        errors={this.state.errors}
        saving={this.state.saving}
        startDateChange={this.handleStartDateChange}
        dobChange={this.handleDobDateChange}
        lastTestDateChange={this.handleTestDateChange}
      />
    );
  }
}

ManageStudentPage.propTypes = {
  student: PropTypes.object.isRequired,
  ranks: PropTypes.array.isRequired,
  studentStatuses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
ManageStudentPage.contextTypes = {
  router: PropTypes.object
};

function getStudentById(students, studentId) {
  const student = students.filter(student => student.studentId == studentId);
  if (student) return student[0]; // since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const studentId = ownProps.params.id; // from the path '/student/:id'

  let student = {
    studentId: 0,
    academyId: 0,
    beltSize: '',
    dateOfBirth: '1900-01-01T00:00:00',
    startDate: '1900-01-01T00:00:00',
    lastName: '',
    firstName: '',
    middleName: null,
    lastTestingDate: '1900-01-01T00:00:00',
    studentStatusId: 0,
    rankId: 0,
    academy: null,
    rank: null,
    studentStatus: null,
    studentAddresses: null,
    studentEmails: null,
    studentPhones: null,
    fullName: ''
  };

  if (studentId && state.students.length > 0) {
    student = getStudentById(state.students, studentId);
  }

  const ranksFormattedForDropdown = state.ranks.map(rank => {
    return {
      value: rank.rankId.toString(),
      text: rank.description
    };
  });

  const academiesFormattedForDropdown = state.academies.map(academy => {
    return {
      value: academy.academyId.toString(),
      text: academy.name
    };
  });

  const studentStatusesFormattedForDropdown = state.studentStatuses.map(studentStatus => {
    return {
      value: studentStatus.studentStatusId.toString(),
      text: studentStatus.description
    };
  });

  return {
    student: student,
    ranks: ranksFormattedForDropdown,
    academies: academiesFormattedForDropdown,
    studentStatuses: studentStatusesFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(studentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageStudentPage);
