import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/auth/auth.thunk";
import toast from "../../utils/toast";

const Login = () => {
  const [credential, setCredential] = useState({
    username: "",
    password: "",
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submit = () => {
    const { username, password } = credential;
    try {
      if (username === "" || password === "") {
        toast.error("Feild cannot be null");
      } else {
        dispatch(login({ username, password, navigate }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="border-[1px] border-[black] lg:w-[500px] sm:w-full md:w-[500px] bg-[white]  rounded-[4px]">
        <p className="text-center text-[1.1rem] my-3 opacity-90">Login Here</p>
        <div>
          <div className="m-3">
            <p for="name" className=" font-[500]">
              Username:
            </p>

            <input
              type="text"
              name="username"
              value={credential.username}
              placeholder=" User-Name"
              onChange={onChangeHandle}
              className="border-[black] border py-2 w-full"
            ></input>
          </div>

          <div className="m-3">
            {" "}
            <p for="name" className=" font-[500]">
              Password:
            </p>
            <input
              type="password"
              name="password"
              value={credential.password}
              placeholder="User-Password"
              onChange={onChangeHandle}
              className="border-[black] border py-2  w-full"
            ></input>
          </div>
          <div className="flex justify-center">
            <p
              className="w-[100px] py-2  text-white bg-[blue] text-center font-bold uppercase rounded-[4px] hover:cursor-pointer"
              onClick={submit}
            >
              login
            </p>
          </div>
          <p className="text-center my-3 opacity-60">
            don't have account ?
            <Link to="/">
              <span className="px-2 text-blue-800 font-semibold hover:underline">
                Signup
              </span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
