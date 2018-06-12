import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accountActions from '../../actions/accountActions';
import AccountForm from '../account/AccountForm';
import toastr from 'toastr';

class ManageAccountPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      account: Object.assign({}, this.props.account),
      errors: {},
      saving: false,
      deleting: false
    };

    //this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.updateAccountState = this.updateAccountState.bind(this);
    this.saveAccount = this.saveAccount.bind(this);
    this.deleteAccountInner = this.deleteAccountInner.bind(this);
  }

  updateAccountState(event) {
    const field = event.target.name;
    let account = this.state.account;
    account[field] = event.target.value;
    return this.setState({ account: account });
  }

  accountFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.account.name.length < 5) {
      errors.name = 'Name must be at least 5 characters.';
      formIsValid = false;
    }

    if (this.state.account.description.length < 5) {
      errors.description = 'Description must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  saveAccount(event) {
    event.preventDefault();
    if (!this.accountFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.saveAccount(this.state.account)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Account saved!');
    this.context.router.push('/accounts');
  }

  deleteAccountInner(event) {
    event.preventDefault();
    this.setState({ deleting: true });
    this.props.actions.deleteAccount(this.state.account)
      .then(() => { this.redirectDelete(); })
      .catch(error => {
        this.setState({ deleting: false });
        toastr.error(error);
      });
  }

  redirectDelete() {
    this.setState({ deleting: false });
    toastr.success('Account Deleted!');
    this.context.router.push('/accounts');
  }

  render() {
    return (
      <AccountForm
        onChange={this.updateAccountState}
        onSave={this.saveAccount}
        onDelete={this.deleteAccountInner}
        account={this.state.account}
        errors={this.state.errors}
        allStates={this.props.states}
        saving={this.state.saving}
        deleting={this.deleting}
      />
    );
  }
}

ManageAccountPage.propTypes = {
  account: PropTypes.object.isRequired,
  states: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
ManageAccountPage.contextTypes = {
  router: PropTypes.object
};

function getAccountById(accounts, id) {
  const account = accounts.filter(account => account.accountId == id);
  if (account) return account[0]; // since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const accountId = ownProps.params.id; // from the path '/account/:id'

  let account = {
    accountId: 0,
    owner: {lname: '', fname: ''},
    address: {addressLine1: '', addressLine2: '', city: '', stateId: 0, zip: '', type: 'Home'},
    phones: [
      { number: '', type: 'Cell', isPrimary: true }
    ],
    emails: [
      { address: '', type: 'Home', isPrimary: true }
    ],
    students: [
      { fname: '', lname: '', age: 0, sex: 'U' }
    ]
  };

  if (accountId && state.accounts.length > 0) {
    account = getAccountById(state.accounts, accountId);
  }

  const statesFormattedForDropdown = state.states.map(state => {
    return {
      value: state.stateId.toString(),
      text: state.name
    };
  });

  return {
    account: account,
    states: statesFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAccountPage);
