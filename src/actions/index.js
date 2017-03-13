import axios from 'axios';
import { FETCH_ROOMS, SELECT_CURRENT_ROOM } from './types';

const API_URL = 'http://localhost:8088';

export const fetchRooms = () => {
  return dispatch => {
    axios.get(`${API_URL}/api/rooms`)
      .then(res => {
        dispatch({
          type: FETCH_ROOMS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const selectCurrentRoom = (roomId) => {
  return dispatch => {
    axios.get(`${API_URL}/api/rooms/${roomId}`)
      .then(res => {
        console.log('current room', res.data);
        dispatch({
          type: SELECT_CURRENT_ROOM,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
}
