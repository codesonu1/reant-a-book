import { actionType } from "./auth.constant";

export const authLoading = () => {
  return {
    type: actionType.ON_AUTH_LOADING,
  };
};

export const authSuccess = () => {
  return {
    type: actionType.ON_AUTH_SUCCESS,
  };
};

export const authCreate = (payload) => {
  return {
    type: actionType.ON_AUTH_CREATE,
    payload: payload,
  };
};

export const logout = () => {
  return {
    type: actionType.ON_LOGOUT,
  };
};

export const authError = () => {
  return {
    type: actionType.ON_AUTH_ERROR,
  };
};
