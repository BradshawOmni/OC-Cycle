import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddressList from './AddressList';
import * as addressActions from '../../actions/addressActions';
import * as addressTypeActions from '../../actions/addressTypeActions';
import { browserHistory } from 'react-router';

class AddresssPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddAddressPage = this.redirectToAddAddressPage.bind(this);
  }

  redirectToAddAddressPage() {
    browserHistory.push('/address');
  }

  render() {
    const { addresses } = this.props;
    const { states } = this.props;
    const { addressTypes } = this.props;
    return (
      <div>
        <h1>Addresses</h1>
        <input
          type="submit"
          value="Add Address"
          className="btn btn-secondary"
          onClick={this.redirectToAddAddressPage}
        />
        <AddressList addresses={addresses} states={states} addressTypes={addressTypes} />
      </div>
    );
  }
}

AddresssPage.propTypes = {
  addresses: PropTypes.array.isRequired,
  addressTypes: PropTypes.array.isRequired,
  states: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    addresses: state.addresses,
    addressTypes: state.addressTypes,
    states: state.states
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addressActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddresssPage);
