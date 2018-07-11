import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountList from './AccountList';
import * as AccountActions from '../../actions/accountActions';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class AccountPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      deleting: false
    };

    this.redirectToAddAccountPage = this.redirectToAddAccountPage.bind(this);
  }

  redirectToAddAccountPage() {
    browserHistory.push('/Account');
  }

  render() {
    const {accounts} = this.props;
    return (
      <div className="container-fluid">
      <div className="row">
        <div className = "pageHeaders">
            <div className="col-md-4">
                <h2>Accounts</h2>
            </div>
            <div className="col-md-8 text-right">
                <input type="submit" value="Add Account" className="btn nextcareBtn" onClick={this.redirectToAddAccountPage} />
            </div>
        </div>
          <AccountList accounts={accounts} />
      </div>
  </div>
    );
  }
}

AccountPage.propTypes = {
  accounts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AccountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
