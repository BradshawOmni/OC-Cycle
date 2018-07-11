import actions from '../actions/mirrorActions';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  console.log(action.type+'---->');
    switch (action.type) {
    case actions.LOAD_USERS_SUCCESS:
      return action.users.sort((user1, user2) => user1.lastName.localeCompare(user2.lastName));
    case actions.LOAD_USER:
      return action.users.filter(user => user._id === action.userId);
    case actions.UPDATE_USER_SUCCESS:
    console.log('!');
      return [
        ...state.filter(user => user._id !== action.user._id).sort((user1, user2) => user1.lastName.localeCompare(user2.lastName)),
        Object.assign({}, action.user)
      ];
    default:
      return state;
  }
}
