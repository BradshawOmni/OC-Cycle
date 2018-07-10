

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ToggleNavMinimizeButton extends Component {
  constructor(props){
    super(props);
    
  }

  render() {
    const textCollapse = this.props.textCollapse;
    const toggleMenu = this.props.toggleMenu;
    return (
      <div className = 'ToggleNavMinimizeButton'>
        <button className="navMinToggle sidebar-minimizer brand-minimizer"
          onClick={toggleMenu}>
            
        </button>
      </div>
    );
  }
}

ToggleNavMinimizeButton.propTypes = {
  textCollapse: PropTypes.string.isRequired
};

export default ToggleNavMinimizeButton;
