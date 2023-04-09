import { actionType } from "./author.constant";

export const authorLoading = () => {
  return {
    type: actionType.ON_AUTHOR_LOADING,
  };
};

export const authorSuccess = () => {
  return {
    type: actionType.ON_AUTHOR_SUCCESS,
  };
};

export const authorData = () => {
  return {
    type: actionType.ON_AUTHOR_DATA,
  };
};

export const authorError = () => {
  return {
    type: actionType.ON_AUTHOR_ERROR,
  };
};
