import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

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
            <div className="list-group list-group-accent">
              <div className="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Today</div>
              <div className="list-group-item list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Meeting with
                  <strong>Lucas</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>  1 - 3pm</small>
                <small className="text-muted">
                  <i className="icon-location-pin"></i>  Palo Alto, CA</small>
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
