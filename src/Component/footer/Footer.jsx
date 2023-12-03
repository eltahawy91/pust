import React from "react";
import "./footer.css";
import { MdDoubleArrow } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="footer pt-5 pt-xs-4">
        <div className="container">
          <div className="row footer-info mb-60">
            <div className="col-lg-3 col-md-4 col-xs-12 mb-sm-30">
              <h4 className="mb-30">CONTACT Us</h4>
              <address>
                <i className="fa-solid fa-location-dot mr-2"></i> 123 Main
                Street, St. NW Ste, 1 Washington, DC,USA.
              </address>
              <ul className="link-small">
                <li>
                  <a href="mailto:business@support.com">
                    <MdDoubleArrow className="mr-3" />
                    business@support.com
                  </a>
                </li>
                <li>
                  <MdDoubleArrow /> +20 (0) 1204817927
                </li>
              </ul>
              <div className="icons-hover-black">
                <a href="/">
                  <BiLogoFacebook />{" "}
                </a>
                <a href="/;">
                  <AiOutlineTwitter />{" "}
                </a>
                <a href="/;">
                  {" "}
                  <BsYoutube />{" "}
                </a>
                <a href="/;">
                  {" "}
                  <BiLogoLinkedin />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-xs-12 mb-sm-30">
              <h4 className="mb-30">Links</h4>
              <ul className="link blog-link">
                <li>
                  <a href="/;">
                    <MdDoubleArrow />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/;">
                    <MdDoubleArrow /> Services
                  </a>
                </li>
                <li>
                  <a href="/;">
                    <MdDoubleArrow /> Privacy policy
                  </a>
                </li>
                <li>
                  <a href="/;">
                    <MdDoubleArrow /> Terms &amp; condition
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-5 col-xs-12 mb-sm-30">
              <h4 className="mb-30">WHAT IN STORES</h4>
              <ul className="link blog-link">
                <li>
                  <a href="/;">
                    <MdDoubleArrow /> Pet Food
                  </a>
                </li>
                <li>
                  <a href="/;">
                    <MdDoubleArrow /> Frozen Snacks
                  </a>
                </li>
                <li>
                  <a href="/;">
                    <MdDoubleArrow /> Kitchen
                  </a>
                </li>
                <li>
                  <a href="/;">
                    <MdDoubleArrow /> Branded Foods &amp;
                  </a>
                </li>
                <li>
                  <a href="/;">
                    <MdDoubleArrow /> Households &amp;
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 col-xs-12 mt-sm-30 mt-xs-15">
              <div className="newsletter">
                <h4 className="mb-30">NEWSLETTER SIGNUP</h4>
                <p>
                  Subscribe to Our Newsletter to get Important News, Amazing
                  Offers & Inside Scoops:
                </p>
                <form>
                  <input
                    type="email"
                    className="newsletter-input input-md newsletter-input mb-0"
                    placeholder="Enter Your Email"
                  />
                  <button
                    className="newsletter-btn btn btn-xs btn-color"
                    type="submit"
                    value=""
                  >
                    <SiMinutemailer className="text-white" />
                  </button>
                </form>
              </div>
            </div>
            <div className="wthree_footer_copy">
              <p className="text-center">
                ©  <span>{new Date().getFullYear()}</span>   All
                rights reserved | Designed by
                <a href="/"> SoftConic &#128515;</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
