import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import { initialState } from "./auth/auth.constant";
import {
  authorReducer,
  authReducer,
  bookReducer,
  categorieReducer,
  memberReducer,
} from "./rootReducer";
const middleware = [thunk];

const token = localStorage.getItem("authtoken");

export const initialState = {
  token: {
    token: token,
  },
};

console.log(initialState.token);
export const store = configureStore({
  preloadedState: initialState,
  reducer: {
    token: authReducer,
    author: authorReducer,
    categorie: categorieReducer,
    member: memberReducer,
    book: bookReducer,
  },
  devTools: true,
  middleware: [...middleware],
});
