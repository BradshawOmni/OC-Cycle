import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function customerReducer(state = initialState.customers, action) {
  console.log(action.type+'---->');
    switch (action.type) {
    case actions.LOAD_CUSTOMERS_SUCCESS:
      return action.customers.sort((customer1, customer2) => customer1.cuName.localeCompare(customer2.cuName));
      console.log(customer1.cuName+'----');
    case actions.CREATE_CUSTOMER_SUCCESS:
     console.log([...state, Object.assign({}, action.customer)]);
      return [
        ...state,
        Object.assign({}, action.customer)
        
      ];
    case actions.UPDATE_CUSTOMER_SUCCESS:
    console.log('!');
      return [
        ...state.filter(customer => customer.customerId !== action.customer.customerId).sort((customer1, customer2) => customer1.cuName.localeCompare(customer2.cuName)),
        Object.assign({}, action.customer)
      ];
    default:
      return state;
  }
}
