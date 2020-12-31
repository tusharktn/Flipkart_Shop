import { authConstants } from "./actionConstants";
import axios from "../helpers/axios";
export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });

    const response = await axios.post(`/signin`, {
      ...user,
    });
    if (response.status === 200) {
      const { User } = response.data;
      User.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(User));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          User,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: "ERROR",
        },
      });
    }
  };
};

// !NOTE ANOTHER ISLOGGEDIN FUNCTION WILL BE HERE WHICH WILL DISPATCH AN ACTION AND SET THE USER DATA IF AN USER IS PRESENT IN LOCALSTORAGE
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const User = JSON.parse(window.localStorage.getItem("user"));
    if (User != null && User.isLoggedIn === true) {
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          User,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: "ERROR",
        },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const res = await axios(`/logout`);

    if (res.status === 200) {
      window.localStorage.clear();
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
        payload: {
          message: res.data.message,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
