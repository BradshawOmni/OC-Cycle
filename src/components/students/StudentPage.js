import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as studentActions from '../../actions/studentActions';
import StudentList from './StudentList';
import { browserHistory } from 'react-router';

class StudentsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddStudentPage = this.redirectToAddStudentPage.bind(this);
  }

  redirectToAddStudentPage() {
    browserHistory.push('/student');
  }

  render() {
    const { students, phones, studentStatuses } = this.props;
    return (
      <div>
        <h1>Students</h1>
        <input
          type="submit"
          value="Add Student"
          className="btn btn-secondary"
          onClick={this.redirectToAddStudentPage}
        />
        <StudentList students={students} phones={phones} studentStatuses={studentStatuses} />
      </div>
    );
  }
}

StudentsPage.propTypes = {
  students: PropTypes.array.isRequired,
  ranks: PropTypes.array.isRequired,
  phones: PropTypes.array.isRequired,
  studentStatuses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    students: state.students,
    ranks: state.ranks,
    studentStatuses: state.studentStatuses,
    phones: state.phones
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(studentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage);
