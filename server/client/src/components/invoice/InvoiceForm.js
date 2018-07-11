import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {browserHistory} from 'react-router';
import InvoiceItemList from './InvoiceItemList';

class InvoiceForm extends Component {
  render() {
    const {invoice, onSave, onDelete, onChange, saving, deleting, errors} = this.props;
    const returnToPreviousPage = () => {
      browserHistory.push('/invoices');
    };

    const saveButton = invoice.invoiceId < 0 ? (
      <button
        type="submit"
        disabled={saving}
        className="btn nextcareBtn"
        onClick={onSave}>
        {saving ? 'Saving...' : 'Save'}
      </button>
    ) : '';

    const deleteButton = invoice.invoiceId < 0 ? (
      <button
        type="submit"
        disabled={deleting}
        className="btn nextcareBtn"
        onClick={onDelete}>
        {deleting ? 'Deleting...' : 'Delete'}
      </button>
    ) : '';

    const disableText = true;
    const disableSelect = true;
    return (
      <div className="container-fluid">
      <div className="row">
        <div className = "pageHeaders">
            <h2>Manage Invoice</h2>
        </div>
        </div>
        <div className="row">
          <div className="invoiceTitle">
          <h3>
          {invoice.title}
          </h3>
          </div>
        </div>
        <InvoiceItemList invoice={invoice} />
        <div className="row mt-3">
          {saveButton}
          {deleteButton}
          <button className="btn nextcareBtn"
            type="submit" onClick={returnToPreviousPage}>
            Back
        </button>
        </div>
      </div>
     
    );
  }
}

InvoiceForm.propTypes = {
  invoice: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  deleting: PropTypes.bool,
  errors: PropTypes.object
};

export default InvoiceForm;
