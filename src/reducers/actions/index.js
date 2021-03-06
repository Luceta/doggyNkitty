import { GET_TOKEN_OK, GET_TOKEN_FAIL, UPDATE_USER, LOGOUT, SET_CURRENT_USER, RESET_CURRENT_USER } from "../types";

export const getTokenOK = () => {
  return { type: GET_TOKEN_OK };
};

export const getTokenFail = () => {
  return { type: GET_TOKEN_FAIL };
};

export const updateUserInfo = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const resetUser = () => {
  return { type: RESET_CURRENT_USER };
};
