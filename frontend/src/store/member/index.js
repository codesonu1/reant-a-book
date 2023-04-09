import { actionType, initialState } from "./member.constant";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ON_MEMBER_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        data: 0,
      };
    case actionType.ON_MEMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case actionType.ON_MEMBER_DATA:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case actionType.ON_MEMBER_ERROR:
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
