export const actionType = {
  ON_BOOK_LOADING: "on_book_loading",
  ON_BOOK_SUCCESS: "on_book_success",
  ON_BOOK_DATA: "on_book_data",
  ON_BOOK_ERROR: "on_book_ERROR",
};

export const initialState = {
  isLoading: false,
  error: null,
  data: 0,
};
