import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as personActions from '../../actions/personActions';
import PersonList from './PersonList';
import { browserHistory } from 'react-router';

class PersonsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddPersonPage = this.redirectToAddPersonPage.bind(this);
  }

  redirectToAddPersonPage() {
    browserHistory.push('/person');
  }

  render() {
    const { persons } = this.props;
    return (
      <div>
        <h1>Persons</h1>
        <input
          type="submit"
          value="Add Person"
          className="btn btn-secondary"
          onClick={this.redirectToAddPersonPage}
        />
        <PersonList persons={persons} />
      </div>
    );
  }
}

PersonsPage.propTypes = {
  persons: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    persons: state.persons
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonsPage);
