import { signUpConstants } from "../actions/actionConstants";
const initState = {
  message: "",
  error: null,
  loading: false,
};

const signupReducer = (state = initState, action) => {
  console.log("Action -", action);
  switch (action.type) {
    case signUpConstants.SIGNIP_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case signUpConstants.SIGNUP_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case signUpConstants.SIGNUP_FAILURE:
      state = {
        ...initState,
        loading: false,
        error: action.payload.error,
      };
      break;

    default:
      break;
  }
  return state;
};

export default signupReducer;
