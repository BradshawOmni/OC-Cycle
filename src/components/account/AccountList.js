import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccountListRow from './AccountListRow';
import toastr from 'toastr';

class AccountList extends Component {
  render() {
    const accounts = this.props.accounts;
      return (
        <div className="col-md-12">
          <div className="tableHeader">
            <div className="col-sm-2">Customer ID</div>
            <div className="col-md-10">Customer Name</div>
          </div>
          <div className="list-group">
            {accounts.map(account =>
              <AccountListRow key={account.accountId}
                account={account} />
            )}
          </div>
        </div>
      );
    }
  }

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired
};

export default AccountList;
