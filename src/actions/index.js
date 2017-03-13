import axios from 'axios';
import { FETCH_ROOMS, SELECT_CURRENT_ROOM, FETCH_MESSAGES, SAVE_USER } from './types';

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
        dispatch({
          type: SELECT_CURRENT_ROOM,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
    
     axios.get(`${API_URL}/api/rooms/${roomId}/messages`)
      .then(res => {
        dispatch({
          type: FETCH_MESSAGES,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export const saveUser = (username) => {
  localStorage.setItem('username', username);

  return {
    type: SAVE_USER,
    payload: username
  }
};