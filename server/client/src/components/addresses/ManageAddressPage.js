import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as addressActions from '../../actions/addressActions';
import AddressForm from '../addresses/AddressForm';
import toastr from 'toastr';

class ManageAddressPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      address: Object.assign({}, this.props.address),
      errors: {},
      saving: false,
      deleting: false
    };

    //this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.updateAddressState = this.updateAddressState.bind(this);
    this.saveAddress = this.saveAddress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.address.addressId != nextProps.address.addressId) {
      // necessary to populate form whene existing address is loaded directly.
      this.setState({ address: Object.assign({}, nextProps.address) });
    }
  }

  updateAddressState(event) {
    const field = event.target.name;
    let address = this.state.address;
    address[field] = event.target.value;
    return this.setState({ address: address });
  }

  addressFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.address.addressLine1.length < 5) {
      errors.line1 = 'Address Line 1 must be at least 5 characters.';
      formIsValid = false;
    }

    if (this.state.address.city.length < 2) {
      errors.description = 'City must be at least 2 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  saveAddress(event) {
    event.preventDefault();
    if (!this.addressFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.saveAddress(this.state.address)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Address saved!');
    this.context.router.push('/addresses');
  }

  deleteAddressInner(event) {
    event.preventDefault();
    this.setState({ deleting: true });
    this.props.actions.deleteAddress(this.state.address)
      .then(() => { this.redirectDelete(); })
      .catch(error => {
        this.setState({ deleting: false });
        toastr.error(error);
      });
  }

  redirectDelete() {
    this.setState({ deleting: false });
    toastr.success('Address Deleted!');
    this.context.router.push('/addresses');
  }

  render() {
    return (
      <AddressForm
        onChange={this.updateAddressState}
        onSave={this.saveAddress}
        onDelete={this.deleteAddressInner}
        address={this.state.address}
        allStates={this.props.states}
        addressTypes={this.props.addressTypes}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageAddressPage.propTypes = {
  address: PropTypes.object.isRequired,
  addressTypes: PropTypes.array.isRequired,
  states: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
ManageAddressPage.contextTypes = {
  router: PropTypes.object
};

function getAddressById(addresses, id) {
  const address = addresses.filter(address => address.addressId == id);
  if (address) return address[0]; // since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const addressId = ownProps.params.id; // from the path '/address/:id'

  let address = { addressId: 0, addressTypeId: 0, addressLine1: '', addressLine2: '', city: '', zip: '', stateId: 0 };

  if (addressId && state.addresses.length > 0) {
    address = getAddressById(state.addresses, addressId);
  }

  const statesFormattedForDropdown = state.states.map(state => {
    return {
      value: state.stateId.toString(),
      text: state.name
    };
  });

  const addressTypesForrmatted = state.addressTypes.map(addrType => {
    return {
      value: addrType.addressTypeId.toString(),
      text: addrType.description
    };
  });

  return {
    address: address,
    states: statesFormattedForDropdown,
    addressTypes: addressTypesForrmatted
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addressActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAddressPage);
