import { actionType, initialState } from "./book.constant";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ON_BOOK_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        data: 0,
      };
    case actionType.ON_BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case actionType.ON_BOOK_DATA:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case actionType.ON_BOOK_ERROR:
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
