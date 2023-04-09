import { useEffect } from "react";
import { api } from "../../utils/api";
import toast from "../../utils/toast";
import {
  memberCreate,
  memberError,
  memberLoading,
  memberSuccess,
} from "./member.action";

export const getAllMember =
  ({ setMember, token }) =>
  (dispatch) => {
    try {
      useEffect(() => {
        dispatch(memberLoading());
        api
          .get("/bookrental/member", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((data) => {
            dispatch(memberSuccess());
            dispatch(memberCreate(data.data.data));
            setMember(data.data.data);
          });
      }, [token]);
    } catch (error) {
      dispatch(memberError(error));
    }
  };

export const createMember =
  ({ name, email, mobileNo, address, token, setData }) =>
  (dispatch) => {
    try {
      dispatch(memberLoading());

      api
        .post(
          "/bookrental/member",
          {
            name,
            email,
            address,
            mobileNo,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          dispatch(memberSuccess());
          console.log(data);
          dispatch(memberCreate(data));
          if (data) {
            toast.success("New Member Added");
            setData({
              name: "",
              email: "",
              address: "",
              mobileNo: "",
            });
          }
        });
    } catch (error) {
      dispatch(memberError(error));
    }
  };
