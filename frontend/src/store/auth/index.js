import { actionType, initialState } from "./auth.constant";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ON_AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionType.ON_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case actionType.ON_AUTH_CREATE:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case actionType.ON_LOGOUT:
      return {
        ...state,
        token: null,
      };

    case actionType.ON_AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
