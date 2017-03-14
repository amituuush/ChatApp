import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/actions';
import * as types from '../src/actions/types';
import nock from 'nock';
import expect from 'expect';


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  })

  it('dispatches FETCH_ROOMS when room data is retrieved', () => {
    nock('http://localhost:8088')
      .get('/api/rooms')
      .reply(200, { data: [{ "name": "Analytics", "id": 0},]})

    const expectedActions = [
      { type: types.FETCH_ROOMS, payload: [{ "name": "Analytics", "id": 0},] }
    ];

    const store = mockStore({ rooms: [] })
    return store.dispatch(actions.fetchRooms())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})