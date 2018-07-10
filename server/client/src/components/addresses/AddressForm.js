import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class AddressForm extends Component {

  returnToPreviousPage() {
    browserHistory.push('/addresses');
  }

  render() {
    const {address, allStates, addressTypes, onSave, onDelete, onChange, saving, deleting, errors} = this.props;

    const deleteButton = address.addressId > 0 ?
      (
        <div className="col-xs-1 mr-1">
          <button
            type="submit"
            disabled={deleting}
            className="btn btn-primary btn-lg"
            onClick={onDelete}>
            {deleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      ) : "";

    return (
      <div className="container">
        <form>
          <h1>Manage Academy</h1>
          <div className="row">
            <div className="col-sm-2">
              <SelectInput
                name="addressTypeId"
                label="Address Type"
                value={address.addressTypeId.toString()}
                options={addressTypes}
                onChange={onChange}
                error={errors.addressTypeId} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <TextInput
                name="addressLine1"
                label="Address Line 1"
                value={address.addressLine1}
                onChange={onChange}
                error={errors.line1} />
            </div>
            <div className="col-lg-3">
              <TextInput
                name="addressLine2"
                label="Address Line 2"
                value={address.addressLine2 ? address.addressLine2 : ""}
                onChange={onChange}
                error={errors.line2} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <TextInput
                name="city"
                label="City"
                value={address.city}
                onChange={onChange}
                error={errors.city} />
            </div>
            <div className="col-lg-2">
              <SelectInput
                name="stateId"
                label="State"
                value={address.stateId.toString()}
                options={allStates}
                onChange={onChange}
                error={errors.stateId} />
            </div>
            <div className="col-sm-3">
              <TextInput
                name="zip"
                label="Zip"
                value={address.zip}
                onChange={onChange}
                error={errors.zip} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 mr-1">
              <button
                type="submit"
                disabled={saving}
                className="btn btn-primary btn-lg"
                onClick={onSave}>
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
            {deleteButton}
            <div className="col-xs-1 mr-1">
              <button className="btn btn-primary btn-lg"
                type="submit" onClick={this.returnToPreviousPage}>
                Back
              </button>
            </div>
            <div className="col-xs-10" />
          </div>
        </form>
      </div>
    );
  }
}

AddressForm.propTypes = {
  allStates: PropTypes.array.isRequired,
  addressTypes: PropTypes.array.isRequired,
  address: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  deleting: PropTypes.bool,
  errors: PropTypes.object
};

export default AddressForm;
