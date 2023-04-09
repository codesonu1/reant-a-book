import { actionType } from "./member.constant";

export const memberLoading = () => {
  return {
    type: actionType.ON_MEMBER_LOADING,
  };
};

export const memberSuccess = () => {
  return {
    type: actionType.ON_MEMBER_SUCCESS,
  };
};
export const memberCreate = () => {
  return {
    type: actionType.ON_MEMBER_DATA,
  };
};
export const memberError = () => {
  return {
    type: actionType.ON_MEMBER_ERROR,
  };
};
