import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddressListRow from './AddressListRow';

class AddressList extends Component {
  render () {
    const {addresses, states, addressTypes} = this.props;
    return (
      <div>
        <div className="row row-title">
          <div className="col-sm-1">ID</div>
          <div className="col-sm-3">Address Line1</div>
          <div className="col-sm-3">City</div>
          <div className="col-sm-2">State</div>
          <div className="col-sm-1">Zip</div>
          <div className="col-sm-2">Type</div>
        </div>
        {addresses.map(address =>
          <AddressListRow key={address.addressId} address={address} states={states} addressTypes={addressTypes} />
        )}
      </div>
    );
  }
}

AddressList.propTypes = {
  addresses: PropTypes.array.isRequired,
  addressTypes: PropTypes.array.isRequired,
  states: PropTypes.array.isRequired
};

export default AddressList;
