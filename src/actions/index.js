import axios from 'axios';
import { FETCH_ROOMS } from './types';

const API_URL = 'http://localhost:8088';

export const fetchRooms = () => {
  return dispatch => {
    axios.get(`${API_URL}/api/rooms`)
        .then(function (res) {
          dispatch({
            type: FETCH_ROOMS,
            payload: res.data
          });
        })
        .catch(function (err) {
          console.log(err);
        });
  }
 

  // const request = axios.get(`${API_URL}/api/rooms`);
  // console.log('request', request);
  // return {
  //   type: FETCH_ROOMS,
  //   payload: request.data
  // }
};
