import { SELECT_CURRENT_ROOM, ADD_USER_TO_ROOM } from '../actions/types';

export default function (state = {}, action) {
  switch(action.type) {
    case SELECT_CURRENT_ROOM:
      return action.payload;
    case ADD_USER_TO_ROOM:
      let newState = Object.assign({}, state);
      let newUser = true;
      for (var i = 0; i < newState.users.length; i++) {
        if (newState.users[i] === action.payload) {
          newUser = false;
        }
      }
      if (newUser) {
        newState.users.push(action.payload);
      }
      return newState;
  }
  return state;
}