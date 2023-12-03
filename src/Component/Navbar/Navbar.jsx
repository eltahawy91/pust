import React, { useState } from "react";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { MdSupervisorAccount } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { MdMenuOpen } from "react-icons/md";

import { useShoppingCart } from "../../context/ShoppingCartContext";
import FormatCurrency from "../FormatCurrency";

import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import CartItem from "../CartItem";
import { useEffect } from "react";
import StripeContainer from "../StripeContainer";
const Navbar = () => {
  const [showItem, setShowItem] = useState(false);

  const { openCart, cartQuantity } = useShoppingCart();
  const { closeCart, cartItems } = useShoppingCart();
  const [book, setBook] = useState([]);
  // console.log(cartItems);
  useEffect(() => {
    fetch(`http://localhost:9000/products`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, []);
  const [nav, setNav] = useState("navBar");
  const openNav = () => {
    setNav("navBar activeNavbar");
  };
  const exitNav = () => {
    setNav("navBar");
  };
  const [drop, setDrop] = useState("my-account-dropdown");
  const showDrop = () => {
    setDrop((prevClass) =>
      prevClass.includes("open")
        ? "my-account-dropdown"
        : "my-account-dropdown open"
    );
  };
  var storedUser;
  const handleUserName = () => {
    storedUser = JSON.parse(localStorage.getItem("user"));
  };
  handleUserName();

  return (
    <>
      <section
        className="navBarSection bg-white w-100 "
        style={{ zIndex: "5000" }}
      >
        <header className="header container py-3">
          <div className="row px-3 resposive_head">
            <div className="logoDiv justify-content-center align-items-center col-lg-3 col-md-3 col-sm-3 d-flex gap-4">
              <div className="">
                <Link to="/" className="logo d-flex">
                  <Logo />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-12 navresponsive"
              style={{ lineHeight: "39px" }}
            >
              <div className={nav}>
                <div className="cart-header">
                  <Link to="/" className="logo d-flex">
                    <Logo />
                  </Link>

                  <button className="cart-close d-flex justify-content-center align-items-center">
                    <AiOutlineClose className="icon" onClick={exitNav} />
                  </button>
                </div>

                <ul className="navLists d-flex mb-0">
                  <li className="navItem">
                    <Link to="/" className="navLink">
                      Home
                    </Link>
                  </li>
                  <li className="navItem">
                    <Link to="/commingSoon" className="navLink">
                      Categories
                    </Link>
                  </li>

                  <li className="navItem">
                    <Link to="/commingSoon" className="navLink">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-sm-4 mt-lg-0 mt-md-0  col-lg-3 col-md-3 col-sm-3 d-flex align-items-center icons-header">
              <div className="header-action">
                <ul className="action-list">
                  <li className="shopping-cart " style={{ width: "40px" }}>
                    <button
                      className="w-100 rounded-circle"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <span className="cart-count">{cartQuantity}</span>
                      <FontAwesomeIcon className="fs-6" icon={faShoppingCart} />
                    </button>

                    <div
                      className="offcanvas offcanvas-end p-4"
                      tabIndex="-1"
                      id="offcanvasRight"
                      aria-labelledby="offcanvasRightLabel"
                    >
                      <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Cart Review</h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <hr className="mx-3" />
                      <div className="offcanvas-body">
                        <ul className="cart-item-list ps-0 mt-3">
                          {cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />
                          ))}
                        </ul>
                        {cartItems.length > 0 ? (
                          <div className="cart-footer">
                            <h3 className="cart-subtotal">
                              <span className="subtotal-title">Subtotal:</span>
                              <span className="subtotal-amount">
                                {FormatCurrency(
                                  cartItems.reduce((total, cartItem) => {
                                    const item = book.find(
                                      (i) => i.id === cartItem.id
                                    );
                                    return (
                                      total +
                                      (item?.price || 0) * cartItem.quantity
                                    );
                                  }, 0)
                                )}
                              </span>
                            </h3>
                            <div className="group-btn">
                              {showItem ? (
                                <StripeContainer />
                              ) : (
                                <>
                                  <button
                                    onClick={() => setShowItem(true)}
                                    id="checkout-button"
                                    className="axil-btn w-100
                                  bg-danger
                                  border-0
                                  text-white
                                  checkout-btn"
                                  >
                                    Checkout
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        ) : (
                          <h4 className="text-center">Your cart are empty </h4>
                        )}
                      </div>
                    </div>
                  </li>
                  <li className="my-account">
                    <button className="w-100 " onClick={showDrop}>
                      {storedUser ? storedUser.username : <AiOutlineUser />}
                    </button>
                    <div className={drop}>
                      <span className="title text-gray-600">QUICKLINKS</span>
                      <ul>
                        <li className="fw-bold">
                          {storedUser && (
                            <Link to="/accountProfile">
                              <MdSupervisorAccount className="me-2" />
                              My Account
                            </Link>
                          )}
                        </li>
                      </ul>
                      {!storedUser ? (
                        <div className="">
                          <div className=" mt-4">
                            <Link
                              to="/login"
                              className="axil-btn btn-bg-primary add-card text-white w-100 m-0 text-center"
                            >
                              Login
                            </Link>
                          </div>
                          <div className="fs-7 text-center mt-3">
                            No account yet?{" "}
                            <Link to="/register">REGISTER HERE.</Link>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </li>
                  <li className="menu" style={{ width: "40px" }}>
                    <button onClick={openNav} className="w-100">
                      <MdMenuOpen />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Navbar;
