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
        
      <div className="container omniComp">
        <div className="row">
          <div className = "pageHeaders">
              <div className="col-md-4">
                  <h2>Customer List</h2>
              </div>
              <div className="col-md-8 text-right">
              <input
                type="submit"
                value="Add New Customer"
                className="btn OmniCommanderBtn"
                onClick={this.redirectToAddCustomerPage}
              />
              </div>
          </div>
          <CustomerList customers={customers} />
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
