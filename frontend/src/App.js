import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Index from "./components/admin-screen";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
const token = localStorage.getItem("authtoken");

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admindash"
          element={
            <AuthWrapper>
              <Index />
            </AuthWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const AuthWrapper = ({ children }) => {
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return token && children;
};

const App = () => {
  return RouteManager();
};

export default App;
