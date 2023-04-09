import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createAuthor } from "../../../../../store/author/author.thunk";
import { initialState } from "../../../../../store/store";
import toast from "../../../../../utils/toast";

const Authsetupform = () => {
  const [isCancel, setCancel] = useState(false);
  const cancel = () => setCancel(true);
  const [data, setData] = useState({
    authorName: "",
    authorEmail: "",
    authorMobile: "",
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
      authorName: "",
      authorEmail: "",
      authorMobile: "",
    });
  };

  const dispatch = useDispatch();
  const token = initialState.token.token;
  console.log(token);

  const save = () => {
    const { authorEmail, authorMobile, authorName } = data;

    if (authorName === "" || authorEmail === "" || authorMobile === "") {
      toast.error("feild cannot be null");
    } else {
      dispatch(
        createAuthor({ authorEmail, authorMobile, authorName, token, setData })
      );
    }
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
              author setup{" "}
            </p>

            <div className="mx-3">
              <div className="flex gap-3  ">
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    onChange={handleChange}
                    name="authorName"
                    value={data.authorName}
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    name="authorEmail"
                    value={data.authorEmail}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </div>

              <div className="my-2 flex justify-start">
                <TextField
                  id="outlined-basic"
                  label="Mobile_number"
                  name="authorMobile"
                  value={data.authorMobile}
                  onChange={handleChange}
                  variant="outlined"
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

export default Authsetupform;
