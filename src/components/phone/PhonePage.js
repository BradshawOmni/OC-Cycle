import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as studentActions from '../../actions/studentActions';
import * as rankActions from '../../actions/rankActions';
import PhoneList from './PhoneList';
import { browserHistory } from 'react-router';

class PhonesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddPhonePage = this.redirectToAddPhonePage.bind(this);
  }

  redirectToAddPhonePage() {
    browserHistory.push('/phone');
  }

  render() {
    const { phones } = this.props;
    return (
      <div>
        <h1>Phones</h1>
        <input
          type="submit"
          value="Add Phone"
          className="btn btn-secondary"
          onClick={this.redirectToAddPhonePage}
        />
        <PhoneList phones={phones} />
      </div>
    );
  }
}

PhonesPage.propTypes = {
  phones: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    phones: state.phones
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(studentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhonesPage);
