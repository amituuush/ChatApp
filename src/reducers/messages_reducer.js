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
  }
  return state;
}