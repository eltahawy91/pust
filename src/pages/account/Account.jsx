import React from "react";
import { Link } from "react-router-dom";
import "./account.css";
import account_bg from "../../Images/product-45.webp";
import { BiSolidDashboard, BiSolidUser } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";

const Account = () => {
  var storedUser;
  const handleUserName = () => {
    storedUser = JSON.parse(localStorage.getItem("user"));
  };
  handleUserName();
  const Logout = () => {
    return JSON.stringify(localStorage.removeItem("user"));
  };
  return (
    <>
      <main className="main-wrapper">
        <div className="axil-breadcrumb-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="inner">
                  <ul className="axil-breadcrumb">
                    <li className="axil-breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="separator"></li>
                    <li className="axil-breadcrumb-item active">
                      <Link to="/">My Account</Link>
                    </li>
                  </ul>
                  <h1 className="title">Control All Products</h1>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="inner">
                  <div className="bradcrumb-thumb">
                    <img src={account_bg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-dashboard-area axil-section-gap">
          <div className="container">
            <div className="axil-dashboard-warp">
              <div className="axil-dashboard-author">
                <div className="media">
                  <div className="media-body">
                    <h5 className="title mb-0">{storedUser.username}</h5>
                    <span className="text-gray-600">Manager</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-md-4">
                  <aside className="axil-dashboard-aside">
                    <nav className="axil-dashboard-nav">
                      <div className="nav nav-tabs">
                        <Link
                          to="/accountProfile/addProduct"
                          className="nav-item nav-link w-100"
                        >
                          <BiSolidDashboard className="me-2 fs-5" />
                          Dashboard
                        </Link>
                        <a href="/" className="nav-item nav-link w-100">
                          <BiSolidUser className="me-2 fs-5" />
                          Account Details
                        </a>
                        <button
                          onClick={Logout}
                          className="nav-item nav-link w-100"
                        >
                          <AiOutlineLogout className="me-2 fs-5" />
                          Logout
                        </button>
                      </div>
                    </nav>
                  </aside>
                </div>
                <div className="col-xl-9 col-md-8">
                  <div className="tab-content">
                    <div className="axil-dashboard-account">
                      <form
                        action=""
                        className="account-details-form"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <div className="row">
                          <div className="col-lg-6 mt-3">
                            <div className="form-floating ">
                              <input
                                type="text"
                                readOnly
                                className="form-control"
                                id="floatingInput"
                                placeholder={storedUser.username}
                                value={storedUser.username}
                                // onChange={(e) => setUsername(e.target.value)}
                              />
                              <label htmlFor="floatingInput">User Name</label>
                            </div>
                          </div>
                          <div className="col-lg-6 mt-3">
                            <div className="form-floating col-12">
                              <input
                                type="password"
                                readOnly
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                value={storedUser.password}
                                // onChange={(e) => setPassword(e.target.value)}
                              />
                              <label htmlFor="floatingPassword">Password</label>
                            </div>
                          </div>
                          <div className="col-lg-6 mt-3">
                            <div className="form-floating col-12">
                              <button
                                // onClick={handleLogin}
                                type="submit"
                                className="axil-btn btn-bg-primary add-card m-0"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
