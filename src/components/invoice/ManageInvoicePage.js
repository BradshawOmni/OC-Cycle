import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as invoiceActions from '../../actions/invoiceActions';
import InvoiceForm from '../invoice/InvoiceForm';
import toastr from 'toastr';

class ManageInvoicePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      invoice: Object.assign({}, this.props.invoice),
      errors: {},
      saving: false,
      deleting: false
    };

    //this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.updateInvoiceState = this.updateInvoiceState.bind(this);
    this.saveInvoice = this.saveInvoice.bind(this);
    this.deleteInvoiceInner = this.deleteInvoiceInner.bind(this);
  }

  updateInvoiceState(event) {
    const field = event.target.name;
    let invoice = this.state.invoice;
    invoice[field] = event.target.value;
    return this.setState({ invoice: invoice });
  }

  invoiceFormIsValid() {
    let formIsValid = true;
    let errors = {};

    this.setState({ errors: errors });
    return formIsValid;
  }

  saveInvoice(event) {
    event.preventDefault();
    if (!this.invoiceFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.saveInvoice(this.state.invoice)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Invoice saved!');
    this.context.router.push('/invoices');
  }

  deleteInvoiceInner(event) {
    event.preventDefault();
    this.setState({ deleting: true });
    this.props.actions.deleteInvoice(this.state.invoice)
      .then(() => { this.redirectDelete(); })
      .catch(error => {
        this.setState({ deleting: false });
        toastr.error(error);
      });
  }

  redirectDelete() {
    this.setState({ deleting: false });
    toastr.success('Invoice Deleted!');
    this.context.router.push('/invoices');
  }

  render() {
    return (
      <InvoiceForm
        onChange={this.updateInvoiceState}
        onSave={this.saveInvoice}
        onDelete={this.deleteInvoiceInner}
        invoice={this.state.invoice}
        errors={this.state.errors}
        saving={this.state.saving}
        deleting={this.deleting}
      />
    );
  }
}

ManageInvoicePage.propTypes = {
  invoice: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
ManageInvoicePage.contextTypes = {
  router: PropTypes.object
};

function getInvoiceById(invoices, id) {
  const invoice = invoices.filter(invoice => invoice.invoiceId == id);
  if (invoice) return invoice[0]; // since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const invoiceId = ownProps.params.id; // from the path '/invoice/:id'

  let invoice = {
    invoiceId: 0,
    invoiceTypeId: 0,
    invoiceNumber: '',
    paid: false,
    description: '',
    invoiceLine: [
      {invoiceLineId: 0, description: '', quantity: 0, cost: 0.00, paid: false}
    ]
  };

  if (invoiceId && state.invoices.length > 0) {
    invoice = getInvoiceById(state.invoices, invoiceId);
  }

  return {
    invoice: invoice
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(invoiceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageInvoicePage);
