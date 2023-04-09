import { useEffect } from "react";
import { api } from "../../utils/api";
import toast from "../../utils/toast";
import {
  authCreate,
  authError,
  authLoading,
  authSuccess,
} from "../auth/auth.action";

import {
  authorData,
  authorError,
  authorLoading,
  authorSuccess,
} from "./author.action";

export const getAllAuthor =
  ({ setAuthor, token }) =>
  (dispatch) => {
    try {
      dispatch(authLoading());
      useEffect(() => {
        api
          .get("/bookrental/author", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((data) => {
            dispatch(authSuccess());
            dispatch(authCreate(data));
            setAuthor(data.data.data);
          });
      }, [token]);
    } catch (error) {
      dispatch(authorError(error));
    }
  };
//authorName, authorEmail, authorMobile, token

export const createAuthor =
  ({ authorEmail, authorMobile, authorName, token, setData }) =>
  (dispatch) => {
    try {
      dispatch(authorLoading());
      api
        .post(
          "/bookrental/author",
          { authorEmail, authorMobile, authorName },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          dispatch(authorSuccess());
          dispatch(authorData(data));
          console.log(data);
          if (data) {
            toast.success("New Author Added");
            setData({
              authorEmail: "",
              authorMobile: "",
              authorName: "",
            });
          }
        });
    } catch (error) {
      dispatch(authorError(error));
    }
  };

export const dltItemById =
  ({ id, token }) =>
  (dispatch) => {
    console.log(id);
    try {
      dispatch(authorLoading());
      useEffect(() => {
        api.delete(`/bookrental/author/${id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log("hey").then((item) => {
          if (item) {
            console.log("hey");
            dispatch(authorSuccess());
            dispatch(authorData(item));
            if (item) {
              toast.success("Item Deleted ");
            }
          }
        });
      }, [token]);
    } catch (error) {
      dispatch(authorError(error));
    }
  };
