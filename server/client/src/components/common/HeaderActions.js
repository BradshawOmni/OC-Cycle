import React from 'react';
import PropTypes from 'prop-types';

class HeaderActions extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { frame: 1 };
  }

  componentDidMount() {  
  }

  componentWillUnmount() {
  }

  render() {
   console.log('!');
  }
}

HeaderActions.defaultProps = {
  interval: 300,
  dots: 3
};

HeaderActions.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number
};

export default HeaderActions;
