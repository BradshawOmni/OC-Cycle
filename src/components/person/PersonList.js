import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PersonListRow from './PersonListRow';

class PersonList extends Component {
  render() {
    const {persons} = this.props;
    return (
      <div className="col-md-12">
        <div className="tableHeader">
          <div className="col-sm-1">ID</div>
          <div className="col-sm-2">Last Name</div>
          <div className="col-sm-2">First Name</div>
        </div>
        <div className="list-group">
        {persons.map(person =>
          <PersonListRow key={person.personId} person={person} />
          )}
        </div>
      </div>
    );
  }
}

PersonList.propTypes = {
  persons: PropTypes.array.isRequired
};

export default PersonList;
