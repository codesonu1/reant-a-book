import { useEffect } from "react";
import { api } from "../../utils/api";
import toast from "../../utils/toast";

import {
  categorieCreate,
  categorieError,
  categorieLoading,
  categorieSuccess,
} from "./category.action";
//
export const getAllCategorie =
  ({ setCategorie, token }) =>
  (dispatch) => {
    console.log(token);
    try {
      dispatch(categorieLoading());
      useEffect(() => {
        api
          .get("/bookrental/category", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((data) => {
            dispatch(categorieSuccess());
            dispatch(categorieCreate, data.data.data);
            setCategorie(data.data.data);
          });
      }, [token]);
    } catch (error) {
      dispatch(categorieError(error));
    }
  };

export const createCategorie =
  ({ categoryName, categoryDescription, token, setData }) =>
  (dispatch) => {
    try {
      dispatch(categorieLoading());
      api
        .post(
          "/bookrental/category",
          { categoryName, categoryDescription },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          dispatch(categorieSuccess());
          console.log(data);
          dispatch(categorieCreate(data));
          if (data) {
            toast.success("New Categories Added");
            setData({
              categoryName: "",
              categoryDescription: "",
            });
          }
        });
    } catch (error) {
      dispatch(categorieError(error));
    }
  };
