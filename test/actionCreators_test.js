import * as actions from '../src/actions';
import * as types from '../src/actions/types';
import { expect } from 'chai';

describe('ACTION CREATORS', () => {

  describe('updateTimer', () => {
    it('should return an action with type: UPDATE_TIMER', () => {
      const expectedAction = {
        type: types.UPDATE_TIMER,
      };
      expect(actions.updateTimer()).to.deep.equal(expectedAction);
    });  
  });

})
