import { combineReducers } from 'redux';
import roomsReducer from './rooms_reducer';
import currentRoomReducer from './current_room_reducer';

export const rootReducer = combineReducers({
  rooms: roomsReducer,
  currentRoom: currentRoomReducer
});
