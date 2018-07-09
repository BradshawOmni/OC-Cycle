import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class UserToggleMenu extends PureComponent {
  render() {
    const {name, onClick, content} = this.props;
    return (
      <div>
        <button className="btn OmniCommanderBtnFull"
          name={name}
          onClick={onClick}>
          {content}
        </button>
      </div>
    );
  }
}

UserToggleMenu.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default UserToggleMenu;