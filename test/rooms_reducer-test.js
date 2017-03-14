import expect from 'expect';
import roomsReducer from '../src/reducers/rooms_reducer';
import axios from 'axios';
import { FETCH_ROOMS } from '../src/actions/types';

describe('roomsReducer', () => {

  it('returns the initial state', () => {
   expect(roomsReducer(undefined, {})).toEqual([]);
  });

  it('handles the FETCH_ROOMS action', () => {
   expect(roomsReducer([], { 
     type: FETCH_ROOMS, 
     payload: [1, 2, 3, 4, 5, 6] 
  }).length).toEqual(6);
  });
});