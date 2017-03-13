import { UPDATE_TIMER } from '../actions/types';

export default function (state = 0, action) {
  switch(action.type) {
    case UPDATE_TIMER:
      return state + 1;
  }
  return state;
}