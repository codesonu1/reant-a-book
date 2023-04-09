import { actionType, initialState } from "./category.constant";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ON_CATEGORIE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        data: 0,
      };
    case actionType.ON_CATEGORIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case actionType.ON_CATEGORIE_DATA:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case actionType.ON_CATEGORIE_ERROR:
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
