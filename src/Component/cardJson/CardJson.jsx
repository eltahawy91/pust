import React from "react";
import "./cardJson.css";
import { FaShoppingBasket } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const CardJson = ({ book }) => {
  var bookProduct = [book];
  // console.log([book]);
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <>
      {bookProduct.map((val, index) => (
        <div
          className="card-book position-relative overflow-hidden"
          key={index}
        >
          <a href="/">
            <figure className="pb-0">
              <img src={val.ProductImage} className="card-img-top" alt="" />
            </figure>
          </a>
          <div className="tp-product-badge">
            <span className="product-hot">{val.salsabilty}</span>
          </div>

          <div className="hover-btns position-absolute d-flex m-auto">
            <button
              onClick={() => increaseCartQuantity(val.id, val.title)}
              className="single-btn bg-white"
            >
              <FaShoppingBasket className="text-gray" />
            </button>
            
            <Link to={`/${val.id}`} className="single-btn">
              <AiFillEye />
            </Link>
          </div>
          <div className="card-body text-left  pb-0">
            <h5 className="card-title mb-2">{val.category} </h5>
            <p style={{ lineHeight: "1.4" }}>{val.title} </p>
          </div>
          {/* <Link to={`/${val.id}`} className="w-100">
            <button className="btn m-auto d-block">add to card</button>
          </Link> */}
        </div>
      ))}
    </>
  );
};

export default CardJson;
