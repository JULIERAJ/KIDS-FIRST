import Axios from 'axios';
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
 } from '../constants/userConstants';


export const register = (firstName,lastName, email,dateOfBirth, password, isParent) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password, isParent } });
  try {
    const { data } = await Axios.post('http://localhost:3001/api/users/register', {
      firstName,
      lastName,
      email,
      dateOfBirth,
      password,
      isParent
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


