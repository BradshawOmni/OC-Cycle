import actions from '../actions/mirrorActions';
import initialState from './initialState';

export default function clientMapReducer(state = initialState.customers, action) {
    switch (action.type) {
    case actions.LOAD_CUSTOMERS_SUCCESS:
      return action.customers.sort((customer1, customer2) => customer1.cuName.localeCompare(customer2.cuName));
      console.log(customer1.cuName+'----');
    case actions.CREATE_CUSTOMER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.customer)
        
      ];
      console.log('----');
    case actions.UPDATE_CUSTOMER_SUCCESS:
      return [
        ...state.filter(customer => customer.customerId !== action.customer.customerId).sort((customer1, customer2) => customer1.cuName.localeCompare(customer2.cuName)),
        Object.assign({}, action.customer)
      ];
    default:
      return state;
  }
}
