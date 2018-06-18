import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CustomerListRow from './CustomerListRow';

class CustomerList extends Component {
  render() {
    const {customers} = this.props;
    console.log(customers+'<<----Customer List Empty Var----');
    return (
      <div className="col-md-12">

        <div className="tableHeader">
         
          <div className="col-sm-3">Credit Union</div>
          <div className="col-sm-2">Contact</div>
          <div className="col-sm-3">Email</div>
          <div className="col-sm-2">Phone</div>
        </div>
        <div className="list-group">
        {customers.map(customer =>
          <CustomerListRow key={customer.customerId} customer={customer} />
          )}
        </div>
      </div>
    );
  }
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerList;
