import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function personReducer(state = initialState.persons, action) {
  switch (action.type) {
    case actions.LOAD_PERSONS_SUCCESS:
      return action.persons.sort((person1, person2) => person1.lastName.localeCompare(person2.lastName));
    case actions.CREATE_PERSON_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.person)
      ];
    case actions.UPDATE_PERSON_SUCCESS:
      return [
        ...state.filter(person => person.personId !== action.person.personId).sort((person1, person2) => person1.lastName.localeCompare(person2.lastName)),
        Object.assign({}, action.person)
      ];
    default:
      return state;
  }
}
