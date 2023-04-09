export const actionType = {
  ON_MEMBER_LOADING: "on_member_loading",
  ON_MEMBER_SUCCESS: "on_member_success",
  ON_MEMBER_DATA: "on_member_data",
  ON_MEMBER_ERROR: "on_member_ERROR",
};

export const initialState = {
  isLoading: false,
  error: null,
  data: 0,
};
