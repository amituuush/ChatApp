import { expect } from 'chai';
import roomsReducer from '../src/reducers/rooms_reducer';
import { FETCH_ROOMS } from '../src/actions/types';

describe('REDUCERS', () => {

describe('roomsReducer', () => {

  it('should return the initial state', () => {
   expect(roomsReducer(undefined, {})).to.deep.equal([]);
  });

  it('handles the FETCH_ROOMS action', () => {
   expect(roomsReducer([], { 
     type: FETCH_ROOMS, 
     payload: [1, 2, 3, 4, 5, 6] 
  })).to.have.length(6);
  });
});

describe('updateTimeReducer', () => {
  it('should add one to the state', () => {
    expect(false).to.be.false;
  });
});

});