import { useEffect } from "react";
import { api } from "../../utils/api";
import toast from "../../utils/toast";
import { bookData, bookError, bookLoading, bookSuccess } from "./book.action";

export const getAllBook =
  ({ setBook, token }) =>
  (dispatch) => {
    try {
      dispatch(bookLoading());
      useEffect(() => {
        api
          .get("/bookrental/book", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((data) => {
            dispatch(bookSuccess());
            dispatch(bookData(data));
            setBook(data.data.data);
          });
      }, [token]);
    } catch (error) {
      dispatch(bookError(error));
    }
  };

export const createBookSetup =
  ({
    bookName,
    isbn,
    noOfPages,
    rating,
    stockCount,
    bookImage,
    categoryId,
    authorId,
    publishedDate,
    token,
    setData,
  }) =>
  (dispatch) => {
    try {
      dispatch(bookLoading());
      api
        .post(
          "/bookrental/book",
          {
            bookName,
            isbn,
            noOfPages,
            rating,
            stockCount,
            bookImage,
            categoryId,
            authorId,
            publishedDate,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          dispatch(bookSuccess());
          dispatch(bookData(data));
          console.log(data);
          if (data) {
            toast.success("New Book Added");
            setData({
              bookName: "",
              isbn: "",
              noOfPages: "",
              rating: "",
              stockCount: "",
              bookImage: "",
              categoryId: "",
              authorId: "",
              publishedDate: "",
            });
          }
        });
    } catch (error) {
      dispatch(bookError(error));
    }
  };
