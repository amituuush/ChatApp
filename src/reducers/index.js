import { combineReducers } from 'redux';
import roomsReducer from './rooms_reducer';

export const rootReducer = combineReducers({
  rooms: roomsReducer
});
