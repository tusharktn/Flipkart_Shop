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
