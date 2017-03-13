// import { fetchRooms } from '../../src/actions/index';
// import nock from 'nock';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

// import {
//   FETCH_ROOMS
// } from '../../src/actions/types';

// const mockStore = configureMockStore([thunk])

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Button from '../../src/components/Button';
test('works', () => {
expect(true).toBe(true)
})

test('renders with text', () => {
  const text = 'text';

  const renderer = TestUtils.createRenderer();
renderer.render(<Button text={text} />);
const button = renderer.getRenderOutput();

expect(button.type).toBe('button');
expect(button.props.children).toBe(text);
})

// describe("Async fetch rooms from the server", () => {

//   afterEach( () => {
//     nock.cleanAll();
//   });

//   it("Dispatches FETCH_STATIONS_SUCCESS when the station data is successfully retrieved.", () => {

//     // Set up nock with the example data.

//     nock('https://localhost:8088')
//       .get('/api/rooms').reply(200, []);

//     // create a mock store

//     const store = mockStore({ todos: [] })

//     // Verify the expected actions were fired, in the correct order.

//     const expectedActions = [
//       { type: FETCH_ROOMS, payload: [] }
//     ]

//     return store.dispatch(fetchRooms())
//       .then(() => { // return of async actions
//         expect(store.getActions()).toEqual(expectedActions)
//       })
//   });
// });

// describe('Get user location', () => {
//   describe('userLocationFetching', () => {
//     it('has the correct type', () => {
//       const action = userLocationFetching();
//       expect(action.type).toEqual(USER_LOCATION_REQUEST);
//     });
//   });

//   describe('userLocationSuccess', () => {
//     it('has the correct type', () => {
//       const action = userLocationSuccess();
//       expect(action.type).toEqual(USER_LOCATION_SUCCESS);
//     });

//     it('has longitude and latitude properties', () => {

//     });
//   });
// })
