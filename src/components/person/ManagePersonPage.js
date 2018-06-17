import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as personActions from '../../actions/personActions';
import * as phoneActions from '../../actions/phoneActions';
import PersonForm from './PersonForm';
import toastr from 'toastr';
import moment from 'moment';

class ManagePersonPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      person: Object.assign({}, this.props.person),
      errors: {},
      saving: false
    };

    //this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.updatePersonState = this.updatePersonState.bind(this);
    this.savePerson = this.savePerson.bind(this);
    this.handleDobDateChange = this.handleDobDateChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.person.personId != nextProps.person.personId) {
      // necessary to populate form whene existing person is loaded directly.
      this.setState({ person: Object.assign({}, nextProps.person) });
    }
  }

  getPhoneNumber(phones, id) {
    const phoneNum = { number: 'Number Not Found', phoneTypeId: 0, phoneId: 0 };
    const phoneNums = phones.filter(r => r.phoneId == id);
    if (phoneNums.length > 0) {
      return phoneNums[0];
    }
    return phoneNum;
  }

  updatePersonState(event) {
    const field = event.target.name;
    let person = this.state.person;
    person[field] = event.target.value;
    return this.setState({ person: person });
  }

  personFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.person.lastName.length < 3) {
      errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.person.firstName.length < 3) {
      errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  savePerson(event) {
    event.preventDefault();
    if (!this.personFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.savePerson(this.state.person)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Person saved!');
    this.context.router.push('/persons');
  }

  handleDobDateChange(date) {
    let person = this.state.person;
    person.dateOfBirth = date.format();
    return this.setState({ person: person });
  }

  render() {
    return (
      <PersonForm
        onChange={this.updatePersonState}
        onSave={this.savePerson}
        person={this.state.person}
        errors={this.state.errors}
        saving={this.state.saving}
        sexes={this.props.sexes}
        dobChange={this.handleDobDateChange}
      />
    );
  }
}

ManagePersonPage.propTypes = {
  person: PropTypes.object.isRequired,
  sexes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
ManagePersonPage.contextTypes = {
  router: PropTypes.object
};

function getPersonById(persons, personId) {
  const person = persons.filter(person => person.personId == personId);
  if (person) return person[0]; // since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const personId = ownProps.params.id; // from the path '/person/:id'

  let person = {
    personId: 0,
    personTypeId: 0,
    alias: '',
    dateOfBirth: '1900-01-01T00:00:00',
    lastName: '',
    firstName: '',
    middleName: null,
    socialSecurityNumber: '',
    ssnSalt: '',
    sex: '',
    raceId: 0,
    prefix: '',
    suffix: ''
  };

  if (personId && state.persons.length > 0) {
    person = getPersonById(state.persons, personId);
  }

  const sexes = [
    {value: 'M', text: 'Male'},
    {value: 'F', text: 'Female'}
  ];

  return {
    person: person,
    sexes: sexes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePersonPage);
