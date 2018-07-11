import actions from '../actions/mirrorActions';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  console.log(action.type+'---->');
    switch (action.type) {
    case actions.LOAD_USERS_SUCCESS:
      return action.users.sort((user1, user2) => user1.lastName.localeCompare(user2.lastName));
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
