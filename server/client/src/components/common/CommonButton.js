import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class CommonButton extends PureComponent {
  render() {
    const {name, onClick, content} = this.props;
    return (
      <div>
        <button className="btn btn-primary"
          name={name}
          onClick={onClick}>
          {content}
        </button>
      </div>
    );
  }
}

CommonButton.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CommonButton;
