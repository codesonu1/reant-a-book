export const actionType = {
  ON_AUTHOR_LOADING: "on_author_loading",
  ON_AUTHOR_SUCCESS: "on_author_success",
  ON_AUTHOR_DATA: "on_author_data",
  ON_AUTHOR_ERROR: "on_author_ERROR",
};

export const initialState = {
  isLoading: false,
  error: null,
  data: 0,
};
