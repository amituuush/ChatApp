import { FETCH_MESSAGES, SEND_MESSAGE, SMILE_REACTION } from '../actions/types';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    case SEND_MESSAGE:
      return state.concat(action.payload);
    case SMILE_REACTION:
      return state.map(message => {
        if (message.id === action.messageId) {
          message.reaction = 'smiley';
          return message;
        } else { return message; }
      });
    case FETCH_MESSAGES_PAGINATION:
      return [action.payload, ...state];
    case FETCH_MESSAGES_POLL:
      // compare response data to last 10 items in state or less
      // if equal => return state
      // if not equal => find how many messages have been added and append to state
  }
  return state;
}
/*
[1,2,3]
[1,2,3,4 | 5,6,7,8]
*/

// create index at last element in response data
// continue iterating until element in response data is equal to last element in current state
// if loop reaches end, store that data and recursively send get request while increasing page query
// append tail of response data to current state
// what if there are more than 10 new messages?