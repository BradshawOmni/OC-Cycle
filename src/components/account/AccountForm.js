import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {browserHistory} from 'react-router';

class AccountForm extends Component {
  render() {
    const {account, allStates, onSave, onDelete, onChange, saving, deleting, errors} = this.props;
    const returnToPreviousPage = () => {
      browserHistory.push('/accounts');
    };

    const saveButton = account.accountId < 0 ? (
      <button
        type="submit"
        disabled={saving}
        className="btn btn-primary btn-lg mr-1"
        onClick={onSave}>
        {saving ? 'Saving...' : 'Save'}
      </button>
    ) : '';

    const deleteButton = account.accountId < 0 ? (
      <button
        type="submit"
        disabled={deleting}
        className="btn btn-primary btn-lg mr-1"
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
              <div className="col-md-4">
                  <h2>Account Details</h2>
              </div>
          </div>
        </div>
        
        
        
        <form>
          <div className="row">
            <div className="col-lg-3">
              <TextInput
                disabled={disableText}
                name="fname"
                label="First Name"
                value={account.owner.fname}
                onChange={onChange}
                error={errors.name} />
            </div>
            <div className="col-lg-3">
              <TextInput
                disabled={disableText}
                name="lname"
                label="Last Name"
                value={account.owner.lname}
                onChange={onChange}
                error={errors.name} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2"><h4>Address:</h4></div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <TextInput
                disabled={disableText}
                name="addressLine1"
                label="Line 1"
                value={account.address.addressLine1}
                onChange={onChange}
                error={errors.addressLine1} />
            </div>
            <div className="col-lg-3">
              <TextInput
                disabled={disableText}
                name="addressLine2"
                label="Line 2"
                value={account.address.addressLine2}
                onChange={onChange}
                error={errors.addressLine2} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <TextInput
                disabled={disableText}
                name="city"
                label="City"
                value={account.address.city}
                onChange={onChange}
                error={errors.city} />
            </div>
            <div className="col-sm-3">
              <SelectInput
                disabled={disableSelect}
                name="stateId"
                label="State"
                value={account.address.stateId.toString()}
                options={allStates}
                onChange={onChange}
                error={errors.stateId} />
            </div>
            <div className="col-sm-3">
              <TextInput
                disabled={disableText}
                name="zip"
                label="Zip"
                value={account.address.zip}
                onChange={onChange}
                error={errors.zip} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2"><h4>Phones:</h4></div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <TextInput
                disabled={disableText}
                name="phone"
                label="Phone"
                value={account.phones[0].number}
                onChange={onChange}
                error={errors.phone} />
            </div>
          </div>
          {saveButton}
          {deleteButton}
          <button className="btn btn-primary btn-lg mr-3"
            type="submit" onClick={returnToPreviousPage}>
            Back
        </button>
        </form>
      </div>
    );
  }
}

AccountForm.propTypes = {
  account: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  allStates: PropTypes.array.isRequired,
  saving: PropTypes.bool,
  deleting: PropTypes.bool,
  errors: PropTypes.object
};

export default AccountForm;
