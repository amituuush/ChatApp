import { expect } from 'chai';
import roomsReducer from '../src/reducers/rooms_reducer';
import updateTimeReducer from '../src/reducers/update_time_reducer';
import * as actions from '../src/actions';
import { FETCH_ROOMS, UPDATE_TIMER } from '../src/actions/types';

describe('REDUCERS', () => {

  describe('roomsReducer', () => {
    it('should return the initial state', () => {
      expect(roomsReducer(undefined, {})).to.deep.equal([]);
    });

    it('should return the FETCH_ROOMS action payload', () => {
      const action = { 
        type: FETCH_ROOMS, 
        payload: [1, 2, 3, 4, 5, 6] 
      };
      expect(roomsReducer([], action)).to.have.length(6);
    });
  });

  describe('updateTimeReducer', () => {
    it('should add one to the state', () => {
      const action = { type: UPDATE_TIMER };
      expect(updateTimeReducer(0, action)).to.deep.equal(1);
    });
  });

  describe('saveUserReducer', () => {
    it('should receive a string as the payload');

    it('should return the payload');
  });

});