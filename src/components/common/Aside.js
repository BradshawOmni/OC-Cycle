import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import UserToggleButton from './UserToggleButton';

class Aside extends PureComponent {
  render() {
    console.log(this.props);
    const loading = this.props.loading;
    return (
      <aside className="aside-menu">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#timeline" role="tab">
              <i className="icon-list"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#messages" role="tab">
              <i className="icon-speech"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#settings" role="tab">
              <i className="icon-settings"></i>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="timeline" role="tabpanel">
            <div className="list-group">
              <div className="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">User Roles</div>
              <div className="list-group-item list-group-item-accent-warning list-group-item-divider">
                <UserToggleButton content = "Sales"/>
                <UserToggleButton content = "Billing"/>
                <UserToggleButton content = "Dev Manager"/>
                <UserToggleButton content = "Dev Team"/>
                <UserToggleButton content = "Executive"/>
                <UserToggleButton content = "Super Admin"/>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

Aside.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Aside;
