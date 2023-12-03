import React, { useState } from "react";
import Logo from "../../Component/Logo";
import "./sidebar.css";
import { MdAddchart } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
const Aside = () => {
  const [activeSide, setActiveSide] = useState(
    "sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl  fixed-start  show-sidebar closeNavigationBar"
  );

  const activationSideBar = () => {
    setActiveSide(
      activeSide ===
        "sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl  fixed-start  show-sidebar closeNavigationBar"
        ? "sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl  fixed-start  show-sidebar "
        : "sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl  fixed-start  show-sidebar closeNavigationBar"
    );
  };
  return (
    <aside className={activeSide}>
      <div className="sidenav-header">
        <Logo />
        <div className="closeBar" onClick={activationSideBar}>
          <BiMenuAltRight />
        </div>
      </div>
      <hr className="horizontal dark mt-0" />
      <div className="collapse navbar-collapse  w-auto ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/accountProfile/addProduct" className="nav-link ">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <MdAddchart />
              </div>
              Add Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/accountProfile/allProduct" className="nav-link active">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <MdAddchart />
              </div>
              All Product
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
