import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class PersonListRow extends Component {

  render() {
    const {person} = this.props;
    return (
      <Link className="list-group-item list-group-item-action flex-column align-items-start" to={'/person/' + person.personId} style={{ textDecoration: 'none' }}>
        <div className="row">
          <div className="col-sm-1">{person.personId}</div>
          <div className="col-sm-2">{person.lastName}</div>
          <div className="col-sm-2">{person.firstName}</div>
        </div>
      </Link>
    );
  }
}

PersonListRow.propTypes = {
  person: PropTypes.object.isRequired
};

export default PersonListRow;
