import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { createMember } from "../../../../../store/member/member.thunk";
import { initialState } from "../../../../../store/store";

const Membersetupform = () => {
  const [isCancel, setCancel] = useState(false);
  const cancel = () => setCancel(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    address: "",
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
      email: "",
      mobileNo: "",
      address: "",
    });
  };

  const dispatch = useDispatch();
  const token = initialState.token.token;
  console.log(token);

  const save = () => {
    const { name, email, address, mobileNo } = data;
    dispatch(createMember({ name, email, mobileNo, address, token, setData }));
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
              Member setup{" "}
            </p>

            <div className="mx-3">
              <div className="flex gap-3  ">
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    onChange={handleChange}
                    name="name"
                    value={data.name}
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </div>

              <div className="my-2 gap-3 flex justify-start">
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Mobile_number"
                    name="mobileNo"
                    value={data.mobileNo}
                    onChange={handleChange}
                    variant="outlined"
                  />
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
      ) : (
        "closed"
      )}
    </div>
  );
};

export default Membersetupform;
