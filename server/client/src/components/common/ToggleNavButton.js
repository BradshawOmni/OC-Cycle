

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ToggleNavButton extends PureComponent {
    constructor(props){
    super(props);
    }
    toggleMenu() {
    var css = (this.props.showHideSidenav === "nav-menu-hidden") ? "nav-menu-hidden" : "sidebar-lg-show";
    document.body.classList.toggle(css);
    }
  render() {
   
    return (
      <div className = 'toggleNavButton'>
        <button className="navbar-toggler sidebar-toggler d-md-down-none"
          onClick={this.toggleMenu.bind(this)}>
          <i className="fas fa-bars"></i>       
        </button>
      </div>
    );
  }
}

ToggleNavButton.propTypes = {
 
  onClick: PropTypes.func
};

export default ToggleNavButton;
