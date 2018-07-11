import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../../actions/customerActions';
import ProductionList from './ProductionList';
import { browserHistory } from 'react-router';

class InProduction extends React.Component {
    
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
        <div className="row omniComp">
          <div className = "col-md-12 ">
            <ProductionList customers={customers} />
          </div>
        </div>
      </div>   
    );
    
  }
}
InProduction.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(InProduction);
