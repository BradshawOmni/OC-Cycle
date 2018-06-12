import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import * as actions from '../../actions/accountActions';
import CommonButton from '../common/CommonButton';

class AccountListRow extends Component {
  render() {
    const account = this.props.account;
    return (
      <Link className="list-group-item list-group-item-action flex-column align-items-start" to={'/account/' + account.accountId}>
        <div className="row">
          <div className="col-sm-2">{account.accountId}</div>
          <div className="col-md-10">{account.owner.lname}, {account.owner.fname}</div>
        </div>
      </Link>
    );
  }
}

AccountListRow.propTypes = {
  account: PropTypes.object.isRequired
};

export default AccountListRow;
