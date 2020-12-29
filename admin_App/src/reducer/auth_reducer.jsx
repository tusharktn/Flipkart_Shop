import { authConstants } from "../actions/actionConstants";

const initState = {
  User: {
    firstName: "",
    email: "",
    lastName: "",
    username: "",
    conatctNumber: "",
  },
  authenticate: false,
  authenticating: false,
};

const authReducer = (state = initState, action) => {
  console.log("Action -", action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        User: action.payload.User,
        authenticate: true,
        authenticating: false,
      };
      break;
    default:
      break;
  }
  return state;
};

export default authReducer;
