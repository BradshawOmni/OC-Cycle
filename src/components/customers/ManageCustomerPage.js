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
      saving: false,
      deleting: false
    };
    this.updateCustomerState = this.updateCustomerState.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.customer._id != nextProps.customer._id) {
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

    if (this.state.customer.cuName.length < 3) {
      errors.cuName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.customer.contactName.length < 3) {
      errors.contactName = 'First name must be at least 3 characters.';
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
    let customer = this.state.customer;
    customer = JSON.stringify(customer);
    this.setState({ saving: true });
   
    this.props.actions.saveCustomer(customer);
    this.redirect('/customers');
      // .then((data) => 
      // {
      //   console.log('Redirecting');
      //   this.redirect();
      // })  
      // .catch(error => {
      //   this.setState({ saving: false });
      //   toastr.error(error);
      // });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Customer saved!');
    this.context.router.push('/customers');
  }

  render() {
   
    return (
     <CustomerForm
        onChange={this.updateCustomerState}
        onSave={this.saveCustomer}
        customer={this.state.customer}
        errors={this.state.errors}
        saving={this.state.saving}
        beenServed={this.props.beenServed}
        allStates={this.props.states}
      />
    );
  }
}
ManageCustomerPage.propTypes = {
  customer: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  beenServed: PropTypes.array.isRequired 
};

// Pull in the React Router context so router is available on this.context.router.
ManageCustomerPage.contextTypes = {
  router: PropTypes.object
};

function getCustomerById(customers, customerId) {
  const customer = customers.filter(customer => customer._id == customerId);
  if (customer) return customer[0]; // since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
 
  const customerId = ownProps.params.id; // from the path '/customer/:id'
  let customer = {
    customerId: 0,
    personTypeId: 0,
    cuName: '',
    contactName: '',
    contactEmail:'',
    contactNumber: '',
    walkThroughDate: '1900-01-01T00:00:00',
    contractSentDate: '1900-01-01T00:00:00',
    contractSignedDate: '1900-01-01T00:00:00',
    servicesProposed: '',
    servicesSold: '',
    beenServed: '',
    websitesClientLikes: '',
    interestingLinks: ''
   
  };
if (customerId && state.customers.length > 0) {
   customer = getCustomerById(state.customers, customerId);
}
const beenServed = [
  {value: 'true', text: 'True'},
  {value: 'false', text: 'False'}
];
  return {
    customer: customer,  
    beenServed: beenServed  
  };

}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCustomerPage);
