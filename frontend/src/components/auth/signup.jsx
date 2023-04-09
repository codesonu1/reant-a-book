import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "../../utils/toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/auth/auth.thunk";
import { api } from "../../utils/api";

const Signup = () => {
  const token = localStorage.getItem("authtoken");
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [credential, setCredential] = useState({
    userName: "",
    password: "",
    userType: "ADMIN",
  });

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setCredential((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await api.get("/bookrental/user");
  //     setData(response.data.data);
  //   }
  //   fetchData();
  // }, []);

  console.log(data);

  const navigate = useNavigate();
  const Submit = () => {
    const { userName, password, userType } = credential;
    if (userName === "" || password === "" || userType === "") {
      toast.error("field can not be null");
    } else {
      dispatch(createUser({ userName, password, userType, navigate }));
    }
  };

  return (
    <div className="flex justify-center">
      <div className="border-[1px] border-[black] lg:w-[500px] sm:w-full md:w-[500px] bg-[white]  rounded-[4px]">
        <p className="text-center text-[1.1rem] my-3 opacity-90">
          Create new User
        </p>
        <div>
          <div className="m-3">
            <p for="name" className=" ">
              Username:
            </p>
            <input
              type="text"
              name="userName"
              onChange={onChangeHandle}
              value={credential.userName}
              placeholder=" User-Name"
              className="border-[black] border py-2 w-full"
            ></input>
          </div>
          <div className="m-3">
            {" "}
            <p for="name" className=" ">
              User Type:
            </p>
            <input
              type="text"
              name="userType"
              onChange={onChangeHandle}
              value={credential.userType}
              placeholder="User-Phonenumber"
              className="border-[black] border py-2 w-full"
            ></input>
          </div>
          <div className="m-3">
            {" "}
            <p for="name" className=" ">
              Password:
            </p>
            <input
              type="password"
              name="password"
              onChange={onChangeHandle}
              value={credential.password}
              placeholder="User-Password"
              className="border-[black] border py-2  w-full"
            ></input>
          </div>
          <div className="flex justify-center">
            <p
              className="w-[100px] py-2  text-white bg-[blue] text-center font-bold uppercase rounded-[4px] hover:cursor-pointer"
              onClick={Submit}
            >
              signup
            </p>
          </div>
          <p className="text-center my-3 opacity-60">
            Already have account ?
            <Link to="/login">
              <span className="px-2 text-blue-800 font-semibold hover:underline">
                Login
              </span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
