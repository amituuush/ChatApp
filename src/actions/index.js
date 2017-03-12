import axios from 'axios';
import { FETCH_ROOMS } from './types';

const API_URL = 'http://localhost:8088';

export const fetchRooms = () = {
  axios.get(`${API_URL}/api/rooms`)
  .then(function (res) {
    console.log(res);
    return {
      type: FETCH_ROOMS,
      payload: res
    };
  })
  .catch(function (err) {
    console.log(err);
  });
};