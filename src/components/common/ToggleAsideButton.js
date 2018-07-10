

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ToggleAsideButton extends PureComponent {
    constructor(props){
    super(props);
    }
    toggleMenu() {
    var css = (this.props.showHideSidenav === "aside-menu-hidden") ? "aside-menu-hidden" : "aside-menu-lg-show";
    document.body.classList.toggle(css);
    }
  render() {
   
    return (
      <div>
        <button className="navbar-toggler sidebar-toggler d-md-down-none"
          onClick={this.toggleMenu.bind(this)}>
          <i className="fas fa-bars"></i>       
        </button>
      </div>
    );
  }
}

ToggleAsideButton.propTypes = {
 
  onClick: PropTypes.func
};

export default ToggleAsideButton;
