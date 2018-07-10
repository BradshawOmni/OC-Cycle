import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NameForm from '../name/NameForm';
import toastr from 'toastr';
import moment from 'moment';

class ManageNamePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      account: Object.assign({}, this.props.account),
      errors: {},
      saving: false
    };

    //this.getNameNumber = this.getNameNumber.bind(this);
    this.updateNameState = this.updateNameState.bind(this);
    this.saveName = this.saveName.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.account.accountId != nextProps.account.accountId) {
      // necessary to populate form whene existing name is loaded directly.
      this.setState({naccountame: Object.assign({}, nextProps.account)});
    }
  }

  updateNameState(event) {
    const field = event.target.name;
    let name = this.state.account.owner;
    name[field] = event.target.value;
    return this.setState({name: name});
  }

  nameFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.account.owner.lname.length < 2) {
      errors.lName = 'Name number must be at least 2 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  render() {
    return (
      <NameForm
        onChange={this.updateNameState}
        onSave={this.saveName}
        name={this.state.account.owner}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageNamePage.propTypes = {
  account: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
ManageNamePage.contextTypes = {
  router: PropTypes.object
};

function getAccountById(accounts, accountId) {
  const account = accounts.filter(account => account.accountId == accountId);
  if (account) return account[0]; // since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const accountId = ownProps.params.id; // from the path '/name/:id'

  let account = {
    accountId: 0,
    owner: { lname: '', fname: '' },
    address: { addressLine1: '', addressLine2: '', city: '', stateId: 0, zip: '', type: 'Home' },
    phones: [{
      phone: {
        number: '',
        type: 'Cell',
        isPrimary: true
      }
    }],
    emails: [{
      email: '',
      type: 'Home',
      isPrimary: true
    }],
    students: [{
      student: {
        fname: '',
        lname: '',
        age: 0,
        sex: 'U'
      }
    }]
  };

  if (accountId && state.account.length > 0) {
    name = getAccountById(state.accounts, accountId);
  }

  return {
    account: account
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(accountActions, dispatch)
//   };
// }

export default connect(mapStateToProps)(ManageNamePage);
// export default connect(mapStateToProps, mapDispatchToProps)(ManageNamePage);
