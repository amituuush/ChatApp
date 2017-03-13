import { combineReducers } from 'redux';
import roomsReducer from './rooms_reducer';
import currentRoomReducer from './current_room_reducer';
import messagesReducer from './messages_reducer';
import saveUserReducer from './save_user_reducer';
import updateTimeReducer from './update_time_reducer';

export const rootReducer = combineReducers({
  rooms: roomsReducer,
  currentRoom: currentRoomReducer,
  messages: messagesReducer,
  name: saveUserReducer,
  timeOnline: updateTimeReducer
});
