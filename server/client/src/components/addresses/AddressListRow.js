import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { loadAddressTypes } from '../../actions/addressTypeActions';

class AddressListRow extends Component {
  getStateName(states, id) {
    const state = states.filter(r => r.stateId == id);
    if (state.length > 0) {
      return state[0].name;
    }
    return 'State Not Found';
  }

  getAddressType(addressTypes, addressTypeId) {
    let addressType = {addressTypeId: 0, description: ''};
    const typeName = addressTypes.filter(at => at.addressTypeId == addressTypeId);
    if (typeName.length > 0) {
      addressType = typeName[0];
      return addressType.description;
    }

    return 'Type Unknown';
  }

  render() {
    const {address, states, addressTypes} = this.props;
    return (
      <Link className="row row-detail" to={'/address/' + address.addressId} style={{textDecoration: 'none'}}>
        <div className="col-sm-1 item-detail">{address.addressId}</div>
        <div className="col-sm-3 item-detail">{address.addressLine1}</div>
        <div className="col-sm-3 item-detail">{address.city}</div>
        <div className="col-sm-2 item-detail">{this.getStateName(states, address.stateId)}</div>
        <div className="col-sm-1 item-detail">{address.zip}</div>
        <div className="col-sm-2 item-detail">{this.getAddressType(addressTypes, address.addressTypeId)}</div>
      </Link>
    );
  }
}

AddressListRow.propTypes = {
  address: PropTypes.object.isRequired,
  addressTypes: PropTypes.array.isRequired,
  states: PropTypes.array.isRequired
};

export default AddressListRow;
