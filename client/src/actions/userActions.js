import Axios from 'axios';
const process = require('process');
const BACKEND_URL = "https://childfirst-api.herokuapp.com";

export const signin = (email, password,is_parent) => async (dispatch) => {
  dispatch({ type: "USER_SIGNIN_REQUEST", payload: { email, password,is_parent } });
  try {
    const { data } = await Axios.post(`${BACKEND_URL}/api/users/signin`, { email, password,is_parent });
    dispatch({ type: "USER_SIGNIN_SUCCESS", payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_SIGNIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (email, password,is_parent) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST", payload: email, password,is_parent });
  try {
    const { data } = await Axios.post(`${BACKEND_URL}/api/users/parent/register`, {email, password,is_parent});
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
    //dispatch({ type: "USER_SIGNIN_SUCCESS", payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const updateUserInfo = (user) => async (dispatch) => {
  dispatch({ type: "USER_UPDATE_PROFILE_REQUEST", payload: user });

  try {
    const { data } = await Axios.put(`${BACKEND_URL}/api/users/${user.id}`, user);
    dispatch({ type: "USER_UPDATE_SUCCESS", payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: "USER_UPDATE_FAIL", payload: message });
  }
};


export const registerCoparent = (firstName, lastName, email, is_co_parent,createBy) => async (dispatch, getState) => {
  dispatch({ type: "COPARENT_REGISTER_REQUEST", payload: firstName, lastName, email, is_co_parent ,createBy});
  const {
    userRegister: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(`${BACKEND_URL}/api/users/coParent/register`, {firstName, lastName, email, is_co_parent,createBy});
    dispatch({ type: "COPARENT_REGISTER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "COPARENT_REGISTER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



export const registerChild = (firstName,is_child, createBy) => async (dispatch, getState) => {
  dispatch({ type: "CHILD_REGISTER_REQUEST", payload:firstName,is_child, createBy});
  const {
    userRegister: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(`${BACKEND_URL}/api/users/child/register`, {firstName,is_child, createBy});
    dispatch({ type: "CHILD_REGISTER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "CHILD_REGISTER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
