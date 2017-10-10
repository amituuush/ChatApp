import { SELECT_CURRENT_ROOM, ADD_USER_TO_ROOM } from '../actions/types';

export default function (state = {}, action) {
  switch(action.type) {
    case SELECT_CURRENT_ROOM:
      return action.payload;
    case ADD_USER_TO_ROOM:
      let newUser = true;
      let users = [];

      for (var i = 0; i < state.users.length; i++) {
        let user = state.users[i];
        (user === action.name) ? newUser = false : '';
        users.push(user);
      }
      newUser ? users.push(action.name) : '';

      return { ...state, users };
  }
  return state;
}