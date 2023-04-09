import { actionType, initialState } from "./author.constant";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ON_AUTHOR_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        data: 0,
      };
    case actionType.ON_AUTHOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case actionType.ON_AUTHOR_DATA:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case actionType.ON_AUTHOR_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: 0,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
