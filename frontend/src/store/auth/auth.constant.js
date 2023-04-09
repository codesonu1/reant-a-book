export const actionType = {
  ON_AUTH_LOADING: "on_auth_loading",
  ON_AUTH_SUCCESS: "on_auth_success",
  ON_AUTH_CREATE: "on_auth_create",
  ON_AUTH_ERROR: "on_auth_error",
  ON_LOGOUT: "on_logout",
};

export const initialState = {
  isLoading: false,
  error: null,
  token: null,
};
