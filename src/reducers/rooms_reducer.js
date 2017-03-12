import { FETCH_ROOMS } from '../actions/types';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_ROOMS:
      return action.payload;
  }
  return state;
}