import actions from '../actions/mirrorActions';
import initialState from './initialState';

export default function stateReducer(state = initialState.states, action) {
  switch (action.type) {
    case actions.LOAD_STATES_SUCCESS:
      return action.states;
    default:
      return state;
  }
}
