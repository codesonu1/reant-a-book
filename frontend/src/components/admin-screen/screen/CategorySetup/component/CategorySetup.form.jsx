import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useDispatch } from "react-redux";
import { createCategorie } from "../../../../../store/category/category.thunk";
import { initialState } from "../../../../../store/store";

const Categorysetupform = () => {
  const [isCancel, setCancel] = useState(false);
  const cancel = () => setCancel(true);
  const [data, setData] = useState({
    categoryName: "",
    categoryDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const reSet = (e) => {
    setData({
      name: "",
      description: "",
    });
  };
  const dispatch = useDispatch();
  const token = initialState.token.token;

  const save = () => {
    const { categoryName, categoryDescription } = data;
    dispatch(
      createCategorie({ categoryName, categoryDescription, token, setData })
    );
  };

  return (
    <div>
      {isCancel === false ? (
        <div className="flex justify-center my-3">
          <div className="bg-white h-[430px] w-[500px]">
            <div className=" flex justify-end py-4 m-3  ">
              <p
                className="border-[1px] border-black  cursor-pointer  py-3 rounded-md text-center font-semibold text-[1.2rem] w-[150px]"
                onClick={cancel}
              >
                cancel
              </p>
            </div>
            <p className="capitalize m-4 text-[1.4rem] font-medium">
              Category setup{" "}
            </p>

            <div className="mx-3">
              <div>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  onChange={handleChange}
                  name="categoryName"
                  value={data.categoryName}
                  variant="outlined"
                  className="w-full"
                />
              </div>

              <div className="my-4 flex justify-start">
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Add Your Description"
                  style={{
                    width: 500,
                    border: "gray 1px solid",
                  }}
                  name="categoryDescription"
                  value={data.categoryDescription}
                  onChange={handleChange}
                />
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
      ) : (
        "closed"
      )}
    </div>
  );
};

export default Categorysetupform;
