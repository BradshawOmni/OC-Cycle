import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StudentListRow from './StudentListRow';

class StudentList extends Component {
  render() {
    const {students, ranks, phones} = this.props;
    return (
      <div className="container-fluid">
        <div className="row row-title">
          <div className="col-sm-1">ID</div>
          <div className="col-sm-2">Last Name</div>
          <div className="col-sm-2">First Name</div>
          <div className="col-sm-5">Phone Number</div>
        </div>
        {students.map(student =>
          <StudentListRow key={student.studentId} student={student} phones={phones} />
        )}
      </div>
    );
  }
}

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
  ranks: PropTypes.array.isRequired,
  phones: PropTypes.array.isRequired
};

export default StudentList;
