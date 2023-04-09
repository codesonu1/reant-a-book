import { api } from "../../utils/api";
import toast from "../../utils/toast";
import { authCreate, authError, authLoading, authSuccess } from "./auth.action";

export const createUser =
  ({ userName, password, userType, navigate }) =>
  (dispatch) => {
    try {
      dispatch(authLoading());
      api
        .post("/bookrental/user", { userName, password, userType })
        .then(({ data }) => {
          dispatch(authSuccess());
          console.log(data.data.message);

          if (data.data.message === "User  saved successfully") {
            navigate("/login");
            toast.success(data.data.message);
          } else {
            toast.info("Already Exist");
            navigate("/");
          }

          dispatch(authCreate(data));
        });
    } catch (error) {
      dispatch(authError(error));
      console.error(error);
    }
  };

export const login =
  ({ username, password, navigate }) =>
  (dispatch) => {
    try {
      dispatch(authLoading());
      api
        .post("/bookrental/authenticate", {
          username,
          password,
        })
        .then((data) => {
          dispatch(authSuccess());
          localStorage.setItem("authtoken", data.data.data.jwt);
          dispatch(authCreate(data));

          if (!data.data.data.jwt) {
            toast.error("login failed");
          }
          if (data.data.data.jwt) {
            toast.success("you logged");
            navigate("/admindash");
          }
        });
    } catch (error) {
      dispatch(authError(error));
      console.error(error);
    }
  };

export const logout = (payload) => (dispatch) => {
  dispatch(authSuccess());
  localStorage.clear();
};
