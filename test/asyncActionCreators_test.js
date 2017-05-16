import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/actions';
import * as types from '../src/actions/types';
import nock from 'nock';
import { expect } from 'chai';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('ASYNC ACTION CREATORS', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('fetchRooms', () => {
    it('should return an array of rooms as objects', () => {
      nock(host)
        .get('/api/rooms')
        .reply(200, [{ "name": "Analytics", "id": 0}])

      const expectedActions = [
        { type: types.FETCH_ROOMS, payload: [{ "name": "Analytics", "id": 0},] }
      ];

      const store = mockStore({ rooms: [] });
      return store.dispatch(actions.fetchRooms())
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions)
        })
    });
  });

  describe('fetchMessages', () => {
    it('should return an array of messages as objects', () => {
      nock(host)
        .get('/api/rooms/0/messages')
        .reply(200, [{ "name": "Jack", "message": "hey"}])

      const expectedActions = [
        { type: types.FETCH_MESSAGES, payload: [{ "name": "Jack", "message": "hey"},] }
      ];

      const store = mockStore({ messages: [] })
      return store.dispatch(actions.fetchMessages(0))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions)
        })
    });
  });

    describe('sendMessage', () => {
    it('should return an array of messages as objects', () => {
      nock(host)
        .get('/api/rooms/0/messages')
        .reply(200, [{ "name": "Jack", "message": "hey"}])

      const expectedActions = [
        { type: types.FETCH_MESSAGES, payload: [{ "name": "Jack", "message": "hey"},] }
      ];

      const store = mockStore({ messages: [] })
      return store.dispatch(actions.fetchMessages(0))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions)
        })
    });
  });

  describe('updateTimer', () => {
    it('should return an action with type: UPDATE_TIMER', () => {
      const expectedAction = {
        type: types.UPDATE_TIMER,
      };
      expect(actions.updateTimer()).to.deep.equal(expectedAction);
    });  
  });

})
