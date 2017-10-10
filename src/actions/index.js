import axios from 'axios';
import {
  FETCH_ROOMS,
  SELECT_CURRENT_ROOM,
  FETCH_MESSAGES,
  SAVE_USER,
  SEND_MESSAGE ,
  ADD_USER_TO_ROOM,
  UPDATE_TIMER,
  LOGOUT_USER,
  SMILE_REACTION
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
      .catch(err => { console.log(err); });
  }
};

const page = 1;

export const selectCurrentRoom = (roomId) => {
  return dispatch => {
    page = 1;
    axios.get(`/api/rooms/${roomId}`)
      .then(res => {
        dispatch({
          type: SELECT_CURRENT_ROOM,
          payload: res.data
        })
      })
      .catch(err => { console.log(err); });
     axios.get(`/api/rooms/${roomId}/messages?page=${page}`)
      .then(res => {
        page++;
        dispatch({
          type: FETCH_MESSAGES,
          payload: res.data
        })
      })
      .catch(err => { console.log(err); });
  }
};

export const fetchMessagesPagination = (roomId) => {
  return dispatch => {
    return axios.get(`/api/rooms/${roomId}/messages?page=${page}`)
      .then(res => {
        page++;
        return dispatch({
          type: FETCH_MESSAGES_PAGINATION,
          payload: res.data
        });
      })
      .catch(err => { console.log(err); });
  }
};

// create recursive function in case there are more than 10 new messages in between pollings
export const fetchMessagesPoll = (roomId) => {
  return dispatch => {
    function recurse(page) {
      // base case
       if () {

       }
      return axios.get(`/api/rooms/${roomId}/messages?page=${page}`)
      .then(res => {
        return dispatch({
          type: FETCH_MESSAGES_POLL,
          payload: res.data
        });
      .then(() => {
        recurse(page + 1);
      })

      })
      .catch(err => { console.log(err); });
    }

    recurse(1);

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
};

export const sendMessage = (roomId, message, name) => {
  let messagePackage = { name, message };

  return dispatch => {
    axios.post(`/api/rooms/${roomId}/messages`, messagePackage)
      .then(res => {
        dispatch({
          type: SEND_MESSAGE,
          payload: messagePackage
        });

        dispatch({
          type: ADD_USER_TO_ROOM,
          name
        });
      })
      .catch(err => { console.log(err); });
  }
};

export const addReaction = (roomId, messageId, reactionType) => {
  return dispatch => {
    axios.post(`/api/rooms/${roomId}/messages/${messageId}`, { reaction: 'smiley'})
      .then(res => {
        dispatch({
          type: SMILE_REACTION,
          messageId
        });
      })
      .catch(err => { console.log(err); })
  }
};

export const updateTimer = () => {
  return {
    type: UPDATE_TIMER
  };
};