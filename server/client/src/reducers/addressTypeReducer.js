import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function addressTypeReducer(state = initialState.addressTypes, action) {
  switch (action.type) {
    case actions.LOAD_ADDRESS_TYPES_SUCCESS:
      return action.addressTypes;
    case actions.CREATE_ADDRESS_TYPE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.addressType)
      ];
    case actions.UPDATE_ADDRESS_TYPE_SUCCESS:
      return [
        ...state.filter(addressType => addressType.addressTypeId !== action.addressType.addressTypeId),
        Object.assign({}, action.addressType)
      ];
    default:
      return state;
  }
}

