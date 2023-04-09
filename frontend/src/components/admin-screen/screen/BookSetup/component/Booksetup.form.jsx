import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { getAllCategorie } from "../../../../../store/category/category.thunk";
import { initialState } from "../../../../../store/store";
import { api } from "../../../../../utils/api";
import { createBookSetup } from "../../../../../store/bookSetup/book.thunk";
const Booksetupform = () => {
  const [isCancel, setCancel] = useState(false);
  const cancel = () => setCancel(true);

  const [data, setData] = useState({
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

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const photoHandleChange = (e) => {
    setData((pre) => {
      return {
        ...pre,
        bookImage: e.currentTarget.files[0],
      };
    });
  };

  const reSet = (e) => {
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
  };

  const [author, setAuthor] = useState([]);
  const [category, setCategory] = useState([]);
  const token = initialState.token.token;

  useEffect(() => {
    api
      .get("/bookrental/author", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setAuthor(data.data.data);
      });
  }, [token]);

  useEffect(() => {
    api
      .get("/bookrental/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setCategory(data.data.data);
      });
  }, [token]);

  const save = () => {
    const {
      bookName,
      isbn,
      noOfPages,
      rating,
      stockCount,
      bookImage,
      categoryId,
      authorId,
      publishedDate,
    } = data;
    dispatch(
      createBookSetup({
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
      })
    );
  };

  return (
    <div>
      {isCancel === false ? (
        <div className="flex justify-center my-3">
          <div className="bg-white h-[430px] w-[800px]">
            <div className=" flex justify-end py-4 m-3  ">
              <p
                className="border-[1px] border-black  cursor-pointer  py-3 rounded-md text-center font-semibold text-[1.2rem] w-[150px]"
                onClick={cancel}
              >
                cancel
              </p>
            </div>
            <p className="capitalize m-4 text-[1.4rem] font-medium">
              Book setup{" "}
            </p>

            <div className="mx-3">
              <div>
                <div className="grid grid-cols-3 grid-flow-row gap-3  ">
                  <div>
                    <select
                      className="w-full h-full bg-white border border-[gray]"
                      onChange={handleChange}
                      value={data.categoryId}
                      name="categoryId"
                    >
                      <option>Single select CategoryDD</option>

                      {category.map((item, i) => {
                        return (
                          <option className="py-2">
                            Category Id {item.categoryId}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <select
                      className="w-full h-full bg-white border border-[gray]"
                      onChange={handleChange}
                      value={data.authorId}
                      name="authorId"
                    >
                      <option>Multi select AuthorDD</option>
                      {author.map((item, i) => {
                        return (
                          <option className="py-2">
                            {" "}
                            Author Id {item.authorId}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Page"
                      name="noOfPages"
                      type="number"
                      value={data.noOfPages}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Rating"
                      name="rating"
                      type="number"
                      value={data.rating}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Stock"
                      name="stockCount"
                      type="number"
                      value={data.stockCount}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-number"
                      label="Publish Date"
                      type="date"
                      name="publishedDate"
                      value={data.publishedDate}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-number"
                      label="Book Photo"
                      type="file"
                      name="publish_data"
                      // value={data.photo}
                      onChange={photoHandleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      name="bookName"
                      type="text"
                      value={data.bookName}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="ISBN"
                      name="isbn"
                      type="text"
                      value={data.isbn}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-start  m-3 py-3">
              <p
                className="border border-[red] bg-[#F8CECC] px-4 py-2 w-[150px] text-center rounded-[4px] cursor-pointer"
                onClick={save}
              >
                Save
              </p>
              <p
                className="border border-[green] bg-[#D5E8D4] px-4 py-2 w-[150px] text-center rounded-[4px] cursor-pointer"
                onClick={reSet}
              >
                Reset
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const AuthorDD = [
  {
    name: "Author1",
  },
  {
    name: "Author2",
  },
  {
    name: "Author3",
  },
  {
    name: "Author4",
  },
];
const CategoryDD = [
  {
    name: "Category1",
  },
  {
    name: "Category2",
  },
  {
    name: "Category3",
  },
  {
    name: "Category4",
  },
];

export default Booksetupform;
