import React from "react";
import "./loginheader.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";
const LoginHeader = () => {
  return (
    <>
      <div className="signin-header">
        <div className="row ">
          <div className="col-md-6 col-sm-12">
            <Logo />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="singin-header-btn">
              <p>
                {window.location.href.includes("login")
                  ? "Not a member?"
                  : "Already a member?"}
              </p>
              {window.location.href.includes("login") ? (
                <Link
                  to="/register"
                  className="axil-btn btn-bg-primary sign-up-btn add-card text-white"
                >
                  Sign Up Now
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="axil-btn btn-bg-primary sign-up-btn add-card text-white"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginHeader;
