import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as phoneActions from '../../actions/phoneActions';
import PhoneForm from '../phone/PhoneForm';
import toastr from 'toastr';
import moment from 'moment';

class ManagePhonePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      phone: Object.assign({}, this.props.phone),
      errors: {},
      saving: false
    };

    //this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.updatePhoneState = this.updatePhoneState.bind(this);
    this.savePhone = this.savePhone.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.phone.phoneId != nextProps.phone.phoneId) {
      // necessary to populate form whene existing phone is loaded directly.
      this.setState({ phone: Object.assign({}, nextProps.phone) });
    }
  }

  updatePhoneState(event) {
    const field = event.target.name;
    let phone = this.state.phone;
    phone[field] = event.target.value;
    return this.setState({ phone: phone });
  }

  phoneFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.phone.phoneNumber.length < 7) {
      errors.lastName = 'Phone number must be at least 7 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  savePhone(event) {
    event.preventDefault();
    if (!this.phoneFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.savePhone(this.state.phone)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Phone saved!');
    this.context.router.push('/phones');
  }

  render() {
    return (
      <PhoneForm
        onChange={this.updatePhoneState}
        onSave={this.savePhone}
        phone={this.state.phone}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManagePhonePage.propTypes = {
  phone: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
ManagePhonePage.contextTypes = {
  router: PropTypes.object
};

function getPhoneById(phones, phoneId) {
  const phone = phones.filter(phone => phone.phoneId == phoneId);
  if (phone) return phone[0]; // since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const phoneId = ownProps.params.id; // from the path '/phone/:id'

  let phone = {
    phoneId: 0,
    phoneNumber: '',
    extension: ''
  };

  if (phoneId && state.phones.length > 0) {
    phone = getPhoneById(state.phones, phoneId);
  }

  return {
    phone: phone
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(phoneActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePhonePage);
