import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import ToggleNavMinimizeButton from './ToggleNavMinimizeButton';
class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state=
    {
      textCollapse: 'nav-link openNavText'
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    var css = (this.props.showHideSidenav === "nav-menu-minimized") ? "nav-menu-minimized" : "sidebar-minimized";
    document.body.classList.toggle(css);
    //const textCollapse = this.props.textCollapse;
    //console.log(textCollapse);
    this.state.textCollapse === "nav-link openNavText" ? this.setState({textCollapse: "nav-link collapseNavText navIconOnly"}) : this.setState({textCollapse: "nav-link openNavText"});
  }
  render() {
    const loading = this.props.loading;

    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <IndexLink to="/login" className={this.state.textCollapse}><i className="fas fa-home fa-2x navIcon"></i> <span className = "navSpan">Login Screen</span> </IndexLink>
            </li>
            <li className="nav-item">
              <IndexLink to="/" className={this.state.textCollapse}><i className="fas fa-home fa-2x navIcon"></i> <span className = "navSpan">Home</span> </IndexLink>
            </li>
            <li className="nav-item">
              <IndexLink to="/customers" className={this.state.textCollapse}><i className="fas fa-user fa-2x navIcon"></i> <span className = "navSpan">Customers</span> </IndexLink>
            </li>
            <li className="nav-item">
              <IndexLink to="/clientmap" className={this.state.textCollapse}><i className="fas fa-map-marker-alt fa-2x navIcon"></i> <span className = "navSpan">Client Map</span> </IndexLink>
            </li>
            <li className="nav-item">
              <IndexLink to="/inProduction" className={this.state.textCollapse}><i className="fas fa-user fa-2x navIcon"></i> <span className = "navSpan">Dev Production</span> </IndexLink>
            </li>
           
           
            <li className="nav-item">
              <Link to="/accounts" className={this.state.textCollapse}><i className="far fa-address-card fa-2x navIcon"></i> <span className = "navSpan">Accounts</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/invoices" className={this.state.textCollapse}><i className="fas fa-file-alt fa-2x navIcon"></i> <span className = "navSpan">Invoices</span> </Link>
            </li>
            <li className="nav-item">
              <Link to="/persons" className={this.state.textCollapse}><i className="fas fa-user fa-2x navIcon"></i> <span className = "navSpan">Persons</span> </Link>
            </li>
          
           
          </ul>
          {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
        <ToggleNavMinimizeButton  textCollapse = {this.state.textCollapse} toggleMenu = {this.toggleMenu} />
      </div>
    );
  }
}

Navigation.propTypes = {
  loading: PropTypes.bool.isRequired,
  textCollapse: PropTypes.string
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
