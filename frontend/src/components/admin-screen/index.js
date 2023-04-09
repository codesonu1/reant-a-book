import React, { useState } from "react";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import AuthSetup from "../admin-screen/screen/AuthSetup/index";
import CategorySetup from "../admin-screen/screen/CategorySetup/index";
import BookSetup from "../admin-screen/screen/BookSetup/index";
import MemberSetup from "../admin-screen/screen/MemberSetup/index";
import RentABook from "../admin-screen/screen/RentABook/index";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/auth.thunk";
const Index = () => {
  const pathname = window.location.href;
  console.log(pathname);

  const [isOpen, setOpen] = useState(false);
  const opne = () => setOpen(true);
  const closed = () => setOpen(false);

  const [isopen, setIsOpen] = useState(false);
  const openTra = () => setIsOpen(true);
  const closeTra = () => setIsOpen(false);

  const [show, setShow] = useState("reporting");

  const authSetup = () => setShow(<AuthSetup />);
  const categorySetup = () => setShow(<CategorySetup />);
  const bookSetup = () => setShow(<BookSetup />);
  const memberSetup = () => setShow(<MemberSetup />);
  const rentBook = () => setShow(<RentABook />);
  const returnBook = () => setShow("no books are return");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <div className="flex justify-end m-3">
        <p
          className="bg-[blue] py-2 text-center border border-[blue] w-[100px] rounded-md text-[white] font-semibold uppercase hover:bg-[white] hover:border-[blue] hover:text-[blue] cursor-pointer"
          onClick={Logout}
        >
          logout
        </p>
      </div>
      <div className=" mx-3  grid grid-flow-row grid-cols-2 gap-5  border-[1px] border-[black]">
        <div className="lg:w-[100%] md:w-[100%] h-full border-[1px] border-[black] border-l-white border-y-white text-center">
          <div className="m-4">
            <p className="uppercase text-[1.5rem] border-1 border-[black]  border text-center p-2 bg-blue-400 my-2 font-400">
              book rental system
            </p>
            <div>
              <div className=" flex gap-3  justify-center  border-1 border-[black]  border  py-2 text-[1.2rem] capitalize">
                <p
                  onClick={isOpen === false ? opne : closed}
                  className="hover:cursor-pointer hover:text-[#47b3f6f7]"
                >
                  master data
                </p>
                <span className="text-[2rem]">
                  {isOpen === false ? (
                    <IoIosArrowDropup />
                  ) : (
                    <IoIosArrowDropdown />
                  )}
                </span>
              </div>
              {isOpen === true ? (
                <div className="m-4">
                  <p
                    className=" border-1 border-[black]  border  py-2 text-[1.2rem] px-2 my-2 capitalize hover:bg-slate-500 cursor-pointer"
                    onClick={authSetup}
                  >
                    Author Setup
                  </p>
                  <p
                    className=" border-1 border-[black]  border  py-2 text-[1.2rem] px-2 my-2 capitalize hover:bg-slate-500 cursor-pointer"
                    onClick={categorySetup}
                  >
                    Categories Setup
                  </p>
                  <p
                    className=" border-1 border-[black]  border  py-2 text-[1.2rem] px-2 my-2 capitalize hover:bg-slate-500 cursor-pointer"
                    onClick={memberSetup}
                  >
                    Member Setup
                  </p>
                  <p
                    className=" border-1 border-[black]  border  py-2 text-[1.2rem] px-2 my-2 capitalize hover:bg-slate-500 cursor-pointer"
                    onClick={bookSetup}
                  >
                    Book Setup
                  </p>
                </div>
              ) : null}
            </div>

            <div className="my-4">
              <div className=" flex gap-3  justify-center  border-1 border-[black]  border  py-2 text-[1.2rem] capitalize">
                <p
                  className="hover:cursor-pointer hover:text-[#47b3f6f7]"
                  onClick={isopen === false ? openTra : closeTra}
                >
                  Transaction
                </p>
                <span className="text-[2rem]">
                  {isopen === false ? (
                    <IoIosArrowDropup />
                  ) : (
                    <IoIosArrowDropdown />
                  )}
                </span>
              </div>
              {isopen === true ? (
                <div className="m-4">
                  <p
                    className=" border-1 border-[black]  border  py-2 text-[1.2rem] px-2 my-2 capitalize hover:bg-slate-500 cursor-pointer"
                    onClick={rentBook}
                  >
                    Rent a Book
                  </p>
                  <p
                    className=" border-1 border-[black]  border  py-2 text-[1.2rem] px-2 my-2 capitalize hover:bg-slate-500 cursor-pointer"
                    onClick={returnBook}
                  >
                    Return a Book
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div>{show}</div>
      </div>
    </div>
  );
};

export default Index;
