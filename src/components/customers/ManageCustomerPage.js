import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../../actions/customerActions';

import CustomerForm from './CustomerForm';
import toastr from 'toastr';
import moment from 'moment';

class ManageCustomerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      customer: Object.assign({}, this.props.customer),
      errors: {},
      saving: false
    };

  
    this.updateCustomerState = this.updateCustomerState.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);
    
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.customer.customerId);
    if (this.props.customer.customerId != nextProps.customer.customerId) {
      // necessary to populate form whene existing person is loaded directly.
      this.setState({ customer: Object.assign({}, nextProps.customer) });
    }
  }



  updateCustomerState(event) {
    const field = event.target.name;
    let customer = this.state.customer;
    customer[field] = event.target.value;
    return this.setState({ customer: customer });
  }

  customerFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.customer.lastName.length < 3) {
      errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.customer.firstName.length < 3) {
      errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  saveCustomer(event) {
    event.preventDefault();
    if (!this.customerFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.saveCustomer(this.state.customer)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Customer saved!');
    this.context.router.push('/customer');
  }

  handleDobDateChange(date) {
    let customer = this.state.customer;
    customer.dateOfBirth = date.format();
    return this.setState({ customer: customer });
  }

  render() {
    return (
      <CustomerForm
        onChange={this.updateCustomerState}
        onSave={this.saveCustomer}
        customer={this.state.customer}
        errors={this.state.errors}
        saving={this.state.saving}
        sexes={this.props.sexes}
        dobChange={this.handleDobDateChange}
      />
    );
  }
}

ManageCustomerPage.propTypes = {
  customer: PropTypes.object.isRequired,
  sexes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
ManageCustomerPage.contextTypes = {
  router: PropTypes.object
};

function getCustomerById(customers, customerId) {
  console.log(customerId);
  const customer = customers.filter(customer => customer.customerId == customerId);
  if (customer) return customer[0]; // since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {

  const customerId = ownProps.params.id; // from the path '/customer/:id'
console.log(customerId);
  let customer = {
    customerId: 0,
    customerTypeId: 0,
    alias: '',
    dateOfBirth: '1900-01-01T00:00:00',
    lastName: '',
    firstName: '',
    middleName: null,
    socialSecurityNumber: '',
    ssnSalt: '',
    sex: '',
    raceId: 0,
    prefix: '',
    suffix: ''
  };

  if (customerId && state.customer.length > 0) {
    customer = getCustomerById(state.customer, customerId);
  }

  const sexes = [
    {value: 'M', text: 'Male'},
    {value: 'F', text: 'Female'}
  ];

  return {
    customer: customer,
    sexes: sexes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCustomerPage);
