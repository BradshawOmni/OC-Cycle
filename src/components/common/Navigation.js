import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

class Navigation extends PureComponent {
  render() {
    const loading = this.props.loading;
    return ( 
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav mt-8">
            <li className="nav-item">
              <IndexLink to="/" className="nav-link"><i className="fas fa-home"></i> Home </IndexLink>
            </li>
            <li className="nav-item">
              <Link to="/accounts" className="nav-link"><i className="fas fa-user"></i> Accounts</Link>
            </li>
            <li className="nav-item">
              <Link to="/invoices" className="nav-link"><i className="fas fa-file-alt"></i> Invoices </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><i className="fas fa-envelope-square"></i> Messages </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><i className="fas fa-seedling"></i> Room Feeds </Link>
            </li>
          </ul>
          {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Navigation;

/*
      <ul className="no-bullets">
        <li><IndexLink to="/"className="active">Home</IndexLink></li>
        <li><Link to="/accounts"className="active">Accounts</Link></li>
        <li><Link to="/about"className="active">About</Link></li>
      </ul>
      {" | "}
      <Link to="/courses"className="active">Courses</Link>
*/
