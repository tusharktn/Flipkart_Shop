import { categoryConstants } from "../actions/actionConstants";

const initState = {
  categories: [],
  loading: false,
  error: null,
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.allCategories,
        loading: false,
      };
      break;
    case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
      state = {
        ...initState,
        error: action.payload.error,
      };
      break;
    default:
      break;
  }

  return state;
};

export default categoryReducer;
