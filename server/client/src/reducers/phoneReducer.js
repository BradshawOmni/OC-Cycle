import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function phoneReducer(state = initialState.phones, action) {
  switch (action.type) {
    case actions.LOAD_PHONES_SUCCESS:
      return action.phones;
    case actions.CREATE_PHONE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.phone)
      ];
    case actions.UPDATE_PHONE_SUCCESS:
      return [
        ...state.filter(phone => phone.phoneId !== action.phone.phoneId),
        Object.assign({}, action.phone)
      ];
    default:
      return state;
  }
}
