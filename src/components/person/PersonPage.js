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
      <div className="container-fluid">
        <div className="row">
          <div className = "pageHeaders">
              <div className="col-md-4">
                  <h2>Person List</h2>
              </div>
              <div className="col-md-8 text-right">
              <input
                type="submit"
                value="Add Person"
                className="btn nextcareBtn"
                onClick={this.redirectToAddPersonPage}
              />
              </div>
          </div>
          <PersonList persons={persons} />
        </div>
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
