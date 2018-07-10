import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class StudentListRow extends Component {
  getPhoneNumber(phones, id) {
    const phoneNum = { number: null, phoneTypeId: 0, phoneId: 0 };
    const phoneNums = phones.filter(r => r.phoneId == id);
    if (phoneNums.length > 0) {
      return phoneNums[0];
    }
    return phoneNum;
  }

  phoneText(phone) {
    if (phone.number !== null) {
    return (`Id: ${phone.phoneId} Number: ${phone.number}`);
    }
    return 'Phone number missing';
  }

  render() {
    const {student, phones} = this.props;
    return (
      <Link className="row row-detail" to={'/student/' + student.studentId} style={{ textDecoration: 'none' }}>
        <div className="col-sm-1 item-detail">{student.studentId}</div>
        <div className="col-sm-2 item-detail">{student.lastName}</div>
        <div className="col-sm-2 item-detail">{student.firstName}</div>
        <div className="col-sm-5 item-detail">{this.phoneText(this.getPhoneNumber(phones, student.phoneId))}</div>
      </Link>
    );
  }
}

StudentListRow.propTypes = {
  student: PropTypes.object.isRequired,
  ranks: PropTypes.array.isRequired,
  phones: PropTypes.array.isRequired
};

export default StudentListRow;
