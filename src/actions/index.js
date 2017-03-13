import axios from 'axios';
import { 
  FETCH_ROOMS, 
  SELECT_CURRENT_ROOM, 
  FETCH_MESSAGES, 
  SAVE_USER, 
  SEND_MESSAGE 
} from './types';

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

export const saveUser = (name) => {
  localStorage.setItem('name', name);

  return {
    type: SAVE_USER,
    payload: name
  }
};

export const sendMessage = (roomId, message, name) => {
  let messagePackage = {
    name: name,
    message: message
  };

  return dispatch => {
    axios.post(`${API_URL}/api/rooms/${roomId}/messages`, messagePackage)
      .then(res => {
        dispatch({
          type: SEND_MESSAGE,
          payload: messagePackage
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
}