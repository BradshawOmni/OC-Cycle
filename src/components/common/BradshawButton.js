import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BradshawButton extends Component {
  render() {
    const {name, onClick, content, btnClass} = this.props;
    const buttonClass = btnClass || 'btn btn-primary';
    return (
      <div>
        <button className={buttonClass}
          name={name}
          onClick={onClick}>
          {content}
        </button>
      </div>
    );
  }
}

BradshawButton.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default BradshawButton;
