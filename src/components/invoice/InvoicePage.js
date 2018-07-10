import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InvoiceList from './InvoiceList';
import * as InvoiceActions from '../../actions/invoiceActions';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class InvoicePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      deleting: false
    };

    this.redirectToAddInvoicePage = this.redirectToAddInvoicePage.bind(this);
  }

  redirectToAddInvoicePage() {
    browserHistory.push('/invoice');
  }

  render() {
    const {invoices} = this.props; // fas fa-plus-square
    return (
      <div className="container-fluid">
        <div className="row">
          <div className = "pageHeaders">
              <div className="col-md-4">
                  <h2>Invoices</h2>
              </div>
              <div className="col-md-8 text-right">
              <input
                type="submit"
                value="Add Invoice"
                className="btn nextcareBtn"
                onClick={this.redirectToAddInvoicePage}
              />
              </div>
          </div>
            <InvoiceList invoices={invoices} />
        </div>
      </div>
    );
  }
}

InvoicePage.propTypes = {
  invoices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    invoices: state.invoices
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(InvoiceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicePage);
