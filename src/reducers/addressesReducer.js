import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function addressReducer(state = initialState.addresses, action) {
  switch (action.type) {
    case actions.LOAD_ADDRESSES_SUCCESS:
      return action.addresses.sort((addr1, addr2) => addr1.addressLine1.localeCompare(addr2.addressLine1));
    case actions.CREATE_ADDRESS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.address)
      ];
    case actions.UPDATE_ADDRESS_SUCCESS:
      return [
        ...state.filter(address => address.addressId !== action.address.addressId),
        Object.assign({}, action.address)
      ];
    default:
      return state;
  }
}

/*
.sort((addr1, addr2) => addr1.addressLine1.localeCompare(addr2.addressLine1))
*/
