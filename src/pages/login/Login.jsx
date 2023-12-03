import React, { useState } from "react";
import "../register/register.css";
import LoginHeader from "../../Component/loginHeader/LoginHeader";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      navigate("/");
    } else {
      alert("Usename or Passord Wrong");
    }
  };

  return (
    <>
      <LoginHeader />
      <div className="row">
        <div className="col-xl-4 col-lg-6">
          <div className="axil-signin-banner bg_image bg_image--11">
            <h3 className="title fw-bold">We Offer the Best Products</h3>
          </div>
        </div>
        <div className="col-lg-6 offset-xl-2">
          <div className="axil-signin-form-wrap">
            <div className="axil-signin-form">
              <h3 className="title">I'm New Here</h3>
              <p className="fs-7 mb-5 text-gray-600">Enter your detail below</p>
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="singin-form row"
              >
                <div className="form-floating col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating col-12">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating col-12">
                  <button
                    onClick={handleLogin}
                    type="submit"
                    className="axil-btn btn-bg-primary add-card m-0"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
