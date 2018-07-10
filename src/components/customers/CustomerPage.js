import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../../actions/customerActions';
import CustomerList from './CustomerList';
import { browserHistory } from 'react-router';

class CustomerPage extends React.Component {
    
  constructor(props, context) {

    super(props, context);

    this.redirectToAddCustomerPage = this.redirectToAddCustomerPage.bind(this);
  }

  redirectToAddCustomerPage() {

    browserHistory.push('/customer');
  }

  render() {
    
    const { customers } = this.props;
    return (
      <div className="container-fluid">
      <div className="row">
        <div className = "col-md-12 ">
            <div className = "pageHeaders">
                  <h1>Customer List</h1>
            </div>
            <div className = "row">
              <div className = "col-md-12">
                <div className = "btnPosition">
                <input
                type="submit"
                value="Add New Customer"
                className="btn OmniCommanderBtn float-right"
                onClick={this.redirectToAddCustomerPage}
                />
                </div>
              </div>
            </div>
        </div>
      </div> 
      <div className="row omniComp">
      <div className = "col-md-12 ">
        <CustomerList customers={customers} />
      </div>
      </div>
    </div>   
    );
    
  }
}
CustomerPage.propTypes = {
  customers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    customers: state.customers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
