import action from './mirrorActions';
import personApi from '../api/mockPerson';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadPersonsSuccess(persons) {
  return {
    type: action.LOAD_PERSONS_SUCCESS,
    persons
  };
}

export function loadPersonsFailed(message) {
  return {
    type: action.LOAD_PERSONS_FAILED,
    message
  };
}

export function createPersonSuccess(person) {
  return {
    type: action.CREATE_PERSON_SUCCESS,
    person
  };
}

export function createPersonFailed(message) {
  return {
    type: action.CREATE_PERSON_FAILED,
    message
  };
}

export function updatePersonSuccess(person) {
  return {
    type: action.UPDATE_PERSON_SUCCESS,
    person
  };
}

export function updatePersonFailed(message) {
  return {
    type: action.UPDATE_PERSON_FAILED,
    message
  };
}

export function loadPersons() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return personApi.getAllPersons().then(persons => {
        dispatch(loadPersonsSuccess(persons));
      });
    } catch (error) {
      return dispatch(loadPersonsFailed(error.message));
    }
  };
}

export function savePerson(person) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return personApi.savePerson(person).then(savedPerson => {
        person.personId ? dispatch(updatePersonSuccess(savedPerson)) :
          dispatch(createPersonSuccess(savedPerson));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return person.personId ? dispatch(updatePersonFailed(error.message)) :
        dispatch(createPersonFailed(error.message));
    }
  };
}
