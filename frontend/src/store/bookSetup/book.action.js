import { actionType } from "./book.constant";

export const bookLoading = () => {
  return {
    type: actionType.ON_BOOK_LOADING,
  };
};

export const bookSuccess = () => {
  return {
    type: actionType.ON_BOOK_SUCCESS,
  };
};

export const bookData = () => {
  return {
    type: actionType.ON_BOOK_DATA,
  };
};

export const bookError = () => {
  return {
    type: actionType.ON_BOOK_ERROR,
  };
};
