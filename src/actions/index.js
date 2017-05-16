import axios from 'axios';
import { 
  FETCH_ROOMS, 
  SELECT_CURRENT_ROOM, 
  FETCH_MESSAGES, 
  SAVE_USER, 
  SEND_MESSAGE ,
  ADD_USER_TO_ROOM,
  UPDATE_TIMER,
  LOGOUT_USER
} from './types';


export const fetchRooms = () => {
  return dispatch => {
    return axios.get('/api/rooms')
      .then(res => {
        return dispatch({
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
    axios.get(`/api/rooms/${roomId}`)
      .then(res => {
        dispatch({
          type: SELECT_CURRENT_ROOM,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
     axios.get(`/api/rooms/${roomId}/messages`)
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

export const fetchMessages = (roomId) => {
  return dispatch => {
    return axios.get(`/api/rooms/${roomId}/messages`)
      .then(res => {
        console.log(res);
        return dispatch({
          type: FETCH_MESSAGES,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const saveUser = (name) => {
  localStorage.setItem('name', name);

  return {
    type: SAVE_USER,
    payload: name
  };
};

export const logoutUser = () => {
  localStorage.removeItem('name');

  return {
    type: LOGOUT_USER,
    payload: ''
  };
}

export const sendMessage = (roomId, message, name) => {
  let messagePackage = {
    name: name,
    message: message
  };
  
  return dispatch => {
    axios.post(`/api/rooms/${roomId}/messages`, messagePackage)
      .then(res => {
        dispatch({
          type: SEND_MESSAGE,
          payload: messagePackage
        });

        dispatch({
          type: ADD_USER_TO_ROOM,
          payload: name
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const changeReaction = (roomId, messageId, reaction) => {
  console.log('change Reaction');
  axios.patch(`/api/rooms/${roomId}/messages/${messageId}`)
    .then(res => {
      dispatch({
        type: SMILE_REACTION,
        payload: reaction
      });
    })
    .catch(err => {
      console.log(err);
    })
}

export const updateTimer = () => {
  return {
    type: UPDATE_TIMER
  };
}