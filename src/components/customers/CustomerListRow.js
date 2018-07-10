import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class CustomerListRow extends Component {

  render() {
    const {customer} = this.props;
    return (

      <Link className="list-group-item list-group-item-action flex-column align-items-start" to={'/customer/' + customer._id}  >
        <div className="row">  
          <div className="col-sm-3"><strong>{customer.cuName}</strong></div>
          <div className="col-sm-2">{customer.contactName}</div>
          <div className="col-sm-3">{customer.contactEmail}</div>
          <div className="col-sm-2">{customer.contactNumber}</div>
        </div>
      </Link>
    );
  }
}

CustomerListRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerListRow;
